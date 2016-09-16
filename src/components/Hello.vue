<template>
  <div class="hello">
    <h1 class="ui orange header">
      <img class="ui image" src="../assets/logo.png">
      <div class="content">
        {{ msg }}
      </div>
    </h1>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Tarot des contes'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  color: #42b983;
}
</style>
