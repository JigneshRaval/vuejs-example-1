<template>
    <div>
        {{firstName | UppercaseFilter}}
        <div class="uk-container uk-container-small uk-position-relative">
            <home-loan-calculator></home-loan-calculator>
        </div>

        <div class="uk-container uk-container-small uk-position-relative">
            <emi-result></emi-result>
        </div>

        <div class="uk-container uk-container-small uk-position-relative">
            <parent-compoent></parent-compoent>
        </div>

        <div class="uk-container uk-container-small uk-position-relative">
            <todo-app></todo-app>
        </div>
    </div>
</template>

<script type="text/javascript">
import HomeLoanCalculator from "./components/home-loan-calculator/index.vue";
import EmiResult from "./components/home-loan-calculator/emi.vue";


// Todo app example from Scotch.io
// ==========================================
import TodoApp from './components/Todo-scotch-io/index.vue';

// Data passing using Event.$emit
// ==========================================
import ParentCompoent from './components/data-passing/parent.component.vue';

export default {
  components: {
    HomeLoanCalculator,
    EmiResult,
    TodoApp,
    ParentCompoent
  },
  data() {
      return {
          firstName : "jignesh"
      }
  }
};
</script>
