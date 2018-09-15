<template>
  <header>
    <h1 class="float-left">Vue Component Library</h1>
    <p class="float-right"><router-link to="/">Home</router-link></p>
  </header>
</template>
<script>
export default {
  name: 'library-header',
};

</script>

<style lang="scss" scoped>
@import '../../scss/style';

header {
  background-color: $brand-color;
  // background-color: transparent;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 10;
  height: 3rem;
  width: 100%;
  padding: 0.5rem;
  h1, a {
    color: $brand-white;
    font-family: $brand-accent-font;
    font-size: 1.25rem;
    @media screen and ( min-width: 768px ) {
      font-size: 1.5rem; 
    }
  }
}

</style>