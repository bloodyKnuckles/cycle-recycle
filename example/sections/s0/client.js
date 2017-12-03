const makeDOMDriver = require('@cycle/dom').makeDOMDriver
const run = require('@cycle/run').run

module.exports = function () {

  const app = require('./app')

  run(app, {
    DOM: makeDOMDriver('#section')
  })

}
