import React, { PropTypes } from 'react';

const financeCalculator = {
  defaults: {
    terms: 0,
    deposit: 0,
    maxTerm: 7,
    setupFee: 0,
    extraFee: 0,
    frequency: 12
  },
  calculate(amount, interest, deposit, frequency, terms, setupfee, extrafee) {
    const principal = amount - deposit;
    let payment = ((principal + setupfee) * ((this.percent(interest) * this.calcPower(interest, terms)) / ((this.calcPower(interest, terms)) - 1))) + extrafee;
    if (frequency === 'Fortnightly') {
      payment = (payment * 12) / 26;
    } else if (frequency === 'Weekly') {
      payment = (payment * 12) / 52;
    }
    return payment.toFixed(2);
  },
  percent(rate) {
    return (rate / 100) / this.defaults.frequency;
  },
  calcPower(rate, period) {
    const newInterest = 1 + this.percent(rate);
    return Math.pow(newInterest, period);
  }
};

const productFinanceHoc = (ProductFinanceComponent) => {
  class ProductFinanceHoc extends React.Component {
    render() {
      const financeRentle = financeCalculator.calculate(
        this.props.loanAmount,
        this.props.interestRate,
        this.props.deposit,
        this.props.frequency,
        this.props.terms,
        this.props.setupFee,
        this.props.extraFee
      );
      return (
        <ProductFinanceComponent
          financeRentle={financeRentle}
          {...this.props}
        />
      );
    }
  }

  ProductFinanceHoc.propTypes = {
    loanAmount: PropTypes.number.isRequired,
    interestRate: PropTypes.string.isRequired,
    deposit: PropTypes.number.isRequired,
    frequency: PropTypes.string.isRequired,
    terms: PropTypes.number.isRequired,
    setupFee: PropTypes.number.isRequired,
    extraFee: PropTypes.number.isRequired,
  };

  ProductFinanceHoc.defaultProps = {
    deposit: 0,
    frequency: 'Weekly',
    terms: 48,
    setupFee: 0,
    extraFee: 0,
  };

  return ProductFinanceHoc;
};

export default productFinanceHoc;
