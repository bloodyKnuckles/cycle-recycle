const makeDOMDriver = require('@cycle/dom').makeDOMDriver
const run = require('@cycle/run').run

module.exports = function () {

  const app = require('./app.js')

  run(app, {
    DOM: makeDOMDriver('#section')
  })

}
