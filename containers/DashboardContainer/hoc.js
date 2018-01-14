import { connect } from 'react-redux';
import * as actions from 'actions/index';

const mapStateToProps = (state) => ({
  login: state.loginReducer.login,
  loginActions: state.loginReducer.actions.postLogin,
});

const mapDispatchToProps = {
  postLogoutRequest: actions.postLogoutRequest,
};

export default (ProductsContainer) => connect(mapStateToProps, mapDispatchToProps)(ProductsContainer);
