const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "f4ntgv",
  defaultCommandTimeout: 8000,
  env: {
    url: "https://www.demoblaze.com/"
  },
  retries: {
    runMode: 1,
  },
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});
 