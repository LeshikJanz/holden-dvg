import { withState, withHandlers, compose } from 'recompose';
import split from 'lodash/split';
import isNumber from 'lodash/isNumber';
import isString from 'lodash/isString';

const containsNumber = item => /^\d+$/.test(item);

export default (ProductsSearchContainer) => compose(
  withState('searchByModel', 'updateSearchByModel', ''),
  withState('searchByMake', 'updateSearchByMake', ''),
  withState('searchByStock', 'updateSearchByStock', ''),
  withHandlers({
    onSearch: ({ updateSearchByModel, updateSearchByMake, updateSearchByStock }) => event => {
      if (isNumber(event.target.value) || containsNumber(event.target.value)) {
        updateSearchByStock(event.target.value);
        updateSearchByModel('');
        updateSearchByMake('');
      } else if (isString(event.target.value)) {
        const [make, model] = split(event.target.value, ' ', 2);
        updateSearchByStock('');
        updateSearchByModel(model || '');
        updateSearchByMake(make || '');
      }
    },
  }),
)(ProductsSearchContainer);
