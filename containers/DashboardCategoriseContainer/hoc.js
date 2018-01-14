import { connect } from 'react-redux';
import * as actions from 'template/actions/index';
import { compose, withState, withHandlers } from 'recompose';

const mapStateToProps = (state) => ({
  dashboardProducts: state.dashboardReducer.dashboardProducts,
  dashboardProductsActions: state.dashboardReducer.actions.dashboardProducts,
  productCategories: state.dashboardReducer.productCategories,
  productCategoriesActions: state.dashboardReducer.actions.productCategories,
});

const mapDispatchToProps = {
  getDashboardProductsRequest: actions.getDashboardProductsRequest,
  getDashboardProductsIdle: actions.getDashboardProductsIdle,
  getProductCategoriesRequest: actions.getProductCategoriesRequest,
  getProductCategoriesIdle: actions.getProductCategoriesIdle,
  putProductCategoryRequest: actions.putProductCategoryRequest,
  putProductCategoryIdle: actions.putProductCategoryIdle,
};

export default (ProductsContainer) => compose(
  withState('preCategoriseVisible', 'updatepreCategoriseVisible', false),
  withHandlers({
    togglePreCategorise: ({ updatepreCategoriseVisible }) => () => updatepreCategoriseVisible(item => !item),
  }),
  connect(mapStateToProps, mapDispatchToProps),
)(ProductsContainer);
