import { call, put, fork, takeLatest } from 'redux-saga/effects';
import * as actions from 'template/actions/index';
import * as api from 'template/api/index';
import * as constants from 'template/constants/index';

/**
 * Pages
 */
function* postDashboardAuthRequest(req) {
  const { payload } = req;
  try {
    const data = yield call(api.postDashboardAuth.bind(null, payload));
    yield put(actions.postDashboardAuthSuccess({ data }));
  } catch (e) {
    yield put(actions.postDashboardAuthFailure({ message: 'Cant fetch dashboard products' }));
  }
}

export default [
  fork(takeLatest, constants.POST_DASHBOARD_AUTH_REQUEST, postDashboardAuthRequest),
];
