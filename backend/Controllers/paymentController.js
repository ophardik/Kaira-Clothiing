const paypal = require('paypal-rest-sdk');
const paymentModel = require('../Models/paymentModel');
const { PAYPAL_CLIENT_ID, PAYPAL_SECRET, PAYPAL_MODE, SUCCESS_URL, CANCEL_URL } = process.env;  // Using environment variables

// Configure PayPal SDK
paypal.configure({
    mode: PAYPAL_MODE, // Sandbox or live
    client_id: PAYPAL_CLIENT_ID,
    client_secret: PAYPAL_SECRET,
});
console.log(PAYPAL_CLIENT_ID, PAYPAL_SECRET, PAYPAL_MODE);

// Payment creation function
const payProduct = async (req, res) => {
    try {
        const { amount, currency } = req.body; // Extracting amount and currency from the request body

        // Input validation
        if (!amount || isNaN(amount)) {
            return res.status(400).json({ error: 'Invalid or missing amount' });
        }

        // Create payment JSON
        const create_payment_json = {
            intent: 'sale',
            payer: {
                payment_method: 'paypal',
            },
            transactions: [
                {
                    amount: {
                        currency: currency || 'USD', // Default to USD
                        total: amount.toString(), // Total payment amount as string
                    },
                    description: 'Payment for your purchase',
                },
            ],
            redirect_urls: {
                return_url: SUCCESS_URL || 'http://localhost:3000/success', // Use environment variable for URLs
                cancel_url: CANCEL_URL || 'http://localhost:3000/cancel',
            },
        };

        // Create payment with PayPal
        paypal.payment.create(create_payment_json, async (error, payment) => {
            if (error) {
                console.error('PayPal Create Payment Error:', error);
                return res.status(500).json({ error: 'Payment creation failed' });
            }

            // Extract approval URL from PayPal response
            const approvalUrl = payment.links.find((link) => link.rel === 'approval_url').href;

            // Save the payment details to the database
            const paymentRecord = new paymentModel({
                paymentId: payment.id,
                amount,
                currency: currency || 'USD',
                status: 'pending', // Initial status is pending
                createdAt: new Date(),
            });

            try {
                await paymentRecord.save(); // Save payment record
                res.status(200).json({ approval_url: approvalUrl });
            } catch (dbError) {
                console.error('Database Error:', dbError);
                res.status(500).json({ error: 'Failed to save payment record' });
            }
        });
    } catch (error) {
        console.error('PayProduct Error:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};



const executePayment = async (req, res) => {
    try {
        const { paymentId } = req.body; // Only extract paymentId from the request body

        // Input validation
        if (!paymentId) {
            return res.status(400).json({ error: 'PaymentId is required' });
        }

        // Prepare execution JSON
        const execute_payment_json = {}; // Empty because we are omitting PayerID

        // Execute payment with PayPal API
        paypal.payment.execute(paymentId, execute_payment_json, async (error, payment) => {
            if (error) {
                console.error('PayPal Execute Payment Error:', error);
                return res.status(500).json({ error: 'Payment execution failed' });
            }

            // If the payment is approved, update the payment record status to 'approved'
            if (payment.state === 'approved') {
                const paymentRecord = await paymentModel.findOneAndUpdate(
                    { paymentId },  // Find the payment record by paymentId
                    { status: 'approved' },  // Update status to 'approved'
                    { new: true }  // Return the updated document
                );

                if (!paymentRecord) {
                    return res.status(404).json({ error: 'Payment record not found' });
                }

                res.status(200).json({
                    message: 'Payment executed successfully',
                    payment,
                });
            } else {
                return res.status(400).json({ error: 'Payment not approved' });
            }
        });
    } catch (error) {
        console.error('Execute Payment Error:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};


module.exports = { payProduct, executePayment };
