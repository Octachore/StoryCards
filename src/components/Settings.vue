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
  data () {
    return {
      display: false
    }
  },
  events: {
    'display-constraints-toggle': function () {
      console.log('event received in parent')
      this.$broadcast('display-constraint-toggle')
    },
    'cards-upload': function () {
      this.$broadcast('cards-upload')
    }
  },
  ready: function () {
    $('.ui.button.toggle').state()
    $('.button.constraints').popup({
      position: 'left center',
      inline: true,
      delay: {
        show: 500,
        hide: 300
      }
    })
    $('.button.custom').popup({
      position: 'right center',
      inline: true,
      delay: {
        show: 500,
        hide: 300
      }
    })
    $('.ui.modal').modal({
      inverted: true
    })
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