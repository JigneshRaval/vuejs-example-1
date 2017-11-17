export const VUEX_TODO_STORE = {
    state: {
        todos: [
            { id: 1, task: 'First task', completed: true },
            { id: 2, task: 'Second task', completed: true },
            { id: 3, task: 'Third task', completed: false }
        ]
    },
    getters: {
        todos: (state) => state.todos
    }
};
