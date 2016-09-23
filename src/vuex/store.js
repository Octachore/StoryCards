import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  constraints: {
    protagonist: null,
    protagonist_gender: null,
    weapon: null,
    antagonist: null,
    antagonist_gender: null,
    place: null
  },
  appliedConstraints: {
    protagonist: false,
    weapon: false,
    antagonist: false,
    place: false
  }
}

const mutations = {
  CONSTRAINT (state, type, value) {
    state.constraints[type] = value
  },
  APPLY_CONSTRAINT (state, type, value) {
    state.appliedConstraints[type] = value
  }
}

export default new Vuex.Store({
  state,
  mutations
})
