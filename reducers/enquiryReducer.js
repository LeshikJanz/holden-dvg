import { handleActions } from 'redux-actions';
import update from 'immutability-helper';
import * as constants from 'template/constants/index';

const initialState = {
  enquiry: {
    data: [],
  },
  enquiries: {
    data: [],
  },
  actions: {
    getProductEnquiries: {
      message: null,
      status: null,
      isLoading: false,
      createdAt: null,
    },
    postProductEnquiry: {
      message: null,
      status: null,
      isLoading: false,
      createdAt: null,

      meta: {
        origin: null,
      }
    },
  },
};

/**
 * Get enquiry
 */
const postProductEnquiryRequest = (state, action) => update(state, {
  actions: {
    postProductEnquiry: { $setRequestActionLoading: {
      meta: {
        origin: { $set: action.payload.origin },
      },
    } },
  },
});

const postProductEnquirySuccess = (state, action) => update(state, {
  actions: {
    postProductEnquiry: {
      $setRequestActionSuccess: action.payload,
    },
  },
});

const postProductEnquiryFailure = (state, action) => update(state, {
  actions: {
    postProductEnquiry: { $setRequestActionFailure: action.payload },
  },
});

const postProductEnquiryIdle = (state) => update(state, {
  actions: {
    postProductEnquiry: { $setRequestActionIdle: {
      meta: {
        origin: { $set: null },
      },
    } },
  },
});

/**
 * Get enquiry
 */
const getProductEnquiriesRequest = (state, action) => update(state, {
  actions: {
    getProductEnquiries: { $setRequestActionLoading: {} },
  },
});

const getProductEnquiriesSuccess = (state, action) => update(state, {
  enquiries: {
    data: { $set: action.payload.data },
  },
  actions: {
    getProductEnquiries: {
      $setRequestActionSuccess: action.payload,
    },
  },
});

const getProductEnquiriesFailure = (state, action) => update(state, {
  actions: {
    getProductEnquiries: { $setRequestActionFailure: action.payload },
  },
});

const getProductEnquiriesIdle = (state) => update(state, {
  actions: {
    getProductEnquiries: { $setRequestActionIdle: {} },
  },
});

export default handleActions({
  [constants.GET_PRODUCT_ENQUIRIES_REQUEST]: getProductEnquiriesRequest,
  [constants.GET_PRODUCT_ENQUIRIES_SUCCESS]: getProductEnquiriesSuccess,
  [constants.GET_PRODUCT_ENQUIRIES_FAILURE]: getProductEnquiriesFailure,
  [constants.GET_PRODUCT_ENQUIRIES_IDLE]: getProductEnquiriesIdle,

  [constants.POST_PRODUCT_ENQUIRY_REQUEST]: postProductEnquiryRequest,
  [constants.POST_PRODUCT_ENQUIRY_SUCCESS]: postProductEnquirySuccess,
  [constants.POST_PRODUCT_ENQUIRY_FAILURE]: postProductEnquiryFailure,
  [constants.POST_PRODUCT_ENQUIRY_IDLE]: postProductEnquiryIdle,
}, initialState);
