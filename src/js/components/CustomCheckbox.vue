<template>
  <div id="custom-checkbox">
    <h2>Custom Checkbox</h2>
     <div class="checkbox-wrapper">
      <input type="checkbox" v-model="policyAccepted" id="policyAccepted" />
      <label for="policyAccepted" class="form-item form-label mod-checkbox">
        This checkbox is accessible, tabable, and can be styled any which way.
     </label>
    </div>
  </div>  
</template>
<script>
export default {
  name: 'custom-checkbox',
  data() {
    return {
      policyAccepted: false
    }
  }
}
</script>
<style lang="scss" scoped>
@import '../../scss/style';

#custom-checkbox {
  margin: 2rem 15%;
}

// Replicates Foundation's Flexbox Grid Using CSS Grid,
// but does not include the full functionality of CSS Grid.
$sizes: small medium large;
$grid-gap: 1rem;
$grid-column-count: 12;

.checkbox-wrapper {
    margin-top: 16px;
    height: 64px;
    position: relative;
  }

  .brand-logo {
    margin-right: -6px;
  }

@media only screen {
	.checkbox  {
		position: relative;
		margin-bottom: 8px;
    line-height: 56px;
	}

  input[type="checkbox"] {
		position: absolute;
		overflow: hidden;
		margin: 0;
		padding: 0;
		border: 0;
		outline: 0;
		filter: alpha( opacity=0 );
		opacity: 0;
  }

	.form-label.mod-checkbox {
    margin-left: 32px;
    font-size: 10px;
    display: inline-block;
    line-height: 20px;
    margin: 0 0 0 32px;;
    position: absolute;
    left: 48px;
    width: calc( 100% - 64px);
    text-align: justify;
    @media ( min-width: 361px ) {
      font-size: 11px;
    }
    @media ( min-width: 1024px ) {
      font-size: 14px;
      width: 100%;
      left: 16px;
    }
    @media ( min-width: 768px ) {
      margin: 0 0 0 -16px;
    }
	}

	input[type="checkbox"] + label:before {
		position: absolute;
		left: -80px;
		top: 0;
		display: inline-block;
		width: 40px;
		height: 40px;
		line-height: 56px;
		padding: 0;
		background: black;
		content: " ";
		margin-top: 1px;
		cursor: pointer;
		text-align: center;
		vertical-align: top;
		border: 1px solid $brand-color;
    color: $brand-color;
     @media ( min-width: 1024px ) {
      // padding: 0 12px 24px;
      width: 56px;
      height: 56px;
    }
	}


	input[type="checkbox"]:checked + label:before {
    // content: "\00d7"
    background: url( 'https://picsum.photos/56' ) black center center / 36px 36px no-repeat;
    font-size: 36px;
    @media (min-width: 1024px ) {
      background-size: 56px;
    }
	}

	input:disabled + label:before {
		border-color: #bbb;
		color: #bbb;
	}

	input[type="checkbox"]:focus + label:before {
    box-shadow: 0 0 5px #3b99fc;
		border-color: #3b99fc;
	}
}

</style>


