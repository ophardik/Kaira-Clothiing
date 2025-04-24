import React, { useEffect, useState } from "react";
import axios from "axios";

const AllUsers = () => {
  const [users, setUsers] = useState([]);
  const BASE_URL=process.env.REACT_APP_BACKEND_URL||"https://kaira-clothiing-backend-working.onrender.com/"

  // Fetch users from API
  const fetchUsers = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/admin/allUsers`);
      console.log(response);
      setUsers(response.data.data); // Make sure the response shape matches
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  // Delete user
  const handleDelete = async (id) => {
    try {
      const confirmDelete = window.confirm("Are you sure you want to delete this user?");
      if (!confirmDelete) return;
      const response = await axios({
        method: "delete",
        url: `${BASE_URL}/admin/deleteUser`,
        data: { id }, // sending user ID now
      });

      if (response.data.success) {
        alert(response.data.message);
        setUsers((prevUsers) => prevUsers.filter((user) => user._id !== id));
      } else {
        alert(response.data.message);
      }
    } catch (error) {
      console.error("Error deleting user:", error);
      alert("An error occurred while deleting the user.");
    }
  };
  
  

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="container py-4">
      <div className="bg-white p-4 rounded shadow-sm">
        <h2 className="text-center text-primary mb-4">All Users</h2>

        <div className="table-responsive">
          <table className="table table-hover align-middle">
            <thead className="table-primary">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                {/* <th scope="col">Role</th> */}
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users && users.length > 0 ? (
                users.map((user, index) => (
                  <tr key={user._id}> {/* Use user._id as key */}
                    <th scope="row">{index + 1}</th>
                    <td>{user.userName}</td>
                    <td>{user.email}</td>
                    {/* <td>
                      <span className="badge bg-secondary">{user.role}</span>
                    </td> */}
                    <td>
                      {/* <button className="btn btn-sm btn-outline-primary me-2">Edit</button> */}
                      <button
                        className="btn btn-sm btn-outline-danger"
                        onClick={() => handleDelete(user._id)} // Call delete function on button click
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="text-center">No users found.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllUsers;
