// main.js

import Vue from 'vue';
import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';

import FormComponent from './components/FormComponent.vue';
import HomeLoanCalculator from './components/home-loan-calculator/index.vue';

// loads the Icon plugin
UIkit.use(Icons);

new Vue({
    data: function () {
        return {
            message: 'Webpack and Vue setup'
        }
    },
    el: 'vue-app',
    template: '<HomeLoanCalculator/>',
    components: { HomeLoanCalculator },
});
