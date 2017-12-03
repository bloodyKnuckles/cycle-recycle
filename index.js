module.exports = function makeRecycleDriver () {
  return function (recycle$) {
    recycle$.addListener({
      next: recycle => recycle(),
      error: () => {},
      complete: () => {}
    })
  }
}
