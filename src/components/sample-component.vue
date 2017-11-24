// Example of Single file Vue component
// Vue.js Component Style Guide
// https://github.com/pablohpsilva/vuejs-component-style-guide

<template>
    <div class="range-wrapper">

    </div>
</template>

<script type="text/javascript">
export default {
  // Do not forget this little guy
  name: "RangeSlider",
  // share common functionality with component mixins
  mixins: [],
  extends: {
    // compose new components
  },
  // component properties/variables
  props: {
    bar: {}, // Alphabetized
    foo: {},
    foobar: {}
  },
  // variables
  data() {
    return {};
  },
  computed: {
    // computed propertise
  },
  components: {
    // when component uses other components
  },
  watch: {
    // methods
  },
  methods: {
    myFunc() {
      return "Hi";
    }
  },
  // component Lifecycle hooks
  beforeCreate() {},
  mounted() {}
};
</script>
