<template>
  <div>
    <h2 class="text-center">Off-Canvas Menu</h2>
    <button class="off-canvas-trigger" @click="showOffCanvas = true">
      <span class="show-for-sr">open menu</span><i class="fas fa-bars fa-2x"></i>
    </button>
    <transition name="background-fade">
      <div class="off-canvas-background" :class="{ 'is-active': showOffCanvas }" @click="showOffCanvas = false" v-if="showOffCanvas"></div>
    </transition>
    <transition name="slide">
      <menu class="off-canvas" v-if="showOffCanvas">
        <button class="off-canvas-dismiss close-button" v-on:click="showOffCanvas = false" aria-label="Close alert" type="button">
          <span aria-hidden="true"><i class="fas fa-times"></i></span>
        </button>
        <div class="menu vertical">
          <router-link to="/" class=""><span v-on:click="showOffCanvas = false">Option 1</span></router-link>
          <router-link to="/" class=""><span v-on:click="showOffCanvas = false">Option 2</span></router-link>
          <router-link to="/" class=""><span v-on:click="showOffCanvas = false">Option 3</span></router-link>
          <router-link to="/" class=""><span v-on:click="showOffCanvas = false">Option 4</span></router-link>
        </div> 
      </menu>
    </transition>
  </div>
</template>
<script>
export default {
  name: 'off-canvas-menu',
  data() {
    return {
      showOffCanvas: false
    };
  },
  methods: {},
};

</script>

<style lang="scss" scoped>
@import '../../scss/style';

.background-fade-enter-active, .background-fade-leave-active {
  transition: opacity 0.2s;
}

.background-fade-enter, .background-fade-leave-to {
  opacity: 0;
}

.background-fade-enter-to, .background-fade-leave {
  opacity: 0.7;
}

.slide-enter-active, .slide-leave-active {
  transition: transform 0.4s;
}

.slide-enter, .slide-leave-to {
  transform: translateX(-100%);
}

.slide-enter-to, .slide-leave {
  transform: translateX(0);
}

.off-canvas-background {
  background-color: black;
  opacity: 0;
  height: 100%;
  width: 100%;
  z-index: 2;
  position: fixed;
    top: 0;
    left: 0;
}

  .off-canvas-background.is-active {
    opacity: 0.7;
  }

.off-canvas {
  background-color: #ffffff;
  height: 100%;
  width: 240px;
  margin-top: 0;
  padding: 4rem 1rem 1rem;
  z-index: 10;
  position: fixed;
    top: 0;
    left: 0;
}

.off-canvas-trigger {
  @include m-absolute-positioner( 4rem, null, null, 1rem );
}

.off-canvas-dismiss {
  @include m-absolute-positioner( 1rem, null, null, 1rem );
}

</style>