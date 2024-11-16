const { defineConfig } = require('cypress');

async function setupNodeEvents(on, config) {
  on('task', {
    // Register a task named 'getResetLink'
    getResetLink: () => {
      // Replace this with your actual logic to fetch the reset link
      return 'https://your-app/reset-password';
    },
  });

  return config;
}

module.exports = defineConfig({
  e2e: {
    setupNodeEvents,
    specPattern: "cypress/**/*"
  }
});