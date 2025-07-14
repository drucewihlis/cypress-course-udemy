import { defineConfig } from 'cypress';

// Verify download import
const { isFileExist, findFiles } = require('cy-verify-downloads')

const xlsx = require("node-xlsx").default;
const fs = require("fs");
const path = require("path");
// mySQL reqs
const mysql = require('mysql');
function queryTestDb(query, config) {
  // creates a new mysql connection using credentials from cypress.json env's
  const connection = mysql.createConnection(config.env.db);
  // start connection to db
  connection.connect();
  // exec query + disconnect to db as a Promise
  return new Promise((resolve, reject) => {
    connection.query(query, (error, results) => {
      if (error) reject(error)
      else {
        connection.end();
        // console.log(results)
        return resolve(results);
      }
    });
  });
}

export default defineConfig({
  e2e: {
    baseUrl: "https://uitestingplayground.com",
    setupNodeEvents(on, config) {
      // Verify download import
      on('task', { isFileExist, findFiles })
      // Excel
      on("task", {
        parseXlsx({ filePath }) {
          return new Promise((resolve, reject) => {
            try {
              const jsonData = xlsx.parse(fs.readFileSync(filePath));
              resolve(jsonData);
            } catch (e) {
              reject(e);
            }
          });
        }
      });
      // for cypress-mochawesome-reporter
      require('cypress-mochawesome-reporter/plugin')(on);
      // mysql
      on('task', {
        queryDb: query => {
          return queryTestDb(query, config);
        },
      });
    },
    // Configure your E2E tests here
    specPattern: "cypress/e2e/**/*.{cy,spec}.{js,ts}",
    env:{
      demoVar: "Hello from cypress.config.ts",
      demoQA: "https://demoqa.com/",
      theInternet: "https://the-internet.herokuapp.com/",
      Angular: "https://www.globalsqa.com/",
      db: {
        host: "localhost",
        user: "root",
        password: "",
        database: "cypress_test",
      },
      mobileViewportWidthBreakpoint: 400,
    },
    pageLoadTimeout: 60000,
    viewportHeight: 1000,
    viewportWidth: 1400,
    reporter: 'cypress-mochawesome-reporter',
    reporterOptions: {
      charts: true,
      reportPageTitle: 'Udemy Course Report',
      embeddedScreenshots: true,
      inlineAssets: true,
      saveAllAttempts: false,
    },
    // video: true,
    screenshotOnRunFailure: true,
  },
})