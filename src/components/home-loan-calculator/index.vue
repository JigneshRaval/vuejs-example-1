<template>
	<div class="uk-container uk-container-small uk-position-relative">
		<legend class="uk-legend">Home Loan EMI calculator</legend>

		<div class="uk-margin">
			<label class="uk-form-label" for="form-amount-text">Amount</label>
			<div class="uk-form-controls">
				<input class="uk-input" id="form-amount-text" type="text" placeholder="Loan Amount" v-model="principalAmt" />
			</div>
		</div>
		<div class="uk-margin">
			<label class="uk-form-label" for="form-duration-text">Duration (years)</label>
			<div class="uk-form-controls">
				<input class="uk-input" id="form-duration-text" type="number" placeholder="Loan Amount" v-model="duration" />
			</div>
		</div>
		<div class="uk-margin">
			<label class="uk-form-label" for="form-roi-text">Rate of Interest (%)</label>
			<div class="uk-form-controls">
				<input class="uk-input" id="form-roi-text" type="number" placeholder="Loan Amount" v-model="roi" />
			</div>
		</div>
		<div class="uk-margin">
			<label class="uk-form-label" for="form-emi-text">EMI Calculated</label>
			<div class="uk-form-controls">
				<input class="uk-input" id="form-emi-text" type="number" placeholder="Loan Amount" v-model="emi" />
			</div>
		</div>
		<div class="uk-margin">
			<label class="uk-form-label" for="form-interestPaid-text">Total Interest</label>
			<div class="uk-form-controls">
				<input class="uk-input" id="form-interestPaid-text" type="number" placeholder="Loan Amount" v-model="interestPaid" />
			</div>
		</div>
		<div class="uk-margin">
			<button class="uk-button uk-button-primary" @click="emi = principalAmt * (roi / 12 / 100) * Math.pow(1 + (roi / 12 / 100), (duration * 12)) / (Math.pow(1 + (roi / 12 / 100), (duration * 12)) - 1);interestPaid = 100">Calculate</button>
		</div>
		<div class="uk-card uk-card-default uk-card-body">
			<h3 class="uk-card-title">Home loan calculator formula</h3>
			<p><strong>E = P * r * (1 + r)<sup>n</sup> / ((1 + r)<sup>n</sup> - 1)</strong></p>
			<p><strong>E</strong> = EMI</p>

			<p><strong>P</strong> = Principal Loan Amount</p>

			<p><strong>r</strong> = rate of interest calculated on monthly basis. (i.e., r = Rate of Annual interest/12/100. If rate of interest is 10.5% per annum, then r = 10.5/12/100=0.00875)</p>

			<p><strong>n</strong> = loan term / tenure / duration in number of months</p>

			<p>For example, if you borrow Rs.10,00,000 from the bank at 10.5% annual interest for a period of 10 years (i.e., 120 months), then EMI = Rs.10,00,000 * 0.00875 * (1 + 0.00875)120 / ((1 + 0.00875)120 – 1) = Rs.13,493. i.e., you will have to pay Rs.13,493 for 120 months to repay the entire loan amount. The total amount payable will be Rs.13,493 * 120 = Rs.16,19,220 that includes Rs.6,19,220 as interest toward the loan.</p>

			<p>// payment = principle * monthly interest / (1 - (1 / (1+MonthlyInterest) * Months)) </p>
		</div>
	</div>
</template>

<script type="text/javascript">
export default {
  data() {
    return {
      principalAmt: 100000,
      duration: 1,
      roi: 10,
	  emi: 0,
	  interestPaid : 0
    };
  },
  methods: {
    /*calculateHomeLoanEMI() {
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
    }*/
  }
};
</script>
