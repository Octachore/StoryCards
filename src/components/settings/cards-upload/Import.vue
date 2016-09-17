<template>
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
  export default {
    methods: {
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
    events: {
      'cards-upload': function () {
        this.showModal()
      }
    }
  }
</script>