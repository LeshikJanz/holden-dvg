import React from 'react';
import css from 'services/cssService';
import styles from 'template/components/ProductAbout/ProductAboutComponent.scss';

const ProductAboutComponent = ({ product }) => (
  <div styleName="block">
    <div styleName="component">
      <div styleName="component-title">
        <div styleName="title">
          About this {product.Make} {product.Model} {product.ComplianceYear}
        </div>
      </div>
      <div styleName="component-description">
        <div styleName="description">
          {product.Comments}
        </div>
      </div>
    </div>
  </div>
);

export default css(ProductAboutComponent, styles);
