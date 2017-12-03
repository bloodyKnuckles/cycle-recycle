const makeDOMDriver = require('@cycle/dom').makeDOMDriver
const run = require('@cycle/run').run

module.exports = function () {

  run(require('./app.js'), {
    DOM: makeDOMDriver('#section')
  })

}
