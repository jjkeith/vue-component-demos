<template>
    <div class="DotProgressTracker">
		  <h2 class="text-center">Dot Progress Tracker</h2>
    	<DotProgressTracker 
        :numberOfSteps=numberOfSteps 
        :currentStep=currentStep 
        v-on:next-step="nextStep"
        v-on:prev-step="prevStep">
      </DotProgressTracker>
      <p class="text-center margin-top-3" v-if="currentStep === numberOfSteps">
        <strong>You're all done!&ensp;<i class="fas fa-birthday-cake"></i></strong>
      </p>
    </div>
</template>

<script>
import DotProgressTracker from './DotProgressTracker';

  export default {
    name: 'DotProgressTrackerDemo',
    components: {
      DotProgressTracker
    },
    data() {
      return {
        numberOfSteps: 5,
        currentStep: 0,
        steppingComplete: false
      };
    },
    methods: {
      nextStep: function() {
        if ( this.currentStep < this.numberOfSteps ) {
          this.currentStep++
        }
      },
      prevStep: function() {
        if ( this.currentStep === 0 ) {
          this.currentStep++
        }
      },
    }
  }
</script>

<style lang="scss" scoped>
@import '../../../scss/style';

</style>