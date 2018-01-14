import { connect } from 'react-redux';
import * as actions from 'template/actions/index';
import { compose } from 'recompose';

const mapStateToProps = (state) => ({
  productGroup: state.dashboardReducer.productGroup,
  dashboardProducts: state.dashboardReducer.dashboardProducts,
  dashboardProductsActions: state.dashboardReducer.actions.dashboardProducts,
  postProductGroupActions: state.dashboardReducer.actions.postProductGroup,
});

const mapDispatchToProps = {
  getDashboardProductsRequest: actions.getDashboardProductsRequest,
  getDashboardProductsIdle: actions.getDashboardProductsIdle,
  getProductGroupRequest: actions.getProductGroupRequest,
  getProductGroupIdle: actions.getProductGroupIdle,
  putProductGroupRequest: actions.putProductGroupRequest,
  putProductGroupIdle: actions.putProductGroupIdle,
};

export default (ProductsContainer) => compose(
  connect(mapStateToProps, mapDispatchToProps),
)(ProductsContainer);
