<template>
  <div class="notice">
    <p>
      Developed by <a href="//github.com/Octachore">{{author}}</a>
      <br/>
      Free & Open Source (<a href="//opensource.org/licenses/MIT">MIT License</a>). See source code on <a href="//github.com/Octachore/StoryCards">GitHub</a>
    </p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      author: 'Octachore'
    }
  },
  computed: {
    date: () => new Date().getFullYear()
  }
}
</script>

<style>
  .notice {
    margin-top: 50px;
  }
</style>