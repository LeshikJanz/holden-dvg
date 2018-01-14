import React, { PropTypes } from 'react';
import css from 'services/cssService';
import styles from 'template/components/Shared/_SharedFormInputComponent.scss';
import cx from 'classnames';
import map from 'lodash/map';

/**
 *
 */
const ProductContactInputComponent = ({ input, label, meta: { asyncValidating, touched, error } }) => {
  const style = cx({
    'ProductContactInput-input': true,
    'ProductContactInput-inputError': touched && error,
  });
  return (
    <div styleName="ProductContactInput">
      <div styleName={style}>
        <input {...input} type="text" placeholder={label} />
      </div>
    </div>
  );
};

export const ProductContactInput = css(ProductContactInputComponent, styles);
ProductContactInputComponent.propTypes = {
  input: PropTypes.object,
  label: PropTypes.string,
  type: PropTypes.string,
  meta: PropTypes.object,
};
