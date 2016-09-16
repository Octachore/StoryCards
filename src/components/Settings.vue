<template>
  <div class="settings">
    <button @click="display = !display" class="ui icon toggle button">
      <i class="icon settings"></i>
    </button>
    <div class="settings-bar" v-show="display">
      <div class="ui cards two column stackable grid container">
        <card title="Protagonistes" color="green" v-bind:data="computeGenric(gen.getProtagonists())" v-bind:optional_data="genders"></card>
        <card title="Armes" color="grey" v-bind:data="gen.getWeapons()"></card>
        <card title="Antagonistes" color="red" v-bind:data="computeGenric(gen.getAntagonists())" v-bind:optional_data="genders"></card>
        <card title="Lieux" color="grey" v-bind:data="gen.getPlaces()"></card>
      </div>
    </div>
  </div>
</template>

<script>
var gen = require('../services/generator.service')
import Card from './settings/Card'

export default {
  components: {
    Card
  },
  methods: {
    computeGenric: function (data) {
      return data.map(function (item) {
        return item.male + ' / ' + item.female
      })
    }
  },
  data () {
    return {
      display: false,
      genders: ['Masculin', 'Féminin'],
      gen: gen
    }
  },
  ready: function () {
    $('.ui.button.toggle').state()
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