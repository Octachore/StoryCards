<template>
  <div class="selector">
    <select v-bind:name="name" class="ui fluid dropdown">
      <option value="">{{ name }}</option>
      <option v-for="item in data" value="item">{{ item | capitalize }}</option>
    </select>
  </div>
</template>

<script>
export default {
  ready: function () {
    $('.ui.dropdown').dropdown()
  },
  props: ['name', 'data']
}
</script>

<style>
  .selector {
    margin-top: 5px;
  }
</style>