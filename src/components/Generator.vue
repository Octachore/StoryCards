<template>
  <div class="generator">
    <div class="ui segment" v-if="protagonist !== null">
      <p>
        <p class="ui green label">{{ protagonist }}</p> avec
        <p class="ui gray label">{{ weapon }}</p> contre
        <p class="ui red label">{{ antagonist | lowercase }}</p>
        <p class="ui gray label">{{ place }}</p>
      </p>
    </div>
    <button @click="generate" class="ui primary button">
    Tirer les cartes
  </button>
  </div>
</template>

<script>
var gen = require('../services/generator.service')

export default {
  data () {
    return {
      msg: '...',
      protagonist: null,
      weapon: null,
      antagonist: null,
      place: null
    }
  },
  computed: {
  },
  methods: {
    generate: function () {
      var data = gen.generate()
      this.protagonist = data.protagonist
      this.weapon = data.weapon
      this.antagonist = data.antagonist
      this.place = data.place
    }
  }
}
</script>

<style>
  .generator {
    margin-top:50px;
  }
  
  .ui.compact.segments {
    display: inline-flex;
  }
</style>