module.exports = function makeRecycleDriver () {
  return function (recycle$) {
    recycle$.addListener({
      next: section => section(),
      error: () => {},
      complete: () => {}
    })
  }
}
