import React, { PropTypes } from 'react';
import css from 'services/cssService';
import productFinanceHoc from 'template/components/ProductFinance/productFinanceHoc';
import styles from 'template/components/ProductFinance/ProductFinanceComponent.scss';
import { roundProductPrice } from 'template/utils/index';

const ProductFinanceComponent = ({ financeRentle, onClick }) => (
  <div styleName="block">
    <div styleName="component">
      <div styleName="title">
        <div styleName="title-title">With Finance</div>
        <div styleName="title-text">
          {financeRentle ?
            [<strong>$</strong>, roundProductPrice(financeRentle), <small>/week</small>]
          : 'calculating' }
        </div>
      </div>
      <div onClick={onClick} styleName="subtitle">Apply for Finance ></div>
    </div>
  </div>
);

ProductFinanceComponent.propTypes = {
  financeRentle: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default productFinanceHoc(css(ProductFinanceComponent, styles));
