// main.js

import Vue from 'vue';
import FormComponent from './components/FormComponent.vue';
import MyTest1 from './components/mytest.vue';

new Vue({
    data: function () {
        return {
            message: 'Webpack and Vue setup'
        }
    },
    el: '#vue-app',
    template: '<MyTest1/>',
    components: { MyTest1 },
});
