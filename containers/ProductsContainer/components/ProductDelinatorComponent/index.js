import React from 'react';
import css from 'services/cssService';
import styles from 'template/containers/ProductsContainer/components/ProductDelinatorComponent/_ProductDelinatorComponent.scss';
import carChangingLanes from 'template/assets/img/custom/carChangingLanes.png';

const ProductDelinatorComponent = () =>
  <div styleName="block">
    <div styleName="component">
      <div styleName="productHead">
        <div styleName="productHead-image">
          <img src={carChangingLanes} alt="" />
        </div>
      </div>
      <div styleName="productTail">
        <div styleName="productTail-title">
          Suggested vehicles for you
        </div>
        <div styleName="productTail-description">
          <div styleName="description-item">
            <p>We compounded your search to save you the time of clicking around and searching similar cars. Here is what we found...</p>
          </div>
        </div>
      </div>
    </div>
  </div>;

ProductDelinatorComponent.propTypes = {
};

export default css(ProductDelinatorComponent, styles);
