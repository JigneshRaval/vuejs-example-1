<template>
    <div>
        <h3>Vuex Store Example</h3>
        <p>Update counter value from central storage of data using Vuex : <strong>{{counter}}</strong></p>
        <p><button v-on:click="incrementStoreCount">+</button> <button v-on:click="decrementStoreCount">-</button></p>
    </div>
</template>

<script type="text/javascript">
export default {
    name: 'vuex-store-counter',
    data() {
        return {

        }
    },
    computed: {
        counter: function() {
            return this.$store.state.count;
        }
    },
    methods: {
        incrementStoreCount() {
            this.$store.commit('increment');
        },
        decrementStoreCount() {
            this.$store.commit('decrement');
        }
    }
}
</script>
