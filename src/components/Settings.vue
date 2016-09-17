<template>
  <div class="settings">
    <div>
      <button @click="display = !display" class="ui icon toggle button constraints" data-content="Afficher/masquer les contraintes">
        <i class="icon settings"></i>
      </button>
      <button @click="showModal" class="ui icon button custom" data-content="Cartes personnalisées">
        <i class="icon cloud upload"></i>
      </button>
    </div>
    <div class="settings-bar" v-show="display">
      <div class="ui cards two column stackable grid container">
        <card title="Protagonistes" color="green" v-bind:data="computeGenric(gen.getProtagonists())" v-bind:optional_data="genders"></card>
        <card title="Armes" color="grey" v-bind:data="gen.getWeapons()"></card>
        <card title="Antagonistes" color="red" v-bind:data="computeGenric(gen.getAntagonists())" v-bind:optional_data="genders"></card>
        <card title="Lieux" color="grey" v-bind:data="gen.getPlaces()"></card>
      </div>
    </div>
  </div>
  <div class="ui modal">
    <i class="close icon"></i>
    <div class="header">
      Uploader des cartes personnalisées
    </div>
    <div class="content">
      Upload cards...
    </div>
    <div class="actions">
      <div @click="hideModal" class="ui negative button">Annuler</div>
      <div @click="processModal" class="ui positive button">Valider</div>
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
    },
    showModal: function () {
      $('.ui.modal').modal('show')
    },
    hideModal: function () {
      $('.ui.modal').modal('hide')
    },
    processModal: function () {
      this.hideModal()
      // todo: process uploaded files
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