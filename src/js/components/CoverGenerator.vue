<template>
<div>
  <h2 class="text-center">Cover Generator</h2>
  <div class="row">
    <div class="button-group column shrink align-center">
      <button
        class="button"
        v-bind:class="{ 'hollow': activeTab !== 'character'}"
        @click="activeTab = 'character'">Character</button>
      <button
        class="button tab-btn mod-sticker"
        v-bind:class="{ 'hollow': activeTab !== 'sticker'}"
        @click="activeTab = 'sticker'">Stickers</button>
      <button
        class="button tab-btn mod-scene"
        v-bind:class="{ 'hollow': activeTab !== 'scene'}"
        @click="activeTab = 'scene'">Scene</button>
    </div>
    <div class="frame">
      <transition name="slide-scene">
        <i
          :class="scenes[coverObj.scene].icon"
          :key="coverObj.scene"
          class="scene"/>
      </transition>
      <transition name="slide-sticker">
        <i
          :class="stickers[coverObj.sticker].icon"
          :key="coverObj.sticker"
          class="sticker"/>
      </transition>
      <transition name="slide-team" mode="out-in">
        <i
          :class="characters[coverObj.character].icon"
          :key="coverObj.character"
          class="character"
          id="team"/>
      </transition>
    </div>
    <div class="text-center margin-top-1">
      <button class="button" @click="previousAsset( activeTab )"><i class="fas fa-chevron-left"></i></button>
      <button class="button" v-on:click="onSubmit" type="submit">Finish</button>
      <button class="button" @click="nextAsset( activeTab )"><i class="fas fa-chevron-right"></i></button>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "cover-generator",
  data() {
    return {
      activeTab: 'character',
      coverObj: { character: 0, sticker: 0, scene: 0 },
      characters: [
        { id: 'ch00', icon: 'fas fa-users fa-10x' },
        { id: 'ch01', icon: 'fas fa-people-carry fa-10x' },
        { id: 'ch02', icon: 'fab fa-android fa-10x' },
        { id: 'ch03', icon: 'fas fa-swimmer fa-10x' },
      ],
      stickers: [
        { id: 'st00', icon: 'fas fa-ribbon fa-7x' },
        { id: 'st01', icon: 'fab fa-empire fa-7x' },
        { id: 'st02', icon: 'fas fa-certificate fa-7x' },
        { id: 'st03', icon: 'fab fa-jedi-order fa-7x' },
      ],
      scenes: [
        { id: 'sc00', icon: 'fas fa-tree fa-10x' },
        { id: 'sc01', icon: 'fas fa-leaf fa-10x' },
        { id: 'sc02', icon: 'fab fa-pagelines fa-10x' },
        { id: 'sc03', icon: 'fas fa-cannabis fa-10x' },
      ]
    };
  },
  methods: {
    nextAsset: function( activeTab ) {
      if ( activeTab === 'character' ) {
        this.coverObj.character < this.characters.length - 1  ? this.coverObj.character ++ : this.coverObj.character = 0;
      }
      if ( activeTab === 'sticker' ) {
        this.coverObj.sticker < this.stickers.length - 1  ? this.coverObj.sticker ++ : this.coverObj.sticker = 0;
      }
      if ( activeTab === 'scene' ) {
        this.coverObj.scene < this.scenes.length - 1  ? this.coverObj.scene ++ : this.coverObj.scene = 0;
      }
    },
    previousAsset: function( activeTab ) {
      if ( activeTab === 'character' ) {
        this.coverObj.character > 0 ? this.coverObj.character -- : this.coverObj.character = 5;
      }
      if ( activeTab === 'sticker' ) {
        this.coverObj.sticker > 0 ? this.coverObj.sticker -- : this.coverObj.sticker = 3;
      }
      if ( activeTab === 'scene' ) {
        this.coverObj.scene > 0 ? this.coverObj.scene -- : this.coverObj.scene = 3;
      }
    },
    onSubmit: function() {
      console.log( this.coverObj );
      this.$router.push( '/');
    }
  }
};
</script>

<style lang="scss" scoped>
@import '../../scss/style';

.frame {
  border: 1px solid black;
  height: 400px;
  width: 400px;
  margin: 0 auto;
  position: relative;
}

.scene {
  @include m-absolute-positioner( 1rem, null, null, 1rem );
}

.sticker {
  @include m-absolute-positioner( 1rem, 1rem, null, null );
}

.character {
  @include m-absolute-positioner( null, 1rem, 1rem, null );
}
// team transition
.slide-team-enter-active {
  transition: all 0.3s ease-in;
  animation: none;
}

.slide-leave-active {
  transition: all 0.3s ease-out;
}

.slide-team-enter {
  transform: translateX(20px);
  opacity: 0;
}

.slide-team-enter-to {
  opacity: 1;
}

.slide-team-leave-to {
  transform: translateX(-100px);
  opacity: 0;
  animation: none;
}

// Sticker transition
.slide-sticker-enter-active {
  transition: all 0.3s ease-in;
}

.slide-leave-active {
  transition: all 0.3s ease-out;
}

.slide-sticker-enter {
  transform: translateX(200px);
  opacity: 0;
}


// Background transition
.slide-scene-enter-active,
.slide-scene-leave-active {
   transition: all 0.4s ease-in-out;
}

.slide-scene-enter {
  opacity: 0;
}

.slide-scene-enter-to {
  opacity: 1;
}

.slide-scene-leave-to {
  opacity: 0.5;
}

</style>
