import { defineConfig } from "cypress";

export default defineConfig({
  // setupNodeEvents can be defined in either
  // the e2e or component configuration
  video: false,
  screenshotOnRunFailure: false,
  e2e: {
    setupNodeEvents(on, config) {
      // modify config values examples
      // config.defaultCommandTimeout = 10000
      config.defaultCommandTimeout = 40000
      config.responseTimeout = 40000
      config.chromeWebSecurity = false
      // IMPORTANT return the updated config object
      return config;
    },
    reporter: "cypress-multi-reporters",
    reporterOptions: {
      reporterEnabled: "mochawesome",
      mochawesomeReporterOptions: {
        reportDir: "cypress/reports/mocha",
        quite: true,
        overwrite: false,
        html: false,
        json: true,
      },
    },
  },
});
