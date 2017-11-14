<template>
    <div>Your calculated emi is : {{emiCalculated}}</div>
</template>

<script type="text/javascript">
import { EventBus } from "../../event-bus";

export default {
  name: "emi-result",
  data() {
    return {
      emiCalculated: 0
    };
  },
  methods: {
    updateEmi() {}
  },
  created() {
    // Listen for the i-got-clicked event and its payload.
    EventBus.$on("i-got-clicked", emi => {
      this.emiCalculated = emi;
    });
  }
};
</script>

// Use of Event bus
