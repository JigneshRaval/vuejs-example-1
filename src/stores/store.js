// store.js
// A simple store created to increment count
import Vue from 'vue';
import Vuex from 'vuex';
import { VUEX_TODO_STORE } from '../components/vuex-todo-example/todo.store';

Vue.use(Vuex);

// you can also use : export default new Vuex.Store({ })
export const store = new Vuex.Store({
    state: {
        count: 0
    },
    getters: {
      count: (state) => state.count++
    },
    modules: {
        VUEX_TODO_STORE
    },
    mutations: {
        increment(state) {
            state.count++;
        },
        decrement(state) {
            state.count--;
        }
    }
});
