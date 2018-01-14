import React, { PropTypes } from 'react';
import * as FinanceCalculatorStyled from 'template/components/FinanceCalculator/FinanceCalculatorStyled';
import hoc from 'template/components/FinanceCalculator/hoc';
import { roundProductPrice } from 'template/utils/index';
import ProductFinanceHoc from 'template/components/ProductFinance/productFinanceHoc';

const terms = [12, 24, 36, 48, 60, 72, 84];
const frequencies = ['Weekly', 'Fortnightly', 'Monthly'];

class FinanceCalculatorComponent extends React.Component {
  render() {
    return (
      <FinanceCalculatorStyled.Block>
        <FinanceCalculatorStyled.Title>Finance Calculator<FinanceCalculatorStyled.CloseBtn onClick={this.props.onModalClose}>x</FinanceCalculatorStyled.CloseBtn></FinanceCalculatorStyled.Title>
        <FinanceCalculatorStyled.SubText>Select and complete the relevant fields below then click "Calculate"</FinanceCalculatorStyled.SubText>

        <FinanceCalculatorStyled.Row>
          <FinanceCalculatorStyled.InputText>Amount Financed:</FinanceCalculatorStyled.InputText>
          <FinanceCalculatorStyled.Input type="text" value={this.props.loanAmount} onChange={this.props.onLoanAmountChange} />
        </FinanceCalculatorStyled.Row>

        <FinanceCalculatorStyled.Row>
          <FinanceCalculatorStyled.InputText>Interest Rate:</FinanceCalculatorStyled.InputText>
          <FinanceCalculatorStyled.Input type="text" value={this.props.interestRate} onChange={this.props.onInterestRateChange} />
        </FinanceCalculatorStyled.Row>

        <FinanceCalculatorStyled.Row>
          <FinanceCalculatorStyled.InputText>Trade In / Deposit:</FinanceCalculatorStyled.InputText>
          <FinanceCalculatorStyled.Input type="text" value={this.props.deposit} onChange={this.props.onDepositChange} />
        </FinanceCalculatorStyled.Row>

        <FinanceCalculatorStyled.Row>
          <FinanceCalculatorStyled.InputText>Loan Term (Years):</FinanceCalculatorStyled.InputText>
          <FinanceCalculatorStyled.Select value={this.props.terms} onChange={this.props.onTermsChange}>
            {terms.map((term, index) => (
              <option key={index} value={term}>
                {term} Months
              </option>
            ))}
          </FinanceCalculatorStyled.Select>
        </FinanceCalculatorStyled.Row>

        <FinanceCalculatorStyled.Row>
          <FinanceCalculatorStyled.InputText>Repayment Frequency:</FinanceCalculatorStyled.InputText>
          <FinanceCalculatorStyled.Select value={this.props.frequency} onChange={this.props.onFrequencyChange}>
            {frequencies.map((frequency, index) => (
              <option key={index} value={frequency}>
                {frequency}
              </option>
            ))}
          </FinanceCalculatorStyled.Select>
        </FinanceCalculatorStyled.Row>

        <FinanceCalculatorStyled.Apply>
          <FinanceCalculatorStyled.ApplyHeader>With finance</FinanceCalculatorStyled.ApplyHeader>
          <FinanceCalculatorStyled.ApplyCost>
            <strong>${this.props.financeRentle}</strong> <sub>/{this.props.frequency}</sub>
          </FinanceCalculatorStyled.ApplyCost>
          <FinanceCalculatorStyled.ApplyLink href="http://www.dvg.com.au/finance">Apply for Finance &gt;</FinanceCalculatorStyled.ApplyLink>
        </FinanceCalculatorStyled.Apply>

        <FinanceCalculatorStyled.Row>
          <FinanceCalculatorStyled.Img src={this.props.product.Photos[0]} alt="" />
          <FinanceCalculatorStyled.Product>
            <p>{this.props.product.Title}</p>
            <FinanceCalculatorStyled.ProductPrice>${roundProductPrice(this.props.loanAmount)}</FinanceCalculatorStyled.ProductPrice>
          </FinanceCalculatorStyled.Product>
        </FinanceCalculatorStyled.Row>

        {this.props.financeRentle && (
          <FinanceCalculatorStyled.Row>
            <FinanceCalculatorStyled.Repayments>
              Your {this.props.frequency} Repayments: <strong>${this.props.financeRentle}*</strong>
            </FinanceCalculatorStyled.Repayments>
          </FinanceCalculatorStyled.Row>
        )}

        <FinanceCalculatorStyled.TermsAndConditions>
          * The repayment amount is an indicative estimate only and does not constitute a quote or offer of finance. Unless specified otherwise, the indicative estimate is not based on drive away pricing and does not include any provision for additional fees and charges (statutory or otherwise). The estimate is not based on any particular type of finance agreement or instrument. Actual repayment amounts will be subject to the type of finance agreement / instrument that applies. The interest rate is indicative only and the actual rate may vary at any time. Information provided by the finance calculator does not take into account your personal needs and financial circumstances.
        </FinanceCalculatorStyled.TermsAndConditions>
      </FinanceCalculatorStyled.Block>
    );
  }
}

FinanceCalculatorComponent.propTypes = {
  loanAmount: PropTypes.number.isRequired,
  onLoanAmountChange: PropTypes.func.isRequired,
  interestRate: PropTypes.string.isRequired,
  onInterestRateChange: PropTypes.func.isRequired,
  deposit: PropTypes.number.isRequired,
  onDepositChange: PropTypes.func.isRequired,
  terms: PropTypes.number.isRequired,
  onTermsChange: PropTypes.func.isRequired,
  frequency: PropTypes.string.isRequired,
  onFrequencyChange: PropTypes.func.isRequired,
  product: PropTypes.shape({}).isRequired,
  financeRentle: PropTypes.string.isRequired,
  onParamsChange: PropTypes.func,
  onModalClose: PropTypes.func.isRequired,
  params: PropTypes.shape({}).isRequired,
};

export default hoc(ProductFinanceHoc(FinanceCalculatorComponent));
