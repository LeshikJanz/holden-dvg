import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  appConfig: state.productsFilterReducer.appConfig,
});

export default (LayoutContainer) => connect(mapStateToProps)(LayoutContainer);
