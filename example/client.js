const makeRecycleDriver = require('../')
const run = require('@cycle/run').run
const makeDOMDriver = require('@cycle/dom').makeDOMDriver

const app = require('./app')

run(app, {
  DOM: makeDOMDriver('#app'),
  Recycle: makeRecycleDriver()
})

