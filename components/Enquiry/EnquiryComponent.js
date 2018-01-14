import React, { PropTypes } from 'react';
import css from 'services/cssService';
import styles from 'template/components/Enquiry/EnquiryComponent.scss';
import calcPng from 'template/assets/icons/calc.png';

const EnquiryComponent = ({ onClick }) => (
  <div styleName="block" onClick={onClick}>
    <div styleName="component">
      <div styleName="component-logo">
        <img src={calcPng} alt="Calculator" />
      </div>
      <div styleName="component-text">
        Calculate your repayments
      </div>
    </div>
  </div>
);

EnquiryComponent.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default css(EnquiryComponent, styles);
