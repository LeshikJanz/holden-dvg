import React, { PropTypes } from 'react';
import css from 'services/cssService';
import styles from 'template/components/LocationFilter/_LocationFilterComponent.scss';
import SelectComponent from 'template/components/Select/SelectComponent';
import dealersMap from 'template/containers/ProductsContainer/dealersMap.json';
import reduce from 'lodash/reduce';

const dropdown = reduce({ default: { title: 'All Locations' }, ...dealersMap }, (acc, item, key) => {
  // eslint-disable-next-line no-param-reassign
  acc[key] = ({
    value: item.title,
    tag: () => <div>{item.title}</div>,
  });
  return acc;
}, {});

const LocationFilterComponent = ({ productsLocation, updateProductLocation }) => (
  <div styleName="filter">
    <SelectComponent
      onChange={updateProductLocation}
      defaultValue={productsLocation}
      items={dropdown}
    />
  </div>
);

LocationFilterComponent.propTypes = {
  productsLocation: PropTypes.string.isRequired,
  updateProductLocation: PropTypes.func.isRequired,
};

export default css(LocationFilterComponent, styles);
