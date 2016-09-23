<template>
  <div class="settings">
    <buttons></buttons>
    <constraints></constraints>
    <modal :show.sync="showModal">
      <div slot="header">
        <h3>
          Importer des cartes personnalisées
        </h3>
      </div>
      <div slot="body">
        <div class="ui icon message">
          <i class="cloud upload icon"></i>
          <div class="content">
            <div>
              <p>Choisissez un fichier sur votre ordinateur :</p>
              <div class="ui icon input">
                <input id="file-input" type="file">
                <i class="file icon"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div slot="footer">
        <button class="ui negative button" @click="showModal = false">Cancel</button>
        <button class="ui positive button" @click="showModal = false">OK</button>
      </div>
    </modal>
  </div>
</template>

<script>
import Buttons from './settings/Buttons'
import Constraints from './settings/constraints/Constraints'
import Modal from '../components/base/Modal'

export default {
  data () {
    return {
      showModal: false
    }
  },
  components: {
    Buttons,
    Constraints,
    Modal
  },
  events: {
    'display-constraints-toggle': function () {
      this.$broadcast('display-constraint-toggle')
    },
    'cards-upload': function () {
      this.showModal = true
    },
    'constraint': function (constraint, value) {
      console.dir(value)
    }
  }
}
</script>

<style>
  .settings {
    margin-top: 20px;
  }

  .settings-bar {
    margin-top: 10px;
  }

  .ui.icon.button {
    margin-bottom: 10px;
  }
</style>