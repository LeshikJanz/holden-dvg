import React, { PropTypes } from 'react';
import css from 'services/cssService';
import styles from 'template/containers/ProductsContainer/components/ProductPremisesComponent/_ProductPremisesComponent.scss';
import onPremises from 'template/assets/img/custom/onPremises.png';

const ProductPremisesComponent = ({ productsSearch }) =>
  <div styleName="block">
    <div styleName="component">
      <div styleName="productHead">
        <div styleName="productHead-image">
          <img src={onPremises} alt="" />
        </div>
      </div>
      <div styleName="productTail">
        <div styleName="productTail-description">
          <div styleName="description-item">
            <p>No <strong>{productsSearch.make} {productsSearch.model}S</strong> on premises today; but we can tweak your search to find competitors to the <strong>{productsSearch.model}</strong>.</p>
            <br />
            <p>These vehicles represent equivalent value. Use the tags above to find the right one.</p>
          </div>
        </div>
      </div>
    </div>
  </div>;

ProductPremisesComponent.propTypes = {
  productsSearch: PropTypes.shape().isRequired,
};

export default css(ProductPremisesComponent, styles);
