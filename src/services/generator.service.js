var au = require('../utils/array-utils')
var ru = require('../utils/random-utils')

module.exports = {
  generate () {
    var protagonist = au.pickRandom(protagonists)
    var weapon = au.pickRandom(weapons)
    var antagonist = au.pickRandom(antagonists)
    var place = au.pickRandom(places)

    return {
      protagonist: ru.random(1) > 0 ? protagonist.male : protagonist.female,
      weapon: weapon,
      antagonist: ru.random(1) > 0 ? antagonist.male : antagonist.female,
      place: place
    }
  },
  getProtagonists: () => protagonists,
  getWeapons: () => weapons,
  getAntagonists: () => antagonists,
  getPlaces: () => places
}

var protagonists = [
  {
    male: 'Un scientifique',
    female: 'Une scientifique'
  },
  {
    male: 'Un prince',
    female: 'Une princesse'
  },
  {
    male: 'Un policier',
    female: 'Une policière'
  },
  {
    male: 'Un journaliste',
    female: 'Une journaliste'
  },
  {
    male: 'Un médecin',
    female: 'Une médecin'
  },
  {
    male: 'Un superhéros',
    female: 'Une superhéroïne'
  },
  {
    male: 'Un robot fou',
    female: 'Une robot folle'
  },
  {
    male: 'Un dragon',
    female: 'Une dragonne'
  },
  {
    male: 'Un voleur',
    female: 'Une voleuse'
  },
  {
    male: 'Un politicien',
    female: 'Une politicienne'
  },
  {
    male: 'Un zombie',
    female: 'Une zombie'
  },
  {
    male: 'Un chaton diabolique du chaos',
    female: 'Une chatonne diabolique du chaos'
  }
]

var weapons = [
  'un miroir ou un poudrier',
  'une statuette',
  'un filtre ou une potion',
  'un bijou',
  'une épée',
  'un livre ou un grimoire'
]

var antagonists = protagonists

var places = [
  'dans une forêt',
  'sur la Lune',
  'dans un cimetière',
  'dans un laboratoire',
  'dans un château',
  'dans un bar ou une taverne'
]
