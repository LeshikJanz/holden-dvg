import { handleActions } from 'redux-actions';
import update from 'immutability-helper';
import * as constants from 'template/constants/index';

const initialState = {
  productsViewScrollTop: null,
};

const updateProductsViewScrollTop = (state, action) => update(state, {
  productsViewScrollTop: { $set: action.payload },
});

export default handleActions({
  [constants.UPDATE_PRODUCTS_VIEW_SCROLL_TOP]: updateProductsViewScrollTop,
}, initialState);
