<template>
  <div id="app">
    <h1 class="ui dividing centered header">Vue.js Todo App</h1>
    <div class='ui three column centered grid'>
      <div class='column'>
        <todo-list v-bind:todos="todos"></todo-list>
        <create-todo v-on:create-todo="createTodo"></create-todo>
      </div>
    </div>
  </div>
</template>

<script>
//import sweetalert from 'sweetalert';
import TodoList from "./TodoList";
import CreateTodo from "./CreateTodo";
export default {
  name: "app",
  components: {
    TodoList,
    CreateTodo
  },
  data() {
    return {
      todos: [
        {
          title: "Todo A",
          project: "Project A",
          done: false
        },
        {
          title: "Todo B",
          project: "Project B",
          done: true
        },
        {
          title: "Todo C",
          project: "Project C",
          done: false
        },
        {
          title: "Todo D",
          project: "Project D",
          done: false
        }
      ]
    };
  },
  methods: {
    createTodo(newTodo) {
      this.todos.push(newTodo);
      this.getData();
      //sweetalert('Success!', 'To-Do created!', 'success');
    },
    getData() {
      // url (required), options (optional)
      fetch("https://api.coinmarketcap.com//v1/ticker/?limit=10", {
        method: "get"
      })
        .then(function(response) {
          return response.json();
          console.log("Response :", response.json());
        })
        .then(function(j) {
          // Yay, `j` is a JavaScript object
          console.log(j);
        })
        .catch(function(err) {
          // Error :(
        });
    }
  }
};
</script>
