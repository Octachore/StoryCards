var ru = require('./random-utils')

module.exports = {
  pickRandom (array) {
    var i = ru.random(array.length - 1)
    return array[i]
  }
}
