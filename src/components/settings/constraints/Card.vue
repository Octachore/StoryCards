<template>
  <div class="{{ color }} card">
    <div class="content">
      <div class="header">{{ title }}</div>
      <div v-if="show" class="description">
        <selector :title="title" :data="data" v-ref:select1 :constraint="target"></selector>
        <selector v-if="optional_data" title="Genre" :data="optional_data" :constraint="genderConstraint"></selector>
      </div>
    </div>
    <div class="extra content">
      <div class="ui checkbox">
        <input id="{{ target }}_constraint_switch" name="public" type="checkbox" v-model="switch" @change="switchConstraintApplication(target, switch)">
        <label for="{{ target }}_constraint_switch">Activer la contrainte</label>
      </div>
    </div>
  </div>
</template>

<script>
import Selector from './Selector'
import { setConstraintApplication } from '../../../vuex/actions.js'
import { getAppliedConstraints } from '../../../vuex/getters.js'

export default {
  data () {
    return {
      switch: false
    }
  },
  components: {
    Selector
  },
  computed: {
    genderConstraint: function () {
      return this.target + '_gender'
    },
    show: function () {
      return this.appliedConstraints[this.target]
    }
  },
  props: ['title', 'data', 'optional_data', 'color', 'target'],
  vuex: {
    getters: {
      appliedConstraints: getAppliedConstraints
    },
    actions: {
      switchConstraintApplication: setConstraintApplication
    }
  }
}
</script>