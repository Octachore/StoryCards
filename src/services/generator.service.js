var au = require('../utils/array-utils')
var ru = require('../utils/random-utils')

module.exports = {
  generate (constraints, appliedConstraints) {
    return {
      protagonist: getValue('protagonist', constraints, appliedConstraints),
      weapon: getValue('weapon', constraints, appliedConstraints),
      antagonist: getValue('antagonist', constraints, appliedConstraints),
      place: getValue('place', constraints, appliedConstraints)
    }
  },
  getProtagonists: () => data.protagonists,
  getWeapons: () => data.weapons,
  getAntagonists: () => data.antagonists,
  getPlaces: () => data.places
}

var getValue = function (type, constraints, appliedConstraints) {
  var source = data[type + 's']
  var result = au.pickRandom(source)
  var genderVal = ru.random(1) > 0

  // Apply potential constraints
  if (appliedConstraints[type]) {
    if (constraints[type] != null) result = constraints[type]
    if (constraints[type + '_gender'] != null) genderVal = constraints[type + '_gender']
  }

  // if the result has a male and female declinasion, set it to one of this values
  if (result.male && result.female) result = genderVal ? result.male : result.female

  return result
}

var data = {
  protagonists: [
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
  ],
  weapons: [
    'un miroir ou un poudrier',
    'une statuette',
    'un filtre ou une potion',
    'un bijou',
    'une épée',
    'un livre ou un grimoire'
  ],
  antagonists: [
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
  ],
  places: [
    'dans une forêt',
    'sur la Lune',
    'dans un cimetière',
    'dans un laboratoire',
    'dans un château',
    'dans un bar ou une taverne'
  ]
}
