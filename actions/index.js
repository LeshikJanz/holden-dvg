import { createAction } from 'redux-actions';
import * as constants from 'template/constants/index';

export const toggleProductFilter = createAction(constants.TOGGLE_PRODUCT_FILTER);
export const updateProductSearch = createAction(constants.UPDATE_PRODUCT_SEARCH);
export const updateProductStartat = createAction(constants.UPDATE_PRODUCT_STARTAT);
export const updateProductLocation = createAction(constants.UPDATE_PRODUCT_LOCATION);
export const updateProductCondition = createAction(constants.UPDATE_PRODUCT_CONDITION);
export const updateProductPricing = createAction(constants.UPDATE_PRODUCT_PRICING);
export const updateProductCategory = createAction(constants.UPDATE_PRODUCT_CATEGORY);
export const updateProductColor = createAction(constants.UPDATE_PRODUCT_COLOR);

export const idleProductSearch = createAction(constants.IDLE_PRODUCT_SEARCH);
export const submitProductSearch = createAction(constants.SUBMIT_PRODUCT_SEARCH);
export const updateProductsViewScrollTop = createAction(constants.UPDATE_PRODUCTS_VIEW_SCROLL_TOP);

export const getDashboardProductsRequest = createAction(constants.GET_DASHBOARD_PRODUCTS_REQUEST);
export const getDashboardProductsSuccess = createAction(constants.GET_DASHBOARD_PRODUCTS_SUCCESS);
export const getDashboardProductsFailure = createAction(constants.GET_DASHBOARD_PRODUCTS_FAILURE);
export const getDashboardProductsIdle = createAction(constants.GET_DASHBOARD_PRODUCTS_IDLE);

export const getProductGroupsRequest = createAction(constants.GET_PRODUCT_GROUPS_REQUEST);
export const getProductGroupsSuccess = createAction(constants.GET_PRODUCT_GROUPS_SUCCESS);
export const getProductGroupsFailure = createAction(constants.GET_PRODUCT_GROUPS_FAILURE);
export const getProductGroupsIdle = createAction(constants.GET_PRODUCT_GROUPS_IDLE);

export const getProductGroupRequest = createAction(constants.GET_PRODUCT_GROUP_REQUEST);
export const getProductGroupSuccess = createAction(constants.GET_PRODUCT_GROUP_SUCCESS);
export const getProductGroupFailure = createAction(constants.GET_PRODUCT_GROUP_FAILURE);
export const getProductGroupIdle = createAction(constants.GET_PRODUCT_GROUP_IDLE);

export const postProductGroupRequest = createAction(constants.POST_PRODUCT_GROUP_REQUEST);
export const postProductGroupSuccess = createAction(constants.POST_PRODUCT_GROUP_SUCCESS);
export const postProductGroupFailure = createAction(constants.POST_PRODUCT_GROUP_FAILURE);
export const postProductGroupIdle = createAction(constants.POST_PRODUCT_GROUP_IDLE);

export const putProductGroupRequest = createAction(constants.PUT_PRODUCT_GROUP_REQUEST);
export const putProductGroupSuccess = createAction(constants.PUT_PRODUCT_GROUP_SUCCESS);
export const putProductGroupFailure = createAction(constants.PUT_PRODUCT_GROUP_FAILURE);
export const putProductGroupIdle = createAction(constants.PUT_PRODUCT_GROUP_IDLE);

export const deleteProductGroupRequest = createAction(constants.DELETE_PRODUCT_GROUP_REQUEST);
export const deleteProductGroupSuccess = createAction(constants.DELETE_PRODUCT_GROUP_SUCCESS);
export const deleteProductGroupFailure = createAction(constants.DELETE_PRODUCT_GROUP_FAILURE);
export const deleteProductGroupIdle = createAction(constants.DELETE_PRODUCT_GROUP_IDLE);

export const getProductCategoriesRequest = createAction(constants.GET_PRODUCT_CATEGORIES_REQUEST);
export const getProductCategoriesSuccess = createAction(constants.GET_PRODUCT_CATEGORIES_SUCCESS);
export const getProductCategoriesFailure = createAction(constants.GET_PRODUCT_CATEGORIES_FAILURE);
export const getProductCategoriesIdle = createAction(constants.GET_PRODUCT_CATEGORIES_IDLE);

export const getProductCategoryRequest = createAction(constants.GET_PRODUCT_CATEGORY_REQUEST);
export const getProductCategorySuccess = createAction(constants.GET_PRODUCT_CATEGORY_SUCCESS);
export const getProductCategoryFailure = createAction(constants.GET_PRODUCT_CATEGORY_FAILURE);
export const getProductCategoryIdle = createAction(constants.GET_PRODUCT_CATEGORY_IDLE);

export const postProductCategoryRequest = createAction(constants.POST_PRODUCT_CATEGORY_REQUEST);
export const postProductCategorySuccess = createAction(constants.POST_PRODUCT_CATEGORY_SUCCESS);
export const postProductCategoryFailure = createAction(constants.POST_PRODUCT_CATEGORY_FAILURE);
export const postProductCategoryIdle = createAction(constants.POST_PRODUCT_CATEGORY_IDLE);

export const putProductCategoryRequest = createAction(constants.PUT_PRODUCT_CATEGORY_REQUEST);
export const putProductCategorySuccess = createAction(constants.PUT_PRODUCT_CATEGORY_SUCCESS);
export const putProductCategoryFailure = createAction(constants.PUT_PRODUCT_CATEGORY_FAILURE);
export const putProductCategoryIdle = createAction(constants.PUT_PRODUCT_CATEGORY_IDLE);

export const deleteProductCategoryRequest = createAction(constants.DELETE_PRODUCT_CATEGORY_REQUEST);
export const deleteProductCategorySuccess = createAction(constants.DELETE_PRODUCT_CATEGORY_SUCCESS);
export const deleteProductCategoryFailure = createAction(constants.DELETE_PRODUCT_CATEGORY_FAILURE);
export const deleteProductCategoryIdle = createAction(constants.DELETE_PRODUCT_CATEGORY_IDLE);

export const getFunnelPagesRequest = createAction(constants.GET_FUNNEL_PAGES_REQUEST);
export const getFunnelPagesSuccess = createAction(constants.GET_FUNNEL_PAGES_SUCCESS);
export const getFunnelPagesFailure = createAction(constants.GET_FUNNEL_PAGES_FAILURE);
export const getFunnelPagesIdle = createAction(constants.GET_FUNNEL_PAGES_IDLE);

export const getFunnelPageRequest = createAction(constants.GET_FUNNEL_PAGE_REQUEST);
export const getFunnelPageSuccess = createAction(constants.GET_FUNNEL_PAGE_SUCCESS);
export const getFunnelPageFailure = createAction(constants.GET_FUNNEL_PAGE_FAILURE);
export const getFunnelPageIdle = createAction(constants.GET_FUNNEL_PAGE_IDLE);

export const postFunnelPageRequest = createAction(constants.POST_FUNNEL_PAGE_REQUEST);
export const postFunnelPageSuccess = createAction(constants.POST_FUNNEL_PAGE_SUCCESS);
export const postFunnelPageFailure = createAction(constants.POST_FUNNEL_PAGE_FAILURE);
export const postFunnelPageIdle = createAction(constants.POST_FUNNEL_PAGE_IDLE);

export const putFunnelPageRequest = createAction(constants.PUT_FUNNEL_PAGE_REQUEST);
export const putFunnelPageSuccess = createAction(constants.PUT_FUNNEL_PAGE_SUCCESS);
export const putFunnelPageFailure = createAction(constants.PUT_FUNNEL_PAGE_FAILURE);
export const putFunnelPageIdle = createAction(constants.PUT_FUNNEL_PAGE_IDLE);

export const deleteFunnelPageRequest = createAction(constants.DELETE_FUNNEL_PAGE_REQUEST);
export const deleteFunnelPageSuccess = createAction(constants.DELETE_FUNNEL_PAGE_SUCCESS);
export const deleteFunnelPageFailure = createAction(constants.DELETE_FUNNEL_PAGE_FAILURE);
export const deleteFunnelPageIdle = createAction(constants.DELETE_FUNNEL_PAGE_IDLE);

export const postDashboardAuthRequest = createAction(constants.POST_DASHBOARD_AUTH_REQUEST);
export const postDashboardAuthSuccess = createAction(constants.POST_DASHBOARD_AUTH_SUCCESS);
export const postDashboardAuthFailure = createAction(constants.POST_DASHBOARD_AUTH_FAILURE);
export const postDashboardAuthIdle = createAction(constants.POST_DASHBOARD_AUTH_IDLE);

export const getProductEnquiriesRequest = createAction(constants.GET_PRODUCT_ENQUIRIES_REQUEST);
export const getProductEnquiriesSuccess = createAction(constants.GET_PRODUCT_ENQUIRIES_SUCCESS);
export const getProductEnquiriesFailure = createAction(constants.GET_PRODUCT_ENQUIRIES_FAILURE);
export const getProductEnquiriesIdle = createAction(constants.GET_PRODUCT_ENQUIRIES_IDLE);

export const postProductEnquiryRequest = createAction(constants.POST_PRODUCT_ENQUIRY_REQUEST);
export const postProductEnquirySuccess = createAction(constants.POST_PRODUCT_ENQUIRY_SUCCESS);
export const postProductEnquiryFailure = createAction(constants.POST_PRODUCT_ENQUIRY_FAILURE);
export const postProductEnquiryIdle = createAction(constants.POST_PRODUCT_ENQUIRY_IDLE);
