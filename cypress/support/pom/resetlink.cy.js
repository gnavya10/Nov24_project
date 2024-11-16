module.exports = (on, config) => {
  on('task', {
    getResetLink: () => {
      // Logic to fetch the reset link
      // For example, you might make an API call or read from a database
      return 'https://tutorialsninja.com/demo/reset-password-link';
    },
  });

  return config;
};



