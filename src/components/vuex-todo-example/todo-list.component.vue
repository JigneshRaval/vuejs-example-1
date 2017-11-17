<template>
    <div>
        <ul>
            <li v-for="todo in todos" v-bind:key="todo.id" v-bind:class="{completed: todo.completed}">{{todo.task}}</li>
        </ul>
    </div>
</template>

<script>
export default {
    props: ['todos'],
    computed: {

    },
    data() {
        return {

        }
    },
    methods : {

    }
}
</script>
