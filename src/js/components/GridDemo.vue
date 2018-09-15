<template>
  <div id="grid-demo">
    <h2>Grid Demo</h2>
    <div class="grid">
      <div class="cell large-3 medium-6 small-12">large-3 medium-6 small-12</div>
      <div class="cell large-4 medium-6 small-12">large-4 medium-6 small-12</div>
      <div class="cell large-5 medium-6 small-12">large-5 medium-6 small-12</div>
    </div>
    <div class="grid">
      <div class="cell large-1 medium-2 small-6">large-1 medium-2 small-6</div>
      <div class="cell large-2 medium-4 small-6">large-2 medium-4 small-6</div>
      <div class="cell large-3 medium-2 small-6">large-3 medium-2 small-6</div>
      <div class="cell large-4 medium-4 small-6">large-4 medium-4 small-6</div>
      <div class="cell large-4 medium-2 small-6">large-4 medium-2 small-6</div>
      <div class="cell large-6 medium-4 small-6">large-6 medium-4 small-6</div>
    </div>
  </div>  
</template>
<script>
export default {
  name: 'grid-demo',
  data() {
    return {}
  }
}
</script>
<style lang="scss" scoped>
@import '../../scss/style';

#grid-demo {
  margin: 2rem;
}

// Replicates Foundation's Flexbox Grid Using CSS Grid,
// but does not include the full functionality of CSS Grid
$sizes: small medium large;
$grid-gap: 1rem;
$grid-column-count: 12;

@each $size in $sizes {
  @for $i from 1 through $grid-column-count {
    @media screen and (min-width: 1024px) {
      .cell.large-#{$i} {
        grid-column: span $i;
        width: $i/12*100% - 5%;
        background-color: magenta;
      }
    }
    @media screen and (min-width: 768px) and (max-width: 1023px) {
      .cell.medium-#{$i} {
        grid-column: span $i;
        width: $i/12*100% - 5%;
        background-color: chartreuse;
      }
    }
    .small-#{$i} {
      grid-column: span $i;
      background-color: dodgerblue;
      width: $i/12*100% - 5%;
    }
  }
}

.grid {
  display: grid;
  grid-auto-rows: 100px;
  grid-gap: $grid-gap;
  grid-template-columns: repeat( $grid-column-count, 1fr);
  margin-top: 1rem;
}

.grid .cell {
  padding: 10px;
    border: 5px solid darken( $brand-color, 20% );
    border-radius: 5px;
    // background-color: $brand-color;
    color: #fff;
    float: left;  
}

@supports (display:grid) {
  .grid .cell {
    width: auto;
  }
}

</style>


