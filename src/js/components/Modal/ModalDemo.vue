<template>
  <div>
    <div class="text-center">
      <h2 class="text-center">Modal</h2>
      <button class="button margin-top-3" @click="showModal = true">Show Modal</button>
    </div>
    <Modal v-if="showModal" @close-modal="showModal = false" size="small">
      <h3 slot="header">Ooh! A header.</h3>
      <div slot="body">
        <p>Hi. I am a reusable modal component that can be tossed into any project as long as my parent gets some logic too.</p>
        <p>I close when you click outside of me or hit the escape key. I replicate Foundation's reveal and come in five sizes: tiny, small, medium (the default), large and full. </p>
        <p>I have three slots — header, footer and body — and I use Vue's default modal transition.</p> 
      </div>
      <div slot="footer" class="text-right">
        <button class="button" @click="showModal = false">Wow</button>
      </div>
    </Modal>
  </div>  
</template>

<script>
import Modal from './Modal';

export default {
  name: 'modal-demo',
  components: {
    Modal
  },
  data() {
    return {
      showModal: false
    };
  },
  // Close when escape key is set
  mounted: function () {
    document.addEventListener("keydown", (e) => {
      if (this.showModal && e.keyCode == 27) {
        this.showModal = false;
      }
    });
  },
};
</script>

<style lang="scss" scoped>
@import '../../../scss/style';

</style>
