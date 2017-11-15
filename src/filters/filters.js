// Example of defining filters in single file for global use
// Import this file in main.js like "import './filters/filters';"
// Use it like "first4Chars : {{ firstName | first4Chars }}"
// Source : https://codesandbox.io/s/mqwv333zr8, https://stackoverflow.com/questions/47004702/how-to-add-a-bunch-of-global-filters-in-vue-js

import Vue from 'vue';

Vue.filter("first4Chars", str => str.substring(0, 4));

Vue.filter("last4Chars", str => str.substring(str.length - 4));
