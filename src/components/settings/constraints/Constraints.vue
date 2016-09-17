<template>
  <div class="settings-bar" v-show="display">
    <div class="ui cards two column stackable grid container">
      <card title="Protagonistes" color="green" v-bind:data="computeGenric(gen.getProtagonists())" v-bind:optional_data="genders"></card>
      <card title="Armes" color="grey" v-bind:data="gen.getWeapons()"></card>
      <card title="Antagonistes" color="red" v-bind:data="computeGenric(gen.getAntagonists())" v-bind:optional_data="genders"></card>
      <card title="Lieux" color="grey" v-bind:data="gen.getPlaces()"></card>
    </div>
  </div>
</template>

<script>
  import Card from '../constraints/Card.vue'
  var gen = require('../../../services/generator.service')

  export default {
    components: {
      Card
    },
    data () {
      return {
        display: false,
        genders: ['Masculin', 'Féminin'],
        gen: gen
      }
    },
    events: {
      'display-constraint-toggle': function () {
        console.log('event received in second child')
        this.display = !this.display
      }
    },
    methods: {
      computeGenric: function (data) {
        return data.map(function (item) {
          return item.male + ' / ' + item.female
        })
      }
    }
  }
</script>