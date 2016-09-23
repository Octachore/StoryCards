<template>
  <div class="settings">
    <buttons></buttons>
    <constraints></constraints>
    <import></import>
  </div>
</template>

<script>
import Buttons from './settings/Buttons'
import Constraints from './settings/constraints/Constraints'
import Import from './settings/cards-upload/Import'

export default {
  components: {
    Buttons,
    Constraints,
    Import
  },
  events: {
    'display-constraints-toggle': function () {
      this.$broadcast('display-constraint-toggle')
    },
    'cards-upload': function () {
      this.$broadcast('cards-upload')
    },
    'constraint': function (constraint, value) {
      console.dir(value)
    }
  }
}
</script>

<style>
  .settings {
    margin-top: 20px;
  }

  .settings-bar {
    margin-top: 10px;
  }

  .ui.icon.button {
    margin-bottom: 10px;
  }
</style>