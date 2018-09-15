// Notes: Created by Tyler, modified by JJ. 
// currentStep is maintained by the parent
<template>
	<div class="progress-dot-container">
		<button 
			class="button step-button mod-prev"
			v-if=showButtons
			:disabled="currentStep === 0" 
			@click="prevStep">
				<i class="fas fa-chevron-left"/>
			</button>
			<div class="progress-dot"
				v-for="(dot, dotIndex) in numberOfSteps"
				:class="{'is-active': dotIndex == currentStep, 'is-prev': dotIndex < currentStep, 'is-next': dotIndex > currentStep, }"
				:key="dotIndex" :style="{width: itemWidth + '%'}">
				<span class="dot-text">Step {{ dotIndex + 1 }}</span>
				<br>
				<i :class="dotIndex > currentStep - 1 ? 'far' : 'fas'" class="fa-circle"></i>
			</div>
			<button 
				class="button step-button mod-next"
				v-if=showButtons
				:disabled="currentStep === numberOfSteps"  
				@click="nextStep"><i class="fas fa-chevron-right"/>
			</button>
		</div>
</template>

<script>
	export default {
		name: 'DotProgressTracker',
		data() {
			return {};
		},
	    props: {
			numberOfSteps: {
				type: Number,
				default: 6
			},
			currentStep: {
				type: Number,
				default: 0
			},
			showButtons: {
				type: Boolean,
				default: true
			}
		},
		computed: {
			itemWidth () {
				return (1 / this.numberOfSteps) * 100;
			},
		},
		updated(){
		},
		methods:{
			nextStep: function() {
				// This would make this  work as a standalone component
				// this.currentStep != this.numberOfSteps ? this.currentStep++ : null

				// but let's let the parent keep track of the current step 
				this.$emit( 'next-step' )
			},
			prevStep: function() {
				// this.currentStep != 0 ? this.currentStep-- : null;
				this.$emit( 'prev-step' )
			},
		},
    }
</script>

<style lang="scss" scoped>
@import '../../../scss/style';

.progress-dot-container {
	margin-left: 10%;
	margin-top: 2rem;
	position: relative;
	width: 80%;
	@media screen and ( min-width: 768px ) {
		margin-left: 25%;
		margin-top: 4rem;
		width: 50%;
	}
	.progress-dot {
		color: #000;
		display: inline-block;
		text-align: center;
		&.is-next {
			color: #666;
		}
		&.is-active .dot-text {		
			font-weight: bold;
		}
	}
}

.step-button {
	position: absolute;
	top: calc( 50% - 1.25rem );
	&.mod-prev {
		left: -2.5rem;
	}
	&.mod-next {
		right: -2.5rem;
	}
}
</style>