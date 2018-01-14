/* eslint-disable no-param-reassign */
import { handleActions } from 'redux-actions';
import update from 'immutability-helper';
import * as constants from 'template/constants/index';
import findKey from 'lodash/findKey';
import reduce from 'lodash/reduce';

const initialState = {
  appConfig: {
    headerEnabled: true,
    snippetEnabled: false,
    snippetRows: 1,
    salesManVersion: false,
    background: 'enabled',
  },
  productsFilter: [],
  productsFilterTagPosition: [],
  productsFilterQuery: {},
  productsSearch: { make: '', model: '', level: null, isSearching: false, isSearchable: false },
  productsStartat: 10000,
  productsLocation: 'default',
  productsCondition: ['all'],
  productsPricing: '1',
  productsCategory: 'All Cars',
  productsColor: ['All'],
  allCategories: [
    'All Cars',
    'Small Cars',
    'Hatch/Wagon Crossovers',
    'Mid and Large Sedans',
    'Station Wagons',
    'Mid-sized and Family SUVs',
    'Large SUVs and Wagons',
    'Luxury Vehicles',
    'Performance Vehicles',
    'Utes and Traybacks',
    'Vans',
    'People Movers',
  ],
};

update.extend('$setToggleProductFilter', (data, original) => {
  const filterIndex = findKey(original, ['key', data.key]);
  if (filterIndex && original[filterIndex].title !== data.title) {
    return update(original, { $splice: [[filterIndex, 1, data]] });
  }
  if (filterIndex) {
    return update(original, { $splice: [[filterIndex, 1]] });
  }
  return update(original, { $push: [data] });
});

update.extend('$setToggleProductFilterQuery', (data, original) => update(original, {
  $set: reduce(data, (acc, item) => {
    acc[item.key] = item.title;
    return acc;
  }, {}),
}));

const setAppState = (state, action) => update(state, {
  productsSearch: { $set: { make: action.payload.make || '', model: action.payload.model || '', level: null } },
  productsLocation: { $set: action.payload.location || 'default' },
  productsCondition: { $set: action.payload.condition || ['all'] },
  productsCategory: { $set: action.payload.category || 'All Cars' },

  appConfig: {
    headerEnabled: { $set: action.payload.headerEnabled || initialState.appConfig.headerEnabled },
    snippetEnabled: { $set: action.payload.snippetEnabled || initialState.appConfig.snippetEnabled },
    snippetRows: { $set: action.payload.snippetRows || initialState.appConfig.snippetRows },
    salesManVersion: { $set: action.payload.salesManVersion || initialState.appConfig.salesManVersion },
    background: { $set: action.payload.background || initialState.appConfig.background },
  },
});

const toggleProductFilter = (state, action) => {
  const withProductsFilter = update(state, {
    productsFilter: { $setToggleProductFilter: action.payload },
  });
  const withProductsFilterQuery = update(withProductsFilter, {
    productsFilterQuery: { $setToggleProductFilterQuery: withProductsFilter.productsFilter },
  });
  return update(withProductsFilterQuery, {
    productsFilterTagPosition: { $set: Object.keys(withProductsFilterQuery.productsFilterQuery) },
  });
};

const updateProductSearch = (state, action) => update(state, {
  productsSearch: {
    make: { $set: action.payload.make },
    model: { $set: action.payload.model },
    level: { $set: action.payload.level },
    isSearching: { $set: false },
    isSearchable: { $set: true },
  },
  productsCategory: {
    $set: initialState.productsCategory,
  },
  productsFilter: { $set: initialState.productsFilter },
  productsFilterQuery: { $set: initialState.productsFilterQuery },
  productsFilterTagPosition: { $set: initialState.productsFilterTagPosition },
  // productsCondition: { $set: initialState.productsCondition },
});

const submitProductSearch = (state) => update(state, {
  productsSearch: {
    isSearching: { $set: true },
  },
});

const idleProductSearch = (state) => update(state, {
  productsSearch: {
    isSearchable: { $set: false },
  },
});

const updateProductStartat = (state, action) => update(state, {
  productsStartat: { $set: action.payload },
});

const knock = (arr = [], val) => {
  if (!Array.isArray(arr)) {
    arr = [arr];
  }
  if (arr.includes(val)) {
    return arr.filter(item => item !== val);
  }
  if (val === 'all') {
    return ['all'];
  }
  return arr.concat(val).filter(item => item !== 'all');
};

const updateProductCondition = (state, action) => update(state, {
  productsCondition: { $set: knock(state.productsCondition, action.payload) },
});

const updateProductLocation = (state, action) => update(state, {
  productsLocation: { $set: action.payload },
});

const updateProductPricing = (state, action) => update(state, {
  productsPricing: { $set: action.payload },
});

const updateProductColor = (state, action) => update(state, {
  productsColor: { $set: [action.payload] },
});

const updateProductCategory = (state, action) => update(state, {
  productsCategory: { $set: action.payload },
  productsSearch: { $set: initialState.productsSearch },
  productsFilter: { $set: initialState.productsFilter },
  productsFilterQuery: { $set: initialState.productsFilterQuery },
  productsFilterTagPosition: { $set: initialState.productsFilterTagPosition },
  // productsCondition: { $set: initialState.productsCondition },
});

export default handleActions({
  [constants.TOGGLE_PRODUCT_FILTER]: toggleProductFilter,
  [constants.IDLE_PRODUCT_SEARCH]: idleProductSearch,
  [constants.SUBMIT_PRODUCT_SEARCH]: submitProductSearch,
  [constants.UPDATE_PRODUCT_SEARCH]: updateProductSearch,
  [constants.UPDATE_PRODUCT_STARTAT]: updateProductStartat,
  [constants.UPDATE_PRODUCT_CONDITION]: updateProductCondition,
  [constants.UPDATE_PRODUCT_LOCATION]: updateProductLocation,
  [constants.UPDATE_PRODUCT_PRICING]: updateProductPricing,
  [constants.UPDATE_PRODUCT_CATEGORY]: updateProductCategory,
  [constants.UPDATE_PRODUCT_COLOR]: updateProductColor,
  SET_GLOBAL_APP_STATE: setAppState,
}, initialState);
