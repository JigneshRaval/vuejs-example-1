// main.js
// =====================

import Vue from 'vue';
import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';

// loads UIkit Icon plugin
UIkit.use(Icons);

// Main App
import App from './app.vue';

// Filters : Example 1
import * as filters from './filters/index.filters';

Vue.use(filters.uppercase);
Vue.use(filters.lowercase);

// Filters : Example 2
import './filters/filters';

// Bind Vue app with HTML
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
