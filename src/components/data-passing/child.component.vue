<!-- Passing data between parent = child components using event emitter -->
<template>
	<div>
		<p>Data from parent component : <strong>{{dataFromParent}}</strong></p>
		<button class="uk-button uk-button-primary" v-on:click="incrementCounter">Increment {{ counter }}</button>

		<button class="uk-button uk-button-primary" v-on:click="decrementCounter" :disabled="disableDecrementButton">Decrement {{ counter }}</button>
	</div>
</template>

<script type="text/javascript">
export default {
	props: [
		'dataFromParent'
	],
	data() {
		return {
			counter: 0,
			disableDecrementButton: false
		};
	},
	methods: {
		incrementCounter() {
			this.counter += 1;
			this.$emit("increment");
			this.disableDecrementButton = false;
		},
		decrementCounter() {
			this.counter -= 1;
			if (this.counter === 0) {
				this.disableDecrementButton = true;
			}
		}
	},
	created : function() {
		this.disableDecrementButton = true;
	}
};
</script>
