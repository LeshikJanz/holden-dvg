import { handleActions } from 'redux-actions';
import update from 'immutability-helper';
import * as constants from 'template/constants/index';

const initialState = {
  dashboardProducts: {
    data: [],
  },
  productGroups: {
    data: [],
  },
  productGroup: {
    data: [],
  },
  productCategories: {
    data: [],
  },
  funnelPages: {
    data: [],
  },
  funnelPage: {
    data: [],
  },
  actions: {
    getDashboardProducts: {
      message: null,
      status: null,
      isLoading: false,
      createdAt: null,

      /**
       * Filters/Search related meta data
       */
      meta: {
        options: [],
        search: null,
        limit: 20,
        offset: 0,
      }
    },

    getProductCategories: {
      message: null,
      status: null,
      isLoading: false,
      createdAt: null,

      /**
       * Filters/Search related meta data
       */
      meta: {
        options: [],
        search: null,
        limit: 20,
        offset: 0,
      }
    },

    getProductGroups: {
      message: null,
      status: null,
      isLoading: false,
      createdAt: null,

      /**
       * Filters/Search related meta data
       */
      meta: {
        options: [],
        search: null,
        limit: 20,
        offset: 0,
      }
    },

    getProductGroup: {
      message: null,
      status: null,
      isLoading: false,
      createdAt: null,
    },

    getFunnelPages: {
      message: null,
      status: null,
      isLoading: false,
      createdAt: null,

      /**
       * Filters/Search related meta data
       */
      meta: {
        options: [],
        search: null,
        limit: 20,
        offset: 0,
      }
    },

    getFunnelPage: {
      message: null,
      status: null,
      isLoading: false,
      createdAt: null,
    },

    postFunnelPage: {
      message: null,
      status: null,
      isLoading: false,
      createdAt: null,
    },

    postProductGroup: {
      message: null,
      status: null,
      isLoading: false,
      createdAt: null,
    },
  },
};

/**
 * Get dashboardProducts
 */
const getDashboardProductsRequest = (state, action) => update(state, {
  actions: {
    getDashboardProducts: { $setRequestActionLoading: {
      meta: {
        offset: { $set: action.payload.offset || state.actions.getDashboardProducts.meta.offset },
        limit: { $set: action.payload.limit || state.actions.getDashboardProducts.meta.limit },
      },
    } },
  },
});

const getDashboardProductsSuccess = (state, action) => update(state, {
  dashboardProducts: {
    data: { $set: action.payload.data },
  },
  actions: {
    getDashboardProducts: {
      $setRequestActionSuccess: action.payload,
      meta: {
        offset: { $set: state.actions.getDashboardProducts.meta.offset + action.payload.data.length },
      }
    },
  },
});

const getDashboardProductsFailure = (state, action) => update(state, {
  actions: {
    getDashboardProducts: { $setRequestActionFailure: action.payload },
  },
});

const getDashboardProductsIdle = (state) => update(state, {
  dashboardProducts: {
    data: { $set: initialState.dashboardProducts.data },
  },
  actions: {
    getDashboardProducts: { $setRequestActionIdle: {
      meta: { $set: initialState.actions.getDashboardProducts.meta }
    } },
  },
});

/**
 * Get dashboardProducts
 */
const getProductGroupsRequest = (state, action) => update(state, {
  actions: {
    getProductGroups: { $setRequestActionLoading: {
      meta: {
        offset: { $set: action.payload.offset || state.actions.getProductGroups.meta.offset },
        limit: { $set: action.payload.limit || state.actions.getProductGroups.meta.limit },
      },
    } },
  },
});

const getProductGroupsSuccess = (state, action) => update(state, {
  productGroups: {
    data: { $set: action.payload.data },
  },
  actions: {
    getProductGroups: {
      $setRequestActionSuccess: action.payload,
      meta: {
        offset: { $set: state.actions.getProductGroups.meta.offset + action.payload.data.length },
      }
    },
  },
});

const getProductGroupsFailure = (state, action) => update(state, {
  actions: {
    getProductGroups: { $setRequestActionFailure: action.payload },
  },
});

const getProductGroupsIdle = (state) => update(state, {
  productGroups: {
    data: { $set: initialState.dashboardProducts.data },
  },
  actions: {
    getProductGroups: { $setRequestActionIdle: {
      meta: { $set: initialState.actions.getProductGroups.meta }
    } },
  },
});

/**
 * Get dashboardProducts
 */
const getProductGroupRequest = (state) => update(state, {
  actions: {
    getProductGroup: { $setRequestActionLoading: {} },
  },
});

const getProductGroupSuccess = (state, action) => update(state, {
  productGroup: {
    data: { $set: action.payload.data },
  },
  actions: {
    getProductGroup: {
      $setRequestActionSuccess: action.payload,
    },
  },
});

const getProductGroupFailure = (state, action) => update(state, {
  actions: {
    getProductGroup: { $setRequestActionFailure: action.payload },
  },
});

const getProductGroupIdle = (state) => update(state, {
  productGroup: {
    data: { $set: initialState.dashboardProducts.data },
  },
  actions: {
    getProductGroup: { $setRequestActionIdle: {
      meta: { $set: initialState.actions.getProductGroup.meta }
    } },
  },
});


/**
 * Get dashboardProducts
 */
const postProductGroupRequest = (state) => update(state, {
  actions: {
    postProductGroup: { $setRequestActionLoading: {} },
  },
});

const postProductGroupSuccess = (state, action) => update(state, {
  actions: {
    postProductGroup: {
      $setRequestActionSuccess: action.payload,
    },
  },
});

const postProductGroupFailure = (state, action) => update(state, {
  actions: {
    postProductGroup: { $setRequestActionFailure: action.payload },
  },
});

const postProductGroupIdle = (state) => update(state, {
  actions: {
    postProductGroup: { $setRequestActionIdle: {} },
  },
});

/**
 * Get dashboardProducts
 */
const getProductCategoriesRequest = (state, action) => update(state, {
  actions: {
    getProductCategories: { $setRequestActionLoading: {
      meta: {
        offset: { $set: action.payload.offset || state.actions.getProductCategories.meta.offset },
        limit: { $set: action.payload.limit || state.actions.getProductCategories.meta.limit },
      },
    } },
  },
});

const getProductCategoriesSuccess = (state, action) => update(state, {
  productCategories: {
    data: { $set: action.payload.data },
  },
  actions: {
    getProductCategories: {
      $setRequestActionSuccess: action.payload,
      meta: {
        offset: { $set: state.actions.getProductCategories.meta.offset + action.payload.data.length },
      }
    },
  },
});

const getProductCategoriesFailure = (state, action) => update(state, {
  actions: {
    getProductCategories: { $setRequestActionFailure: action.payload },
  },
});

const getProductCategoriesIdle = (state) => update(state, {
  productCategories: {
    data: { $set: initialState.productCategories.data },
  },
  actions: {
    getProductCategories: { $setRequestActionIdle: {
      meta: { $set: initialState.actions.getProductCategories.meta }
    } },
  },
});


/**
 * Get dashboardProducts
 */
const getFunnelPagesRequest = (state, action) => update(state, {
  actions: {
    getFunnelPages: { $setRequestActionLoading: {
      meta: {
        offset: { $set: action.payload.offset || state.actions.getFunnelPages.meta.offset },
        limit: { $set: action.payload.limit || state.actions.getFunnelPages.meta.limit },
      },
    } },
  },
});

const getFunnelPagesSuccess = (state, action) => update(state, {
  funnelPages: {
    data: { $set: action.payload.data },
  },
  actions: {
    getFunnelPages: {
      $setRequestActionSuccess: action.payload,
      meta: {
        offset: { $set: state.actions.getFunnelPages.meta.offset + action.payload.data.length },
      }
    },
  },
});

const getFunnelPagesFailure = (state, action) => update(state, {
  actions: {
    getFunnelPages: { $setRequestActionFailure: action.payload },
  },
});

const getFunnelPagesIdle = (state) => update(state, {
  funnelPages: {
    data: { $set: initialState.funnelPages.data },
  },
  actions: {
    getFunnelPages: { $setRequestActionIdle: {
      meta: { $set: initialState.actions.getFunnelPages.meta }
    } },
  },
});


/**
 * Get dashboardProducts
 */
const getFunnelPageRequest = (state, action) => update(state, {
  actions: {
    getFunnelPage: { $setRequestActionLoading: {} },
  },
});

const getFunnelPageSuccess = (state, action) => update(state, {
  funnelPage: {
    data: { $set: action.payload.data },
  },
  actions: {
    getFunnelPage: {
      $setRequestActionSuccess: action.payload,
    },
  },
});

const getFunnelPageFailure = (state, action) => update(state, {
  actions: {
    getFunnelPage: { $setRequestActionFailure: action.payload },
  },
});

const getFunnelPageIdle = (state) => update(state, {
  funnelPages: {
    data: { $set: initialState.funnelPages.data },
  },
  actions: {
    getFunnelPage: { $setRequestActionIdle: {} },
  },
});


/**
 * Get dashboardProducts
 */
const postFunnelPageRequest = (state) => update(state, {
  actions: {
    postFunnelPage: { $setRequestActionLoading: {} },
  },
});

const postFunnelPageSuccess = (state, action) => update(state, {
  actions: {
    postFunnelPage: {
      $setRequestActionSuccess: action.payload,
    },
  },
});

const postFunnelPageFailure = (state, action) => update(state, {
  actions: {
    postFunnelPage: { $setRequestActionFailure: action.payload },
  },
});

const postFunnelPageIdle = (state) => update(state, {
  actions: {
    postFunnelPage: { $setRequestActionIdle: {} },
  },
});

export default handleActions({
  [constants.GET_DASHBOARD_PRODUCTS_REQUEST]: getDashboardProductsRequest,
  [constants.GET_DASHBOARD_PRODUCTS_SUCCESS]: getDashboardProductsSuccess,
  [constants.GET_DASHBOARD_PRODUCTS_FAILURE]: getDashboardProductsFailure,
  [constants.GET_DASHBOARD_PRODUCTS_IDLE]: getDashboardProductsIdle,

  [constants.GET_PRODUCT_GROUPS_REQUEST]: getProductGroupsRequest,
  [constants.GET_PRODUCT_GROUPS_SUCCESS]: getProductGroupsSuccess,
  [constants.GET_PRODUCT_GROUPS_FAILURE]: getProductGroupsFailure,
  [constants.GET_PRODUCT_GROUPS_IDLE]: getProductGroupsIdle,

  [constants.GET_PRODUCT_GROUP_REQUEST]: getProductGroupRequest,
  [constants.GET_PRODUCT_GROUP_SUCCESS]: getProductGroupSuccess,
  [constants.GET_PRODUCT_GROUP_FAILURE]: getProductGroupFailure,
  [constants.GET_PRODUCT_GROUP_IDLE]: getProductGroupIdle,

  [constants.POST_PRODUCT_GROUP_REQUEST]: postProductGroupRequest,
  [constants.POST_PRODUCT_GROUP_SUCCESS]: postProductGroupSuccess,
  [constants.POST_PRODUCT_GROUP_FAILURE]: postProductGroupFailure,
  [constants.POST_PRODUCT_GROUP_IDLE]: postProductGroupIdle,

  [constants.GET_PRODUCT_CATEGORIES_REQUEST]: getProductCategoriesRequest,
  [constants.GET_PRODUCT_CATEGORIES_SUCCESS]: getProductCategoriesSuccess,
  [constants.GET_PRODUCT_CATEGORIES_FAILURE]: getProductCategoriesFailure,
  [constants.GET_PRODUCT_CATEGORIES_IDLE]: getProductCategoriesIdle,

  [constants.GET_FUNNEL_PAGES_REQUEST]: getFunnelPagesRequest,
  [constants.GET_FUNNEL_PAGES_SUCCESS]: getFunnelPagesSuccess,
  [constants.GET_FUNNEL_PAGES_FAILURE]: getFunnelPagesFailure,
  [constants.GET_FUNNEL_PAGES_IDLE]: getFunnelPagesIdle,

  [constants.GET_FUNNEL_PAGE_REQUEST]: getFunnelPageRequest,
  [constants.GET_FUNNEL_PAGE_SUCCESS]: getFunnelPageSuccess,
  [constants.GET_FUNNEL_PAGE_FAILURE]: getFunnelPageFailure,
  [constants.GET_FUNNEL_PAGE_IDLE]: getFunnelPageIdle,

  [constants.POST_FUNNEL_PAGE_REQUEST]: postFunnelPageRequest,
  [constants.POST_FUNNEL_PAGE_SUCCESS]: postFunnelPageSuccess,
  [constants.POST_FUNNEL_PAGE_FAILURE]: postFunnelPageFailure,
  [constants.POST_FUNNEL_PAGE_IDLE]: postFunnelPageIdle,
}, initialState);
