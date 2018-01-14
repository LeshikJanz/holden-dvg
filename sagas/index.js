import dashboardSaga from 'template/sagas/dashboardSaga';
import dashboardAuthSaga from 'template/sagas/dashboardAuthSaga';

export default []
  .concat(dashboardAuthSaga)
  .concat(dashboardSaga);
