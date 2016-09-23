<template>
  <div class="selector">
    <select :title="title" class="ui fluid dropdown" @change="selectionChanged" v-model="selected">
      <option value="null" selected>-- {{ title }} --</option>
      <option v-for="item in data" :value="$index">{{ item | capitalize }}</option>
    </select>
  </div>
</template>

<script>
import { setConstraint } from '../../../vuex/actions.js'

export default {
  data () {
    return {
      selected: 'nothing'
    }
  },
  props: ['title', 'data', 'constraint'],
  methods: {
    selectionChanged: function () {
      this.setConstraint(this.constraint, this.selected)
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