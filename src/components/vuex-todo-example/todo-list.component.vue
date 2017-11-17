<template>
<div>
      <ul>
        <li v-for="todo in todos" v-bind="todo.id" v-bind:class="{completed: todo.completed}">{{todo.task}}</li>
      </ul>
    </div>
</template>

<script>
export default {
    prop: ['todos'],
    data() {
        return {

        }
    },
    methods : {

    }
}
</script>
