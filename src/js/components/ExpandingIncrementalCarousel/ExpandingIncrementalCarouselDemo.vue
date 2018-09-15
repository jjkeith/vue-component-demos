<template>
    <div id="ExpandingIncrementalCarouselDemo">
        <h2 class="text-center">Expanding Incremental Carousel</h2>
        <div id="DemoContainer">
            <ExpandingIncrementalCarousel 
                :expandedItemIndex="demoExpandedItemIndex" 
                :leftmostItemIndex="demoLeftmostItemIndex" 
                :items="demoItems" 
                :numberVisible="demoNumberVisible" 
                :expandedWidth="demoExpandedWidth" 
                @step-forward="stepForward"
                @step-backward="stepBackward"
                @update-expanded-item="setExpandedItem" 
                @update-leftmost-item="setLeftmostItem">
            </ExpandingIncrementalCarousel>
        </div>
    </div>
</template>

<script>
    import ExpandingIncrementalCarousel from './ExpandingIncrementalCarousel';

    export default {
        name: 'ExpandingIncrementalCarouselDemo',
        components: {
            ExpandingIncrementalCarousel
        },
        data() {
            return {
                demoExpandedItemIndex: -1,
                demoLeftmostItemIndex: 0,
                demoItems: [
                    {
                        name: "Lorem ipsum",
                        image: "https://picsum.photos/200/300?image=0",
                        headerText: "dolor sit amet, consectetur adipiscing elit",
                        bodyText: "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                    },
                    {
                        name: "Lorem ipsum",
                        image: "https://picsum.photos/200/300?image=11",
                        headerText: "dolor sit amet, consectetur adipiscing elit",
                        bodyText: "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                    },
                    {
                        name: "Lorem ipsum",
                        image: "https://picsum.photos/200/300?image=12",
                        headerText: "dolor sit amet, consectetur adipiscing elit",
                        bodyText: "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                    },
                    {
                        name: "Lorem ipsum",
                        image: "https://picsum.photos/200/300?image=13",
headerText: "dolor sit amet, consectetur adipiscing elit",
                        bodyText: "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."                    },
                    {
                        name: "Lorem ipsum",
                        image: "https://picsum.photos/200/300?image=14",
headerText: "dolor sit amet, consectetur adipiscing elit",
                        bodyText: "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."                    },
                    {
                        name: "Lorem ipsum",
                        image: "https://picsum.photos/200/300?image=15",
                        headerText: "dolor sit amet, consectetur adipiscing elit",
                        bodyText: "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                    },
                    {
                        name: "Lorem ipsum",
                        image: "https://picsum.photos/200/300?image=16",                        
                        headerText: "dolor sit amet, consectetur adipiscing elit",
                        bodyText: "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                    },
                    {
                        name: "Lorem ipsum",
                        image: "https://picsum.photos/200/300?image=17",                        
                        headerText: "dolor sit amet, consectetur adipiscing elit",
                        bodyText: "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                    },
                    {
                        name: "Lorem ipsum",
                        image: "https://picsum.photos/200/300?image=18",                        
                        headerText: "dolor sit amet, consectetur adipiscing elit",
                        bodyText: "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                    },
                    {
                        name: "Lorem ipsum",
                        image: "https://picsum.photos/200/300?image=19",           
headerText: "dolor sit amet, consectetur adipiscing elit",
                        bodyText: "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."                    },
                    {
                        name: "Lorem ipsum",
                        image: "https://picsum.photos/200/300?image=20",                        
                        headerText: "dolor sit amet, consectetur adipiscing elit",
                        bodyText: "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                    },
                ],
                demoNumberVisible: window.matchMedia("(min-width: 768px)").matches ? 5 : 3,
                demoExpandedWidth: 3,
            };
        },
        methods:{
            setExpandedItem (payload) {
                this.demoExpandedItemIndex = payload;
                console.log("ExpandingIncrementalCarouselDemo setExpandedItem payload:", payload);
            },
            setLeftmostItem (payload) {
                this.demoLeftmostItemIndex = payload;
                console.log("ExpandingIncrementalCarouselDemo setLeftmostItem payload:", payload);
            }, 
            stepForward () {
                this.demoLeftmostItemIndex++;
                this.demoExpandedItemIndex = -1;
            },
            stepBackward () {
                this.demoLeftmostItemIndex--;
                this.demoExpandedItemIndex = -1;
            },
        },
    }
</script>

<style lang="scss" scoped>
@import '../../../scss/style.scss';

    #DemoContainer {
        @include m-absolute-positioner( 20%, null, null, 5% );
        width: 90%;
        height: 60%;
        @media screen and ( min-width: 768px )  {
            @include m-absolute-positioner( 20%, null, null, 20% );
            width: 60%;
        }
    }

</style>