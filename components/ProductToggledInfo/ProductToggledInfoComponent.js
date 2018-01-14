import React, { PropTypes } from 'react';
import css from 'services/cssService';
import styles from 'template/components/ProductToggledInfo/ProductToggledInfoComponent.scss';
import get from 'lodash/get';
import isEmpty from 'lodash/isEmpty';

const ProductToggledInfoComponent = ({ product }) => !isEmpty(product) && (
  <div styleName="block">
    <div styleName="component">
      <div styleName="component-item">
        <div styleName="detail">
          <div styleName="detail-title">
            <div styleName="items-row">
              <div styleName="address-icon" />
              Address
            </div>
          </div>
          <div styleName="detail-subtitle">
            <div>{get(product, 'DealerLocation.title', 'na')}</div>
            <div>{get(product, 'DealerLocation.address', 'na')},</div>
            <div>{get(product, 'DealerLocation.suburb', 'na')}</div>
          </div>
        </div>
      </div>

      <div styleName="component-item">
        <div styleName="detail">
          <div styleName="detail-title">
            <div styleName="items-row">
              <div styleName="address-icon" />
              Phone
            </div>
          </div>
          <div styleName="detail-subtitle">
            {get(product, 'DealerLocation.phone', 'na')}
          </div>
        </div>
      </div>
    </div>
  </div>
);

ProductToggledInfoComponent.propTypes = {
  product: PropTypes.shape({}).isRequired,
};

export default css(ProductToggledInfoComponent, styles);
