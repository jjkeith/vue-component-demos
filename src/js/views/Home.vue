<template>
  <div id="home">
    <h2>Vue Component Demos</h2>
    <ul class="menu vertical padding-bottom-3">
      <li><router-link to="/cover-generator">Cover Generator</router-link></li>
      <li><router-link to="/custom-checkbox">Custom Checkbox</router-link></li>
      <li><router-link to="/dot-progress-tracker">Dot Progress Tracker</router-link></li>
      <li><router-link to="/drag-and-drop">Drag and Drop with Draggable</router-link></li>
      <li><router-link to="/grid-demo">Grid Demo</router-link></li>
      <li><router-link to="/modal">Modal</router-link></li>
      <li><router-link to="/off-canvas-menu">Off-Canvas Menu</router-link></li>
      <!-- TODO Repair the below demo -->
      <!-- <li><router-link to="/paginated-grid-selector">Paginated Grid Selector</router-link></li> -->
      <li><router-link to="/vue-tour">VueTour</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Home',
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import '../../scss/style';

#home{
  margin: 2rem;
}

h1, h2 {
  font-weight: normal;
}

a {
  color: $brand-color;
}

</style>
