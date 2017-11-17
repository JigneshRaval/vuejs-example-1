<!--
State Management in Vue: Getting Started with Vuex
https://scotch.io/tutorials/state-management-in-vue-getting-started-with-vue
-->

<template>
    <div>
        <p>Total Tasks added : {{this.$store.state.VUEX_TODO_STORE.todos.length}}</p>
        <form @submit.prevent="addTodo">
            <input type="text" placeholder="Please enter task name" v-model="newtask" />
        </form>
        <todo-list v-bind:todos="todos"></todo-list>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
import TodoList from "./todo-list.component.vue";

export default {
  data() {
    return {
      newtask: ""
    };
  },
  // https://medium.com/codingthesmartway-com-blog/vue-js-2-state-management-with-vuex-introduction-db26cb495113
  computed: mapGetters(["todos"]),
  components: {
    TodoList
  },

  methods: {
    addTodo() {
      // Commit to mutation
      this.$store.commit("storeAddTodo", this.newtask);

      // Empty text input
      this.newtask = "";

      console.log("TEst :", this.$store.state.VUEX_TODO_STORE.todos.length);
    }
  }
};
</script>
