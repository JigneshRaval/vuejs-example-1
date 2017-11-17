<!--
State Management in Vue: Getting Started with Vuex
https://scotch.io/tutorials/state-management-in-vue-getting-started-with-vue
-->

<template>
<div>
    <p>{{todos}}</p>
    <todo-list :todos="todos"></todo-list>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import TodoList from './todo-list.component.vue';

export default {
    components: {
        TodoList
    },
    computed: mapGetters(['todos']), // https://medium.com/codingthesmartway-com-blog/vue-js-2-state-management-with-vuex-introduction-db26cb495113
    created() {
        console.log(this.$store.state.todostoremodule);
    }
}
</script>
