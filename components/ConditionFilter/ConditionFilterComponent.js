import React from 'react';
import css from 'services/cssService';
import styles from 'template/components/ConditionFilter/_ConditionFilterComponent.scss';
import cx from 'classnames';

const ConditionFilterComponent = ({ productsCondition, updateProductCondition }) => {
  const newStyle = cx({
    'filter-itemDefault': !productsCondition.includes('new'),
    'filter-itemActive': productsCondition.includes('new'),
    'filter-itemDisabled': true,
  });
  const usedStyle = cx({
    'filter-itemDefault': !productsCondition.includes('used'),
    'filter-itemActive': productsCondition.includes('used'),
  });
  const allStyle = cx({
    'filter-itemDefault': !productsCondition.includes('all'),
    'filter-itemActive': productsCondition.includes('all'),
  });
  const demoStyle = cx({
    'filter-itemDefault': !productsCondition.includes('demo'),
    'filter-itemActive': productsCondition.includes('demo'),
    'filter-itemDisabled': true,
  });
  return (
    <div styleName="filter">
      <div styleName={allStyle} onClick={() => updateProductCondition('all')}>All</div>
      <div styleName={newStyle} onClick={() => updateProductCondition('new')}>New</div>
      <div styleName={demoStyle} onClick={() => updateProductCondition('demo')}>Demo</div>
      <div styleName={usedStyle} onClick={() => updateProductCondition('used')}>Used</div>
    </div>
  );
};

ConditionFilterComponent.propTypes = {};

export default css(ConditionFilterComponent, styles);