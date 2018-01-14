import { withState, withHandlers, compose, withProps } from 'recompose';

export default (FinanceCalculator) => compose(
  withState('loanAmount', 'updateLoanAmount', ({ loanAmount }) => loanAmount),
  withState('interestRate', 'updateInterestRate', ({ interestRate }) => interestRate),
  withState('deposit', 'updateDeposit', () => 0),
  withState('terms', 'updateTerms', () => 60),
  withState('frequency', 'updateFrequency', () => 'Weekly'),
  withHandlers({
    onLoanAmountChange: ({ updateLoanAmount }) => (event) => updateLoanAmount(event.target.value),
    onInterestRateChange: ({ updateInterestRate }) => (event) => updateInterestRate(event.target.value),
    onDepositChange: ({ updateDeposit }) => (event) => updateDeposit(event.target.value),
    onTermsChange: ({ updateTerms }) => (event) => updateTerms(event.target.value),
    onFrequencyChange: ({ updateFrequency }) => (event) => updateFrequency(event.target.value),
  }),
  withProps(props => ({
    ...props,
    params: {
      loanAmount: props.loanAmount,
      interestRate: props.interestRate,
      deposit: props.deposit,
      terms: props.terms,
      frequency: props.frequency,
    }
  }))
)(FinanceCalculator);
