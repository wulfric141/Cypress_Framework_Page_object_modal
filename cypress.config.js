const { defineConfig } = require("cypress");
const sqlServer = require('cypress-sql-server');

// async function setupNodeEvents(on, config) {
//   config.db = {
//     userName: "sql12744482",
//     password: "QtHztiRDbt",
//     server: "sql12.freesqldatabase.com",
//     options: {
//         database: "sql12744482",
//         encrypt: true,
//         rowCollectionOnRequestCompletion : true
//     }
//   } 
//   tasks = sqlServer.loadDBPlugin(config.db);
//   on('task', tasks);
//   return config;
// }

module.exports = defineConfig({
  projectId: "f4ntgv",
  defaultCommandTimeout: 20000,
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
      config.db = {
        userName: "sql12744482",
        password: "QtHztiRDbt",
        server: "sql12.freesqldatabase.com",
        options: {
            database: "sql12744482",
            encrypt: true,
            rowCollectionOnRequestCompletion : true
        }
      } 
      tasks = sqlServer.loadDBPlugin(config.db);
      on('task', tasks);
    },
  },
});
 