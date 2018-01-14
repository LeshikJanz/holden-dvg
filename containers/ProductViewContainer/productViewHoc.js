import { connect } from 'react-redux';
import * as actions from 'actions/index';
import * as templateActions from 'template/actions/index';

const horizontalScroll = (axis) => window.scrollTo(0, axis);

const mapStateToProps = (state) => ({
  products: state.productsReducer.products,
  postProductEnquiryActions: state.enquiryReducer.actions.postProductEnquiry,
  appConfig: state.productsFilterReducer.appConfig,
});

const mapDispatchToProps = {
  getProductsRequest: actions.getProductsRequest,
  getProductsIdle: actions.getProductsIdle,
  postProductEnquiryRequest: templateActions.postProductEnquiryRequest,
  postProductEnquiryIdle: templateActions.postProductEnquiryIdle,
};

const mergeProps = (stateProps, dispatchProps, ownProps) => Object.assign({
  horizontalScroll,
}, ownProps, stateProps, dispatchProps);

export default (ProductViewContainer) => connect(mapStateToProps, mapDispatchToProps, mergeProps)(ProductViewContainer);
