import React, { PropTypes } from 'react';
import css from 'services/cssService';
import styles from 'template/components/PriceFilter/_PriceFilterComponent.scss';
import SelectComponent from 'template/components/Select/SelectComponent';

const dropdown = {
  '-1': {
    value: 'Price High-Low',
    tag: () => <div>Price High-Low</div>,
  },
  // eslint-disable-next-line quote-props
  '1': {
    value: 'Price Low-High',
    tag: () => <div>Price Low-High</div>,
  },
};

const PriceFilterComponent = ({ productsPricing, updateProductPricing }) => (
  <div styleName="filter">
    <SelectComponent
      onChange={updateProductPricing}
      defaultValue={productsPricing}
      items={dropdown}
    />
  </div>
);

PriceFilterComponent.propTypes = {
  productsPricing: PropTypes.string.isRequired,
  updateProductPricing: PropTypes.func.isRequired,
};

export default css(PriceFilterComponent, styles);
