// main.js

import Vue from 'vue';
import FormComponent from './components/FormComponent.vue';
import HomeLoanCalculator from './components/home-loan-calculator/index.vue';

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
