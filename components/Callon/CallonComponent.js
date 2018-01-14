import React from 'react';
import css from 'services/cssService';
import styles from 'template/components/Callon/CallonComponent.scss';
import get from 'lodash/get';

const CallonComponent = ({ product }) => (
  <div styleName="block">
    <div styleName="component">
      <div styleName="component-callon">
        Call your DVG dealership on
      </div>
      <div styleName="component-number">
        <div styleName="items-row">
          <div styleName="call-icon" />
          <a href={`tel:${get(product, 'DealerLocation.phone', 'na')}`}>{get(product, 'DealerLocation.phone', 'na')}</a>
        </div>
      </div>
    </div>
  </div>
);

export default css(CallonComponent, styles);
