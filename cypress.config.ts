import { defineConfig } from 'cypress';

// Verify download import
const { isFileExist, findFiles } = require('cy-verify-downloads')

export default defineConfig({
  e2e: {
    baseUrl: "https://uitestingplayground.com",
    setupNodeEvents(on, config) {
      // Verify download import
      on('task', { isFileExist, findFiles })
      // for cypress-mochawesome-reporter
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    // Configure your E2E tests here
    specPattern: "cypress/e2e/**/*.{cy,spec}.{js,ts}",
    env:{
      demoVar: "Hello from cypress.config.ts",
      demoQA: "https://demoqa.com/",
      theInternet: "https://the-internet.herokuapp.com/",
      Angular: "https://www.globalsqa.com/",
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