<!-- Passing data between parent = child components using event emitter -->
<template>
    <div class="uk-card uk-card-default uk-card-body" id="counter-event-example">
        <h2>Example 2 : Passing data between components from Child to Parent using Event emitter</h2>
        <p>Parent count total : <strong>{{ total }}</strong></p>
        <child-component1 v-on:increment="incrementTotal" data-from-parent="Hi, from parent component"></child-component1>
    </div>
</template>

<script type="text/javascript">
import  ChildComponent1  from "./child.component.vue"; // Child component

export default {
  components: {
    ChildComponent1
  },
  data() {
    return {
      total: 0,
      disableDecrementButton: true
    };
  },
  methods: {
    incrementTotal() {
        this.total += 1;
    }
  }
};
</script>
