<template>
  <div class="selector">
    <multiselect :custom-label="computeLabel" :placeholder="title" :options="data" :selected="selected" :searcheable="true" @update="selectionChanged"></multiselect>
  </div>
</template>

<script>
import { setConstraint } from '../../../vuex/actions.js'
import Multiselect from 'vue-multiselect'

export default {
  components: { Multiselect },
  data () {
    return {
      selected: null
    }
  },
  props: ['title', 'data', 'constraint'],
  methods: {
    selectionChanged: function (value) {
      console.dir(this.data)
      this.selected = value
      this.setConstraint(this.constraint, this.selected)
    },
    computeLabel: function ({male, female}) {
      return `${male} / ${female}`
    }
  },
  vuex: {
    actions: {
      setConstraint: setConstraint
    }
  }
}
</script>

<style>
  .selector {
    margin-top: 5px;
  }
</style>