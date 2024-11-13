const { defineConfig } = require("cypress");
const sqlServer = require('cypress-sql-server');
const mysql = require("mysql")

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
      // tasks = sqlServer.loadDBPlugin(config.db);
      // on('task', tasks);
      // config.db = {
      //   userName: "sql12744482",
      //   password: "QtHztiRDbt",
      //   server: "sql12.freesqldatabase.com",
      //   options: {
      //       database: "sql12744482",
      //       encrypt: true,
      //       rowCollectionOnRequestCompletion : true
      //   }
      // } 
      on('task',
        {
          queryDb: query => { return queryTestDb(query, config) },
        });
    
    },
  },
  "env": {
    "db": {
      "host": "sql12.freesqldatabase.com",
      "user": "sql12744482",
      "password": "QtHztiRDbt",
      "database": "sql12744482"
    }
  }
});

function queryTestDb(query, config) {
  // creates a new mysql connection using credentials from cypress.json env's
  const connection = mysql.createConnection(config.env.db)
  // start connection to db
  connection.connect()
  // exec query + disconnect to db as a Promise
  return new Promise((resolve, reject) => {
      connection.query(query, (error, results) => {
          if (error) reject(error)
          else {
              connection.end()
              return resolve(results)
          }
      })
  })
}
 