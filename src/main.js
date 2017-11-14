// main.js

import Vue from 'vue';
import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';

// loads the Icon plugin
UIkit.use(Icons);

import App from './app.vue';
import UppercaseFilter from './filters/uppercase.filter';

Vue.use(UppercaseFilter);

new Vue({
    data: function () {
        return {
            message: 'Webpack and Vue setup'
        }
    },
    el: 'vue-app',
    template: '<App/>',
    components: {
        App
    },
});
