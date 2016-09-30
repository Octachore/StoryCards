<template>
  <div class="settings-bar" v-show="display">
    <div class="ui cards two column stackable grid container">
      <card title="Protagonistes" color="green" v-bind:data="gen.getProtagonists()" v-bind:optional_data="genders" target="protagonist"></card>
      <card title="Armes" color="grey" v-bind:data="gen.getWeapons()" target="weapon"></card>
      <card title="Antagonistes" color="red" v-bind:data="gen.getAntagonists()" v-bind:optional_data="genders" target="antagonist"></card>
      <card title="Lieux" color="grey" v-bind:data="gen.getPlaces()"  target="place"></card>
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