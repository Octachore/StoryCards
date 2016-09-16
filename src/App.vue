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
/*html {
  height: 100%;
}

body {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  color: red;
}

#app {
  color: #2c3e50;
  margin-top: -100px;
  max-width: 800px;
  font-family: Source Sans Pro, Helvetica, sans-serif;
  text-align: center;
}

#app a {
  color: #42b983;
  text-decoration: none;
}*/

#app {
  margin-top: 50px;
}

.logo {
  width: 100px;
  height: 100px;
}
</style>
