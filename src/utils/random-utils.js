module.exports = {
  /**
   * Returns a random integer between 0 and max (inclusive)
   */
  random (max) {
    return this.getRandomInt(0, max)
  },

  /**
   * Returns a random number between min (inclusive) and max (exclusive)
   */
  getRandomArbitrary (min, max) {
    return Math.random() * (max - min) + min
  },

  /**
   * Returns a random integer between min (inclusive) and max (inclusive)
   */
  getRandomInt (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
  }
}
