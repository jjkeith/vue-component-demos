<template>
  <div class="margin-all-2">
    <h2 class="text-center">Implementation of <a href="https://www.npmjs.com/package/vue-tour" target="_blank">Vue Tour</a></h2>
    <div class="v-tour-step" id="v-step-0">Such Vue</div>
    <div class="v-tour-step" id="v-step-1">Very tour </div>
    <div class="v-tour-step" id="v-step-2">Many steps</div>
    <div class="v-tour-step" id="v-step-3">Much cool</div>
    <div class="v-tour-step" id="v-step-4">Amaze</div>
    <button class="button" id="restart" @click="restartTour">Restart</button>
    <v-tour name="myTour" :steps="steps" :callbacks="myCallbacks">
      <template slot-scope="tour">
        <!-- Add to the template a cancel box that will be visible on every step -->
        <div class="tour-cancel-callout" v-if="tour.currentStep !== -1">
          <p class="tour-cancel-text">Want to cancel the tour?</p>
          <div class="text-right">
            <button @click="tour.stop" class="button alert">Yes</button>
          </div>
        </div>
        <transition name="fade">
          <v-step
            v-if="tour.currentStep === index"
            v-for="(step, index) of tour.steps"
            :key="index"
            :step="step"
            :previous-step="tour.previousStep"
            :next-step="tour.nextStep"
            :stop="tour.stop"
            :isFirst="tour.isFirst"
            :isLast="tour.isLast">
          <!-- Change the template for certain steps -->
            <template v-if="!tour.isLast">
              <div slot="actions">
                <button @click="tour.nextStep" class="button">Next</button>
              </div>
            </template>
            <template v-if="tour.isLast">
              <div slot="actions">
                <button @click="tour.stop" class="button success">Done</button>
              </div>
            </template>
          </v-step>
        </transition>
      </template>
    </v-tour>
  </div>
</template>

<script>
export default {
  name: 'my-tour',
  data() {
    return {
      steps: [
        {
          target: '#v-step-0',
          content: 'Tour time!',
          params: {
            placement: 'bottom'
          }
        },
        {
          target: '#v-step-1',
          content: 'Next step',
          params: {
            placement: 'bottom'
          }
        },
        {
          target: '#v-step-2',
          content: 'Another step',
          params: {
            placement: 'bottom'
          }
        },
        {
          target: '#v-step-3',
          content: 'Penultimate step!',
          params: {
            placement: 'bottom'
          }
        },
        {
          target: '#v-step-4',
          content: 'Finally, the last step',
          params: {
            placement: 'top'
          }
        },
      ],
      myCallbacks: {
        self: this,
        onNextStep: function( currentStep ) {
          var numberOfSteps = this.self.$tours['myTour'].steps.length;
          var currentStepId = "".concat('v-step-' + currentStep.toString());
          var nextStepId = 'v-step-'.concat(currentStep + 1).toString();
          
          document.getElementById(nextStepId).style.fontSize = '32px';
          document.getElementById(currentStepId).style.fontSize = '18px';
        },
        onStart: function( currentStep ) {
          document.getElementById('restart').classList.add('hide');
          document.getElementById('v-step-0').style.fontSize = '32px';
          this.self.$emit( 'tour-started' );
        },
        onStop: function() {
          document.getElementById('restart').classList.remove('hide');
          this.self.$emit( 'tour-ended' );
        }
      },
    };
  },
  beforeMount: function() {
    //  Below is the method of checking if the user had used the app before
    // let sessionCheck = sessionStorage.getItem('mixerTutorial');
    // if ( Object.keys(this.$store.state.userAlbum).length > 0 || sessionCheck != null) {
    //   this.returningUser = true;
    // }
  },
  mounted: function() {
    // Only start the tour if the user is a new
    // if (!this.returningUser) {
      this.$tours['myTour'].start();
      // sessionStorage.setItem('mixerTutorial', 'active');
    // }
  },
  methods: {
    restartTour: function() {
      this.$tours['myTour'].start();
    }
  },
};
</script>

<style lang="scss" scoped>
@import '../../scss/style';

.tour-cancel-callout {
  box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
  width: fit-content;
  padding: 1rem;
  z-index: 2;
}

.v-tour-step {
  font-size: 18px;
  font-weight: bold;
  height: 40px;
  width: 180px;
  z-index: 1;
}

#v-step-0 {
  @include m-absolute-positioner( 35%, 30%, null, null );
  transform: rotate( -10deg );
  color: purple;
}

#v-step-1 {
  @include m-absolute-positioner( 50%, 5%, null, null );
  transform: rotate( 20deg );
  color: coral;
}

#v-step-2 {
  @include m-absolute-positioner( null, null, 15%, 30% );
  transform: rotate( 15deg );
  color: goldenrod;
}

#v-step-2 {
  @include m-absolute-positioner( null, 5%, 10%, null );
  transform: rotate( 35deg );
  color: cornflowerblue;
}

#v-step-3 {
  @include m-absolute-positioner( 30%, 60%, null, null );
  transform: rotate( -45deg );
  color: olivedrab;
}

#v-step-4 {
  @include m-absolute-positioner( null, 25%, 10%, null );
  transform: rotate( 65deg );
  color: magenta;
}

.hide {
  visibility: hidden;
}






</style>
