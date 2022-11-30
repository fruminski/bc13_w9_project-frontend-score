import {resetApisTable} from '../../bc13_w9_project-backend-score/db/helpers.js'
// const {resetApisTable} = require('../../bc13_w9_project-backend-score/db/helpers')
// const { defineConfig } = require("cypress");
import {defineConfig} from 'cypress'


export default defineConfig({
  e2e: {
    setupNodeEvents(on, config)  {
      on('task', {
        'defaults:db': () => {
          return resetApisTable()
        },
      })
    },
    upNodeEvents(on, config) {}
  }
 
});


