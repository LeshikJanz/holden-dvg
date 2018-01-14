import { withState, withHandlers, withProps, compose } from 'recompose';
import update from 'immutability-helper';
import findIndex from 'lodash/findIndex';
import reduce from 'lodash/reduce';
import isEmpty from 'lodash/isEmpty';

export default (ProductsContainer) => compose(
  withState('categories', 'updateCategories', {}),
  withState('modifiedProducts', 'updateModifiedProducts', []),
  withProps(props => {
    if (isEmpty(props.categories)) {
      const categories = reduce(props.productCategories.data, (acc, item) => {
        acc[item.stockNumber] = item.categories;
        return acc;
      }, {});
      return { ...props, categories };
    }

    return props;
  }),
  withHandlers({
    onCategoriesAdd: ({ updateCategories, updateModifiedProducts, modifiedProducts }) => (categories, stockNumber, item) => {
      updateCategories(update(categories, { [stockNumber]: { $push: [item] } }));

      if (!modifiedProducts.includes(stockNumber)) {
        updateModifiedProducts(modifiedProducts.concat([stockNumber]));
      }
    },
    onCategoriesRemove: ({ updateCategories, updateModifiedProducts, modifiedProducts }) => (categories, stockNumber, item) => {
      const categoryIndex = findIndex(categories[stockNumber], cat => cat === item);
      updateCategories(update(categories, { [stockNumber]: { $splice: [[categoryIndex, 1]] } }));
      if (!modifiedProducts.includes(stockNumber)) {
        updateModifiedProducts(modifiedProducts.concat([stockNumber]));
      }
    },
    onCategoriesReset: ({ updateModifiedProducts, modifiedProducts }) => (stockNumber) => {
      const productIndex = findIndex(modifiedProducts, cat => cat === stockNumber);
      updateModifiedProducts(update(modifiedProducts, { $splice: [[productIndex, 1]] }));
    },
  }),
  withHandlers({
    onCategoriesClick: ({ onCategoriesRemove, categories, onCategoriesAdd }) => (stockNumber, item) => {
      const productCategories = categories[stockNumber] || [];
      const modifiedCategories = update(categories, { [stockNumber]: { $set: productCategories } });
      if (productCategories.includes(item)) {
        onCategoriesRemove(modifiedCategories, stockNumber, item);
      } else {
        onCategoriesAdd(modifiedCategories, stockNumber, item);
      }
    },
  }),
)(ProductsContainer);
