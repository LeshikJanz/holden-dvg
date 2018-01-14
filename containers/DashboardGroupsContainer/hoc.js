import { connect } from 'react-redux';
import * as actions from 'template/actions/index';

const mapStateToProps = (state) => ({
  productGroups: state.dashboardReducer.productGroups,
  productGroupsActions: state.dashboardReducer.actions.productGroups,
});

const mapDispatchToProps = {
  getProductGroupsRequest: actions.getProductGroupsRequest,
  getProductGroupsIdle: actions.getProductGroupsIdle,
};

export default (ProductsContainer) => connect(mapStateToProps, mapDispatchToProps)(ProductsContainer);
