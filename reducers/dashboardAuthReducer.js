import { handleActions } from 'redux-actions';
import update from 'immutability-helper';
import * as constants from 'template/constants/index';

const initialState = {
  dashboardAuth: {
    data: [],
  },
  actions: {
    postDashboardAuth: {
      message: null,
      status: null,
      isLoading: false,
      createdAt: null,
    },
  },
};

/**
 * Get dashboardAuth
 */
const postDashboardAuthRequest = (state) => update(state, {
  actions: {
    postDashboardAuth: { $setRequestActionLoading: {} },
  },
});

const postDashboardAuthSuccess = (state, action) => update(state, {
  dashboardAuth: {
    data: { $set: action.payload.data },
  },
  actions: {
    postDashboardAuth: { $setRequestActionSuccess: action.payload },
  },
});

const postDashboardAuthFailure = (state, action) => update(state, {
  actions: {
    postDashboardAuth: { $setRequestActionFailure: action.payload },
  },
});

const postDashboardAuthIdle = (state) => update(state, {
  dashboardAuth: {
    data: { $set: initialState.dashboardAuth.data },
  },
  actions: {
    postDashboardAuth: { $setRequestActionIdle: {} },
  },
});

export default handleActions({
  [constants.POST_DASHBOARD_AUTH_REQUEST]: postDashboardAuthRequest,
  [constants.POST_DASHBOARD_AUTH_SUCCESS]: postDashboardAuthSuccess,
  [constants.POST_DASHBOARD_AUTH_FAILURE]: postDashboardAuthFailure,
  [constants.POST_DASHBOARD_AUTH_IDLE]: postDashboardAuthIdle,
}, initialState);
