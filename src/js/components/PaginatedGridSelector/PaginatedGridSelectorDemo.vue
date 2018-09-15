<template>
    <div id="PaginatedGridSelectorDemo">
        <h2 class="text-center margin-top-3">Paginated Grid Selector</h2>
        <div id="DemoContainer">
            <PaginatedGridSelector 
                :pages="demoSteps2" 
                :choices="demoChoices" 
                :platform="demoPlatform" 
                :exitRouteName="demoExitRouteName" 
                @page-changed="customEvent" 
                @reset="reset"
                :gifs="loveGifs"
                @gif-chosen="gifChosen">
            </PaginatedGridSelector>
        </div>
    </div>
</template>

<script>
import PaginatedGridSelector from './PaginatedGridSelector';
import axios from 'axios';
const PUBLIC_KEY = '6DLBshEu1KKUblgHTstm16qPxWoKD6ru';
const BASE_URL = '//api.giphy.com/v1/gifs/search?';
const LIMIT = 8;
const RATING = 'pg';

export default {
    name: 'PaginatedGridSelectorDemo',
    components: {
        PaginatedGridSelector
    },
    data() {
        return {
            loveGifs: [],
            demoSteps2: [
                { 
                    header: "Pick a love gif", 
                    gifs: this.loveGifs,
                    name: 'Barf'
                }
            ],

            demoSteps: [
                {
                    header: "Pick a currency",
                    icons: [
                        { name: "dollar-sign" }, 
                        { name: "euro-sign" }, 
                        { name: "lira-sign" }, 
                        { name: "pound-sign" }, 
                        { name: "ruble-sign" }, 
                        { name: "rupee-sign" }, 
                        { name: "shekel-sign" }, 
                        { name: "won-sign" }, 
                        { name: "yen-sign" }, 
                    ]
                }, {
                    header: "Pick a map symbol",
                    icons: [
                        { name: 'anchor' },
                        { name: 'bed' },
                        { name: 'bicycle' },
                        { name: 'car' },
                        { name: 'globe' },
                        { name: 'home' },
                        { name: 'hospital' },
                        { name: 'map' },
                        { name: 'plane' },
                        { name: 'shopping-cart' },
                        { name: 'truck' },
                    ]
                }, {
                    header: "Pick an animal",
                    icons: [
                        { name: 'crow' },
                        { name: 'dove' },
                        { name: 'feather' },
                        { name: 'fish' },
                        { name: 'frog' },
                        { name: 'kiwi-bird' },
                    ],
                }, {
                    header: "Pick an emoji",
                    icons: [
                        { name: 'angry' },
                        { name: 'dizzy' },
                        { name: 'flushed' },
                        { name: 'frown' },
                        { name: 'grin-beam' },
                        { name: 'kiss' },
                        { name: 'laugh' },
                        { name: 'meh' },
                        { name: 'sad-cry' },
                        { name: 'smile' },
                        { name: 'surprise' },
                        { name: 'tired' },

                    ]
                }, {
                    header: "You're all set"
                }
            ],
            demoChoices: [],
            demoPlatform: "Desktop",
            demoExitRouteName: "Home",
        };
    },
    beforeCreate() {
        console.log('here')
        axios.get(BASE_URL+'q='+ 'love' + '&limit='+ LIMIT + '&rating=' + RATING + '&api_key=' + PUBLIC_KEY)
            .then((res) => {
            console.log(res.data.data)
            // this.gif = res.data;
            // this.gifSrc = res.data.data[0].images.original.url
            this.loveGifs = res.data.data;
        })
        .catch(function (error) {
            console.log(error);
        });      
    },
    mounted() {
        console.log('this.demoSteps2 :', this.demoSteps2);
    },
    methods:{
        customEvent (payload) {
            // console.log("PaginatedGridSelectorDemo customEvent payload:", payload);
        },
        gifChosen (payload) {
            this.$set(this.demoChoices, payload.pageNumber, payload.gif);
            // console.log("PaginatedGridSelectorDemo gifChosen payload:", payload);
        },
        reset() {
            this.demoChoices = [];
        }
    },
}
</script>

<style lang="scss" scoped>

</style>