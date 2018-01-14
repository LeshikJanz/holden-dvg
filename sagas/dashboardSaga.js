import { call, put, fork, takeLatest } from 'redux-saga/effects';
import * as actions from 'template/actions/index';
import * as api from 'template/api/index';
import * as constants from 'template/constants/index';

/**
 * Pages
 */
function* getDashboardProductsRequest(req) {
  const { payload } = req;
  try {
    const data = yield call(api.getDashboardProducts.bind(null, payload));
    yield put(actions.getDashboardProductsSuccess({ data }));
  } catch (e) {
    yield put(actions.getDashboardProductsFailure({ message: 'Cant fetch dashboard products' }));
  }
}

function* getProductEnquiriesRequest(req) {
  const { payload } = req;
  try {
    const data = yield call(api.getProductEnquiries.bind(null, payload));
    yield put(actions.getProductEnquiriesSuccess({ data }));
  } catch (e) {
    yield put(actions.getProductEnquiriesFailure({ message: 'Cant fetch dashboard product enquiries' }));
  }
}

function* postProductEnquiryRequest(req) {
  const { payload } = req;
  try {
    const data = yield call(api.postProductEnquiry.bind(null, payload));
    yield put(actions.postProductEnquirySuccess({ data }));
  } catch (e) {
    yield put(actions.postProductEnquiryFailure({ message: 'Cant fetch dashboard products' }));
  }
}

/**
 * Pages
 */
function* getProductGroupsRequest(req) {
  const { payload } = req;
  try {
    const data = yield call(api.getProductGroups.bind(null, payload));
    yield put(actions.getProductGroupsSuccess({ data }));
  } catch (e) {
    yield put(actions.getProductGroupsFailure({ message: 'Cant fetch dashboard products' }));
  }
}

function* getProductGroupRequest(req) {
  const { payload: { id, ...props } } = req;
  try {
    const data = yield call(api.getProductGroup.bind(null, id, props));
    yield put(actions.getProductGroupSuccess({ data }));
  } catch (e) {
    yield put(actions.getProductGroupFailure({ message: 'Cant fetch dashboard products' }));
  }
}

function* postProductGroupRequest(req) {
  const { payload } = req;
  try {
    const data = yield call(api.postProductGroup.bind(null, payload));
    yield put(actions.postProductGroupSuccess({ data }));
  } catch (e) {
    yield put(actions.postProductGroupFailure({ message: 'Cant fetch dashboard products' }));
  }
}

function* putProductGroupRequest(req) {
  const { payload: { productId, productGroups } } = req;

  try {
    const data = yield call(api.putProductGroup.bind(null, productId, productGroups));
    yield put(actions.putProductGroupSuccess({ data }));
  } catch (e) {
    yield put(actions.putProductGroupFailure({ message: 'Cant fetch dashboard products' }));
  }
}

function* deleteProductGroupRequest(req) {
  const { payload } = req;
  try {
    const data = yield call(api.deleteProductGroup.bind(null, payload));
    yield put(actions.deleteProductGroupSuccess({ data }));
  } catch (e) {
    yield put(actions.deleteProductGroupFailure({ message: 'Cant fetch dashboard products' }));
  }
}

function* getProductCategoriesRequest(req) {
  const { payload } = req;
  try {
    const data = yield call(api.getProductCategories.bind(null, payload));
    yield put(actions.getProductCategoriesSuccess({ data }));
  } catch (e) {
    yield put(actions.getProductCategoriesFailure({ message: 'Cant fetch dashboard products' }));
  }
}

function* getProductCategoryRequest(req) {
  const { payload: { id, ...props } } = req;
  try {
    const data = yield call(api.getProductCategory.bind(null, id, props));
    yield put(actions.getProductCategorySuccess({ data }));
  } catch (e) {
    yield put(actions.getProductCategoryFailure({ message: 'Cant fetch dashboard products' }));
  }
}

function* postProductCategoryRequest(req) {
  const { payload } = req;
  try {
    const data = yield call(api.postProductCategory.bind(null, payload));
    yield put(actions.postProductCategorySuccess({ data }));
  } catch (e) {
    yield put(actions.postProductCategoryFailure({ message: 'Cant fetch dashboard products' }));
  }
}

function* putProductCategoryRequest(req) {
  const { payload: { productId, ...props } } = req;
  try {
    const data = yield call(api.putProductCategory.bind(null, productId, props));
    yield put(actions.putProductCategorySuccess({ data }));
  } catch (e) {
    yield put(actions.putProductCategoryFailure({ message: 'Cant fetch dashboard products' }));
  }
}

function* deleteProductCategoryRequest(req) {
  const { payload } = req;
  try {
    const data = yield call(api.deleteProductCategory.bind(null, payload));
    yield put(actions.deleteProductCategorySuccess({ data }));
  } catch (e) {
    yield put(actions.deleteProductCategoryFailure({ message: 'Cant fetch dashboard products' }));
  }
}

function* getFunnelPagesRequest(req) {
  const { payload } = req;
  try {
    const data = yield call(api.getFunnelPages.bind(null, payload));
    yield put(actions.getFunnelPagesSuccess({ data }));
  } catch (e) {
    yield put(actions.getFunnelPagesFailure({ message: 'Cant fetch dashboard products' }));
  }
}

function* getFunnelPageRequest(req) {
  const { payload: { funnelPageId, ...props } } = req;
  try {
    const data = yield call(api.getFunnelPage.bind(null, funnelPageId, props));
    yield put(actions.getFunnelPageSuccess({ data }));
  } catch (e) {
    yield put(actions.getFunnelPageFailure({ message: 'Cant fetch dashboard products' }));
  }
}

function* postFunnelPageRequest(req) {
  const { payload } = req;
  try {
    const data = yield call(api.postFunnelPage.bind(null, payload));
    yield put(actions.postFunnelPageSuccess({ data }));
  } catch (e) {
    yield put(actions.postFunnelPageFailure({ message: 'Cant fetch dashboard products' }));
  }
}

function* putFunnelPageRequest(req) {
  const { payload: { productId, ...props } } = req;
  try {
    const data = yield call(api.putFunnelPage.bind(null, productId, props));
    yield put(actions.putFunnelPageSuccess({ data }));
  } catch (e) {
    yield put(actions.putFunnelPageFailure({ message: 'Cant fetch dashboard products' }));
  }
}

function* deleteFunnelPageRequest(req) {
  const { payload } = req;
  try {
    const data = yield call(api.deleteFunnelPage.bind(null, payload));
    yield put(actions.deleteFunnelPageSuccess({ data }));
  } catch (e) {
    yield put(actions.deleteFunnelPageFailure({ message: 'Cant fetch dashboard products' }));
  }
}

export default [
  fork(takeLatest, constants.GET_PRODUCT_ENQUIRIES_REQUEST, getProductEnquiriesRequest),
  fork(takeLatest, constants.POST_PRODUCT_ENQUIRY_REQUEST, postProductEnquiryRequest),
  fork(takeLatest, constants.GET_DASHBOARD_PRODUCTS_REQUEST, getDashboardProductsRequest),
  fork(takeLatest, constants.GET_PRODUCT_GROUPS_REQUEST, getProductGroupsRequest),
  fork(takeLatest, constants.GET_PRODUCT_GROUP_REQUEST, getProductGroupRequest),
  fork(takeLatest, constants.POST_PRODUCT_GROUP_REQUEST, postProductGroupRequest),
  fork(takeLatest, constants.PUT_PRODUCT_GROUP_REQUEST, putProductGroupRequest),
  fork(takeLatest, constants.DELETE_PRODUCT_GROUP_REQUEST, deleteProductGroupRequest),
  fork(takeLatest, constants.GET_PRODUCT_CATEGORIES_REQUEST, getProductCategoriesRequest),
  fork(takeLatest, constants.GET_PRODUCT_CATEGORY_REQUEST, getProductCategoryRequest),
  fork(takeLatest, constants.POST_PRODUCT_CATEGORY_REQUEST, postProductCategoryRequest),
  fork(takeLatest, constants.PUT_PRODUCT_CATEGORY_REQUEST, putProductCategoryRequest),
  fork(takeLatest, constants.DELETE_PRODUCT_CATEGORY_REQUEST, deleteProductCategoryRequest),
  fork(takeLatest, constants.GET_FUNNEL_PAGES_REQUEST, getFunnelPagesRequest),
  fork(takeLatest, constants.GET_FUNNEL_PAGE_REQUEST, getFunnelPageRequest),
  fork(takeLatest, constants.POST_FUNNEL_PAGE_REQUEST, postFunnelPageRequest),
  fork(takeLatest, constants.PUT_FUNNEL_PAGE_REQUEST, putFunnelPageRequest),
  fork(takeLatest, constants.DELETE_FUNNEL_PAGE_REQUEST, deleteFunnelPageRequest),
];
