const xs = require('xstream').default
const div = require('@cycle/dom').div

module.exports = (sources)  => {
  const vdom$ = xs.of(div([div('section 0'), div('#page', 'page')]))

  return {
    DOM: vdom$
  }
}
