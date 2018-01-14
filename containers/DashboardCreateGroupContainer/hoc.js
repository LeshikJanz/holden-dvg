import { connect } from 'react-redux';
import * as actions from 'template/actions/index';
import { compose } from 'recompose';

const mapStateToProps = (state) => ({
  dashboardProducts: state.dashboardReducer.dashboardProducts,
  dashboardProductsActions: state.dashboardReducer.actions.dashboardProducts,
  postProductGroupActions: state.dashboardReducer.actions.postProductGroup,
});

const mapDispatchToProps = {
  getDashboardProductsRequest: actions.getDashboardProductsRequest,
  getDashboardProductsIdle: actions.getDashboardProductsIdle,
  postProductGroupRequest: actions.postProductGroupRequest,
  postProductGroupIdle: actions.postProductGroupIdle,
};

export default (ProductsContainer) => compose(
  connect(mapStateToProps, mapDispatchToProps),
)(ProductsContainer);
