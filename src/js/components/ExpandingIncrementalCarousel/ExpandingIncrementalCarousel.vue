<template>
<div>
    <div class="ExpandingIncrementalCarousel">
    	<div class="carousel-item" 
            v-for="(item, itemIndex) in items" 
            :class="{'active': expandedItemIndex == itemIndex}" 
            :style="{width: openItemWidth + '%', left: getItemOffset(itemIndex) + '%'}" 
            :key="item.index">

    		<div class="carousel-item-image" @click="itemClick(itemIndex)" :style="{width: percentImageWidth, 'background-image': 'url(' + item.image + ')'}"></div>
    		<div class="carousel-item-details" :style="{width: percentDetailsWidth}" @click="itemClick(-1)">
	    		<p class="carousel-item-header" v-html="item.headerText"></p>
	    		<p class="carousel-item-text" v-html="item.bodyText"></p>
				<button class="carousel-item-exit close-button" @click="itemClick(-1)" aria-label="Close alert" type="button">
					<span aria-hidden="true"><i class="fas fa-times"></i></span>
        		</button>
    		</div>
    	</div>
    </div>
	<div class="button next small" v-if="leftmostItemIndex < items.length - 1 - expandedWidth" @click="$emit('step-forward')">Next</div>
	<div class="button previous small" v-if="leftmostItemIndex > 0" @click="$emit('step-backward')">Back</div>
</div>
</template>

<script>
    export default {
        name: 'ExpandingIncrementalCarousel',
        props: ['expandedItemIndex', 'leftmostItemIndex', 'items', 'numberVisible', 'expandedWidth'],
        computed: {
        	closedItemWidth () {
        		return (1 / this.numberVisible) * 100;
        	},
            openItemWidth () {
                return (1 / this.numberVisible) * 100 * this.expandedWidth;
            },
            percentImageWidth () {
            	return ((1 / this.expandedWidth) * 100) + '%';
            },
            percentDetailsWidth () {
            	return ((1 - (1 / this.expandedWidth)) * 100) + '%';
            },
        },
        methods: {
            getItemOffset (itemIndex) {
            	let offset = itemIndex - this.leftmostItemIndex;
            	if(this.expandedItemIndex >= 0 && this.expandedItemIndex < itemIndex) {
            		offset += this.expandedWidth - 1;
            	}

                return offset * this.closedItemWidth;
            },
            itemClick (itemIndex) {
            	if(itemIndex > 0 && itemIndex + this.expandedWidth > this.leftmostItemIndex + this.numberVisible) {
            		this.$emit('update-leftmost-item', itemIndex);
            	}
				this.$emit('update-expanded-item', itemIndex);

            },
        },
    }
</script>

<style lang="scss" scoped>
@import '../../../scss/style.scss';

    $transition-opening: 3s;
    $transition-ready: .5s;

    .carousel-item {
        transition: left $transition-ready, background-image $transition-ready;
    }
    
    .carousel-item-image {
        transition: height $transition-ready, width $transition-ready;
    }

	.ExpandingIncrementalCarousel {
		position: absolute;
        width: 100%;
        height: 100%;
		overflow: hidden;
		margin-top: 3rem;

		.carousel-item {
			position: absolute;
			height: 100%;

			.carousel-item-image {
				position: absolute;
				left: 0;
				bottom: 3%;
				height: 77%;
				background-position: center bottom;
				background-size: contain;
				background-repeat: no-repeat;
			}
			&.active .carousel-item-image {
				height: 94%;
			}
			&:not(.active) .carousel-item-image {
				cursor: pointer;
			}

			.carousel-item-header {
				font-weight: bold;
				font-size: 0.875em;
			}

			.carousel-item-text {
				font-size: 0.75em;
			}


			.carousel-item-details {
				position: absolute;
				right: 0;
				display: none;
				padding: 2.5rem 1rem 1rem;
			}
			&.active .carousel-item-details {
				display: block;
			}

			.carousel-item-exit {
				position: absolute;
				right: 5%;
				top: 2%;
				cursor: pointer;
			}
		}
	}


    .previous {
		@include m-absolute-positioner( 0, null, null, 5% );
		@media screen and ( min-width: 768px ) {
			@include m-absolute-positioner( 0, null, null, 0 );
		}
	}
	
    .next {
		@include m-absolute-positioner( 0, null, null, 85% );
		@media screen and ( min-width: 768px ) {
			@include m-absolute-positioner( 0, null, null, 100% );
		}
    }
</style>