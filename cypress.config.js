const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://josh.test',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    experimentalSessionSupport: true
  },
});
