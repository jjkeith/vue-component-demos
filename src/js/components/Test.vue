<template>
  <div id="test">
    <h2>Giphy API Integration</h2>
    <div class="input-group margin-top-2">
      <input class="input-group-field" v-model="search" type="text" @keyup.enter="getGif"/>
      <div class="input-group-button">
        <button class="button" @click.native="getGif()" :disabled="search == ''">Submit</button>
      </div>
    </div>
    <!-- <img :src="gifSrc" class="giphy"/> -->
    <!-- <img :src="gifSrc2" class="giphy"/> -->
    <div class="grid">
      <div class="cell small-3" v-for="(gif, index) in gifSrcArray" :key="index">
        <img :src="gif.images.original.url" class="giphy" />    
      </div>
    </div>

    

    <!-- <div class="input-group margin-top-2">
      <input class="input-group-field" v-model="search" type="text" @keyup.enter="getGif"/>
      <div class="input-group-button">
        <button class="button" @click.native="getGif()" :disabled="search == ''">Submit</button>
      </div>
    </div> -->
  </div>
</template>
<script>
import axios from 'axios';
const PUBLIC_KEY = '6DLBshEu1KKUblgHTstm16qPxWoKD6ru';
const BASE_URL = '//api.giphy.com/v1/gifs/search?';
const LIMIT = 8;
const RATING = 'pg';

export default {
  name: 'test',
  data() {
    return {
      gif: [],
      gifSrc: '',
      gifSrcArray: [],
      search: '',
      loveGifs: [],
    }
  },
  beforeCreate() {
    axios.get(BASE_URL+'q='+ 'love' + '&limit='+ LIMIT + '&rating=' + RATING + '&api_key=' + PUBLIC_KEY)
      .then((res) => {
        console.log(res.data.data[0].images.original.url)
        this.gif = res.data;
        this.gifSrc = res.data.data[0].images.original.url
        this.gifSrcArray = res.data.data;
      })
      .catch(function (error) {
        console.log(error);
      });      
  },
  methods: {
    getGif() {
    axios.get(BASE_URL+'q='+ this.search + '&limit='+ LIMIT + '&rating=' + RATING + '&api_key=' + PUBLIC_KEY)
      .then((res) => {
        console.log(res.data.data[0].images.original.url)
        this.gif = res.data;
        this.gifSrc = res.data.data[0].images.original.url
        this.gifSrcArray = res.data.data;
      })
      .catch(function (error) {
        console.log(error);
      });
    }
  },
}

</script>
<style lang="scss" scoped>
@import '../../scss/style';

#test {
  margin: 2rem;
}

.giphy {
  max-width: 168px;
  max-height: 168px;
  align-self: center;
}

.input-group {
  width: 400px;
}


//Grid Styles

$sizes: small medium large;
$grid-gap: 1rem;
$grid-column-count: 12;

@each $size in $sizes {
  @for $i from 1 through $grid-column-count {
    @media screen and (min-width: 1024px) {
      .cell.large-#{$i} {
        grid-column: span $i;
        width: $i/12*100% - 5%;
      }
    }
    @media screen and (min-width: 768px) and (max-width: 1023px) {
      .cell.medium-#{$i} {
        grid-column: span $i;
        width: $i/12*100% - 5%;
      }
    }
    .small-#{$i} {
      grid-column: span $i;
      width: $i/12*100% - 5%;
    }
  }
}

.grid {
  display: grid;
  grid-auto-rows: 200px;
  grid-gap: $grid-gap;
  grid-template-columns: repeat( $grid-column-count, 1fr);
  margin-top: 1rem;
  text-align: center;
  vertical-align: middle;
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


