export const VUEX_TODO_STORE = {
    state: {
        id: 5,
        todos: [
            { id: 1, task: 'First task', completed: true },
            { id: 2, task: 'Second task', completed: true },
            { id: 3, task: 'Third task', completed: false }
        ]
    },
    getters: {
        todos: (state) => state.todos
    },
    mutations: {
        storeAddTodo(state, payload) {

            // Create task object
            const task = {
                id : state.id,
                task: payload,
                completed: false
            }

            // Add task object to existing state.todos array
            state.todos.unshift(task);
        },
        storeUpdateTodoCount(state) {
            return state.todos.length;
        }
    }
};
