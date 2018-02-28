import React from 'react';
import css from 'services/cssService';
import styles from 'template/components/Callon/CallonComponent.scss';

const PHONE_NUMBER = "08 6555 7009"

const CallonComponent = ({ product }) => {
  return (
    <div styleName="block">
      <div styleName="component">
        <div styleName="component-callon">
          Call your dealership on
        </div>
        <div styleName="component-number">
          <div styleName="items-row">
            <div styleName="call-icon" />
            <a href={`tel:${PHONE_NUMBER}`}>{PHONE_NUMBER}</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default css(CallonComponent, styles);
