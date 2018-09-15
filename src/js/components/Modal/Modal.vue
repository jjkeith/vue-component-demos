<template>
  <transition name="modal">
    <!-- <div class="modal-mask" @click="$emit('close-modal')"> -->
    <div class="modal-mask" @click="$emit('close-modal')">
      <div class="modal-wrapper">
        <div class="modal-container" @click.stop :style=" { width: modalWidth + '%' }">
          <button v-if="xToClose" @click="$emit('close-modal')"><i class="fas fa-times fa-lg"></i></button>
          <div class="modal-header">
            <slot name="header"></slot>
          </div>
          <div class="modal-body">
            <slot name="body"></slot>
          </div>
          <div class="modal-footer">
            <slot name="footer">
              <div class="text-right">
                <button class="button" @click="$emit('close-modal');">
                  Sure
                </button>
              </div>
            </slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'Modal',
  props:{
    showModal: {
      type: Boolean,
      default: false
    },
    xToClose: {
      type: Boolean,
      default: true
    },
    size: {
      type: String,
      default: 'medium',
      validator: function(value) {
        return ['tiny', 'small', 'medium', 'large', 'full'].indexOf(value) !== -1
      }
    }
  },
  computed: {
    //  Replicates Foundation's default modal sizes
    // Medium/invalid value = 600px as provided by the css.
    // On small screens, it is always full.
    modalWidth: function() {
      if (window.matchMedia("(max-width: 767px)").matches) {
        return 100;
      }
      switch (this.size) {
        case 'tiny':
          return 30;
        case 'small':
          return 50;
        case  'large':
          return 90;
        case  'full':
          return 100;
        default:
          return null;
      }
    }
  },
};
</script>

<style lang="scss" scoped>
@import '../../../scss/style';

.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 600px;
  margin: 0px auto;
  padding: 1rem;
  background-color: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
  transition: all 0.3s ease;
  height: 100%;
  @media screen and ( min-width: 768px ) {
    height: auto;
  }
}

.fas.fa-times {
  color: #666;
}

.modal-header {
  margin-top: 0;
  color:$brand-color;
}

.modal-body {
  margin: 20px 0;
}


/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}


</style>
