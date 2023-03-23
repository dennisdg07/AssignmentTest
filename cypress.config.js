const { defineConfig } = require('cypress')
const { verifyDownloadTasks } = require('cy-verify-downloads')

module.exports = defineConfig({
  projectId: '99x4wx',
  defaultCommandTimeout: 30000,
  numTestsKeptInMemory: 0,
  viewportWidth: 1920,
  viewportHeight: 1080,
  chromeWebSecurity: false,
  reporter: 'cypress-multi-reporters',
  reporterOptions: {
    reporterEnabled: 'cypress-mochawesome-reporter, mocha-junit-reporter',
    cypressMochawesomeReporterReporterOptions: {
      reportDir: 'cypress/reports_html',
      reportFilename: '[datetime]-report',
      timestamp: true,
      overwrite: false,
      charts: true,
      reportPageTitle: 'Automation Test Run',
      embeddedScreenshots: true,
      inlineAssets: true,
    },
    mochaJunitReporterReporterOptions: {
      mochaFile: 'cypress/reports/junit/results-[hash].xml',
    },
  },
  video: false,
  e2e: {
    setupNodeEvents(on, config) {
      on('task', verifyDownloadTasks);
      return require('./cypress/plugins/index.js')(on, config);
    },
    testIsolation: false,
    specPattern: 'cypress/e2e/tests/**/*.{js,jsx,ts,tsx}',
    supportFile: 'cypress/support/e2e.{js,jsx,ts,tsx}',
    
  },
})