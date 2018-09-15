<template>
    <div class="PaginatedGridSelector">
        <div class="hide-for-small-only">
            <DotProgressTracker 
                :numberOfSteps=numberOfSteps 
                :currentStep="currentStep"
                :showButtons=false
                v-on:next-step="nextStep"
                v-on:prev-step="prevStep">
            </DotProgressTracker>
        </div>
        <div class="header-container">
            <div class="btn-wrapper">
                <button class="button rounded" v-if="currentStep > 0" @click="prevStep">
                    <i class="fas fa-arrow-left"></i>
                </button>
            </div>
            <h3 class="item-center" v-html="pages[currentStep].header"></h3>
            <div class="btn-wrapper text-right">
                <button class="button rounded" v-if="nextStepAvailable" @click="nextStep">
                    <i class="fas fa-arrow-right"></i>
                </button>
            </div>
        </div>
        <transition-group :name="carouselDirection">
            <div 
                class="step-grid" 
                v-for="(page, pageIndex) in pages" 
                v-if="pageIndex == currentStep" 
                :class="{ 'mod-final': currentStep === numberOfSteps }"
                :key="pageIndex">
                {{ page }}
                {{ loveGifs }}
                <div v-for="(gif, index) in page.gifs" :key="index">
                   <!-- <img :src="gif.images.original.url" alt="" />     -->

                </div>
                <!-- ICON PICKER IMPLEMENTATION -->
                <!-- <div class="step-item"
                    v-if="currentStep !== numberOfSteps"
                    v-for="(icon, iconIndex) in page.icons"
                    :key="iconIndex"
                    :class="{'active': choices[pageIndex] == icon}">
                    <i
                        @click="chooseGridItem(currentStep, icon)"
                        class="fas fa-fw"
                        :class="'fa-' + icon.name">
                    </i>
                </div> -->
                <div class="step-item mod-final"
                    v-if="currentStep === numberOfSteps"
                    v-for="(choice, choiceIndex) in choices"
                    :key="choiceIndex">
                    <i 
                        class="fas fa-fw"
                        v-if="choice.name"
                        :class="'fa-' + choice.name">
                    </i>
                </div>
            </div>
        </transition-group>
        <div class="reset-wrapper" v-if="currentStep === numberOfSteps">
            <button class="button" @click="reset">Reset</button>
        </div>
    </div>
</template>

<script>
    import DotProgressTracker from '../DotProgressTracker/DotProgressTracker';

    export default {
        name: 'PaginatedGridSelector',
        components: {
            DotProgressTracker,
        },
        props: {
            pages: {
                Array,
                required: true
            },
            choices: {
                Array,
                default: []
            },
            platform: {
                type: String,
                default: "Desktop"
            },
            exitRouteName: {
                type: String,
                required: true
            },
            loveGifs: {
                type: Object
            },
        },
        data() {
            return {
                currentStep: 0,
                numberOfSteps: 4,
                carouselDirection: 'forward',
            };
        },
        computed: {
            nextStepAvailable() {
                return (this.currentStep < this.pages.length - 1) && this.choices[this.currentStep];
            },
            isMobile () {
                return this.platform != 'Desktop';
            },
        },
        watch: {
            currentStep: function (newcurrentStep, oldcurrentStep) {
                this.$emit('page-changed', newcurrentStep);
            }
        },
        methods: {
            chooseGridItem: function (pageIndex, gif) {
                console.log('pageIndex :', pageIndex);
                console.log('gif :', gif);
                this.$emit('gif-chosen', {pageNumber: pageIndex, gif: gif});
            },
            nextStep: function () {
                if ( this.nextStepAvailable ) {
                    this.carouselDirection = 'forward';
                    this.currentStep < this.numberOfSteps ? this.currentStep++ : null;
                }
            },
            prevStep: function () {
                this.carouselDirection = 'backward';
                this.currentStep === 0 ? null : this.currentStep--;
                console.log('this.currentStep :', this.currentStep);
            },
            reset: function() {
                this.currentStep = 0;
                this.$emit( 'reset' );
            }
        },
        mounted(){
            this.$emit('page-changed', this.currentStep);
            console.log('this.loveGifs :', this.loveGifs);
        },
    }
</script>

<style lang="scss">
// @import '_foundation.scss';
@import '../../../scss/style';


$transition-details: .5s;
$outline-color-hover: $brand-font-color;
$outline-color-active: $brand-color;
$outline-border-width: 2px;

// Transitions

.forward-enter-active, .forward-leave-active {
    transition: transform $transition-details;
}
.forward-enter {
    transform: translateX(100%);
}
.forward-leave-to {
    transform: translateX(-100%);
}

.backward-enter-active, .backward-leave-active {
    transition: transform $transition-details;
}
.backward-enter {
    transform: translateX(-100%);
}
.backward-leave-to {
    transform: translateX(100%);
}

// Grid Styles
.header-container {
    margin: 3rem 2rem 2rem;

    display: flex;
    justify-content: space-between;
    .item-center {
        flex-grow: 2;
        text-align: center;
    }
}

.btn-wrapper {
    height: 3rem;
    width: 3rem;
}

.step-grid {
    margin: 0 auto;
    position: absolute;
    margin: 0 2rem;
    width: calc(100% - 4rem);
    display: grid;
    grid-template-columns: repeat( 3, 1fr );
    &.mod-final {
        grid-template-columns: repeat( 4, 1fr );
    }
    @media screen and ( min-width: 1024px ) {
        grid-template-columns: repeat( 5, 1fr );
    }
    @supports not (display: grid) {
        display: flex;
        flex-flow: row wrap;
    }
}

    .step-item {
        border: $outline-border-width transparent solid;
        padding: 0.5rem;
        cursor: pointer;
        text-align: center;
        
        @supports not (display: grid) {
            flex: 0 0 auto;
            width: 33.3333%;
            @media screen and ( min-width: 1024px ) {
                width: 20%;
            }
            &.mod-final {
                width: 25%;
            }
        }
        &.active {
            border-color: $outline-color-active;
        }
        &:hover:not(.active) {
            border-color: $outline-color-hover;
        }
        
    }

    .step-item .fas {
            font-size: 3em;
            @media screen and ( min-width: 768px ) {
                font-size: 4em;
            }
            @media screen and ( min-width: 1024px ) {
                font-size: 6em;
            }
        }

.reset-wrapper {
    position: absolute;
    bottom: 4rem;
    left: calc( 50% - 2.5rem);
    .button {
        width: 5rem;
    }
}

</style>