<template>
<div>
<p>Amount</p>
<input type="text" placeholder="Loan Amount" v-model="principalAmt" />

<p>Duration (years)</p>
<input type="text" placeholder="Duration in years" v-model="duration" />

<p>Rate of Interest (%)</p>
<input type="text" placeholder="Rate of interest" v-model="roi" />

<p>EMI Calculated</p>
<input type="text" v-model="emi" />

<button @click="calculateHomeLoanEMI">Calculate</button>

<div>
	<p>E = P * r *(1 + r)n/((1 + r)n - 1)</p>
	<p>E is EMI</p>

<p>P is Principal Loan Amount</p>

<p>r is rate of interest calculated on monthly basis. (i.e., r = Rate of Annual interest/12/100. If rate of interest is 10.5% per annum, then r = 10.5/12/100=0.00875)</p>

<p>n is loan term / tenure / duration in number of months</p>

<p>For example, if you borrow ₹10,00,000 from the bank at 10.5% annual interest for a period of 10 years (i.e., 120 months), then EMI = ₹10,00,000 * 0.00875 * (1 + 0.00875)120 / ((1 + 0.00875)120 – 1) = ₹13,493. i.e., you will have to pay ₹13,493 for 120 months to repay the entire loan amount. The total amount payable will be ₹13,493 * 120 = ₹16,19,220 that includes ₹6,19,220 as interest toward the loan.</p>

<p>// payment = principle * monthly interest/(1 - (1/(1+MonthlyInterest)*Months)) </p>
	</div>

</div>

</template>

<script type="text/javascript">
export default {
  data() {
    return {
      principalAmt: 1000000,
      duration: 10,
      roi: 10,
      emi: 0
    };
  },
  methods: {
    calculateHomeLoanEMI() {
      let amt = 0;
      let interestPerMonth = this.roi / 12 / 100;
      let durationInMonth = this.duration * 12;
      amt =
        this.principalAmt *
        interestPerMonth *
        Math.pow(1 + interestPerMonth, durationInMonth) /
        (Math.pow(1 + interestPerMonth, durationInMonth) - 1);
      // 100000*0.00833* Math.pow((1 + 0.00833), 12) /(Math.pow((1 + 0.00833), 12) - 1)
      this.emi = amt;
      console.log(amt, interestPerMonth);
    }
  }
};
</script>
