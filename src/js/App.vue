<template>
  <div id="app">
    <library-header></library-header>
    <main class="main">
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import LibraryHeader from './views/LibraryHeader';

export default {
  name: 'app',
  components: { LibraryHeader }
};
</script>

<style lang="scss">
@import '../scss/style';

#app {
  font-family: $brand-font;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin-top: 5rem;
}

</style>
