<template>
  <div class="buttons">
    <button @click="toggleConstraintsDisplay" class="ui icon toggle button constraints" data-content="Afficher/masquer les contraintes">
      <i class="icon settings"></i>
    </button>
    <button @click="uploadCards" class="ui icon button custom" data-content="Cartes personnalisées">
      <i class="icon cloud upload"></i>
    </button>
  </div>
</template>

<script>
  export default {
    methods: {
      toggleConstraintsDisplay: function () {
        this.$dispatch('display-constraints-toggle')
      },
      uploadCards: function () {
        this.$dispatch('cards-upload')
      }
    }
  }
</script>