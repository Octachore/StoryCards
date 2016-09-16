<template>
  <div class="{{ color }} card">
    <div class="content">
      <div class="header">{{ title }}</div>
      <div class="description">
        <selector v-bind:name="title" v-bind:data="data"></selector>
        <selector v-if="optional_data" name="Genre" v-bind:data="optional_data"></selector>
      </div>
    </div>
    <div class="extra content">
      <div class="ui toggle checkbox">
        <input name="public" type="checkbox">
        <label>Activer la contrainte</label>
      </div>
    </div>
  </div>
</template>

<script>
import Selector from './card/Selector'

export default {
  components: {
    Selector
  },
  props: ['title', 'data', 'optional_data', 'color'],
  ready: function () {
    $('.ui.checkbox').checkbox()
    console.log(this.color)
    console.log(this.title)
  }
}
</script>