// craco.config.js
module.exports = {
    webpack: {
      configure: (webpackConfig) => {
        // Disable CSS minimization
        webpackConfig.optimization.minimize = false;
  
        return webpackConfig;
      },
    },
  };
  