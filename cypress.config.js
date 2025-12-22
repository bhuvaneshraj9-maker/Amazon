const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl:'https://www.saucedemo.com/v1/',
      
    setupNodeEvents(on, config) {

      // implement node event listeners here
     // return require('./cypress/plugins/index.js')(on,config)
      //greptags
      const { defineConfig } = require('cypress')
    },
  }
  
});
