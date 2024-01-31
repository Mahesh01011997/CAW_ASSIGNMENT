const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'o16zn8',
  video: true,
  retries: {
    runMode: 1,
    openMode: 2,
  },
  defaultCommandTimeout: 6000,
  parseSpecialCharSequences:false,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    excludeSpecPattern: [
      "**/cypress/e2e/1-getting-started",
      "**/cypress/e2e/2-advanced-examples",
    ],
    baseUrl: "https://testpages.herokuapp.com/styled/tag/dynamic-table.html",
    
  },
});
