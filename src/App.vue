<template>
  <div class="ui center aligned container" id="app">
    <hello></hello>
    <generator></generator>
    <settings></settings>
    <notice></notice>
  </div>
</template>

<script>
import Hello from './components/Hello'
import Generator from './components/Generator'
import Settings from './components/Settings'
import Notice from './components/Notice'

export default {
  components: {
    Hello,
    Generator,
    Settings,
    Notice
  }
}
</script>

<style src="../static/semantic.css"></style>

<style>
#app {
  margin-top: 50px;
}

.logo {
  width: 100px;
  height: 100px;
}
</style>
