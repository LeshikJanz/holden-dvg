import React, { PropTypes } from 'react';
import css from 'services/cssService';
import styles from 'template/components/ProductsSuggested/_ProductsSuggestedComponent.scss';
import ProductItemComponent from 'template/containers/ProductsContainer/components/ProductItemComponent';
import map from 'lodash/map';

const ProductsSuggestedComponent = ({ products, maxHeight, snippetEnabled }) =>
  <div styleName="block">
    <div styleName="component">
      <div styleName="component-title">
        <div styleName="title">Customers searching this vehicle also liked</div>
      </div>

      <div styleName="component-products">
        <div styleName="products">
          {map(products, (product, key) =>
            <div styleName="products-item" key={key}>
              <ProductItemComponent
                product={product}
                height={maxHeight}
                snippetEnabled={snippetEnabled}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  </div>;

ProductsSuggestedComponent.propTypes = {
  products: PropTypes.shape({
  }).isRequired,
  maxHeight: PropTypes.number.isRequired,
};

export default css(ProductsSuggestedComponent, styles);
