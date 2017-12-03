const xs = require('xstream').default
const div = require('@cycle/dom').div

module.exports = (sources)  => {
  const vdom$ = xs.of(div([div('app'), div('#section')]))
  const recycle$ = xs.periodic(2000).take(3)
    .map(section => require('./sections/s' + section + '/client.js'))

  return {
    DOM: vdom$,
    Recycle: recycle$
  }
}

function donotcall_requireglob () {
  require('./sections/s*/client.js', {glob: true})
}
