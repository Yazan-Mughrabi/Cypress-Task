const { defineConfig } = require("cypress");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({
  e2e: {
    // baseUrl: 'https://www.almosafer.com',
    defaultCommandTimeout: 30000,
    setupNodeEvents(on, config) {
      allureWriter(on, config);
      return config;
    },
  },
  env: { allureReuseAfterSpec: true }
});
