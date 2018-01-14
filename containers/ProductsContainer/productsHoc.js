import { connect } from 'react-redux';
import * as actions from 'template/actions/index';
import { defaultScroll, isMobile } from 'template/utils/index';

const horizontalScroll = (axis) => setTimeout(defaultScroll.bind(null, axis), 0);
const getOffsetTop = e => (e ? (e.offsetTop + getOffsetTop(e.offsetParent)) : 0);
const calcProductsOffset = (element) => {
  if (!element) {
    return 0;
  }
  return element.offsetHeight + getOffsetTop(element);
};

const mapStateToProps = (state) => ({
  productsFilter: state.productsFilterReducer.productsFilter,
  productsFilterQuery: state.productsFilterReducer.productsFilterQuery,
  productsFilterTagPosition: state.productsFilterReducer.productsFilterTagPosition,
  productsSearch: state.productsFilterReducer.productsSearch,
  productsStartat: state.productsFilterReducer.productsStartat,
  productsCondition: state.productsFilterReducer.productsCondition,
  productsLocation: state.productsFilterReducer.productsLocation,
  productsPricing: state.productsFilterReducer.productsPricing,
  productsCategory: state.productsFilterReducer.productsCategory,
  productsColor: state.productsFilterReducer.productsColor,
  productsViewScrollTop: state.productsUiReducer.productsViewScrollTop,
  allCategories: state.productsFilterReducer.allCategories,
  funnelPage: state.dashboardReducer.funnelPage,
  funnelPageActions: state.dashboardReducer.actions.funnelPage,

  appConfig: state.productsFilterReducer.appConfig,
});

const mapDispatchToProps = {
  toggleProductFilter: actions.toggleProductFilter,
  updateProductSearch: actions.updateProductSearch,
  updateProductStartat: actions.updateProductStartat,
  updateProductLocation: actions.updateProductLocation,
  updateProductCondition: actions.updateProductCondition,
  updateProductPricing: actions.updateProductPricing,
  updateProductCategory: actions.updateProductCategory,
  updateProductColor: actions.updateProductColor,
  updateProductsViewScrollTop: actions.updateProductsViewScrollTop,
  getFunnelPageRequest: actions.getFunnelPageRequest,
  getFunnelPageIdle: actions.getFunnelPageIdle,
  idleProductSearch: actions.idleProductSearch,
  submitProductSearch: actions.submitProductSearch,
};

const mergeProps = (stateProps, dispatchProps, ownProps) => Object.assign({
  horizontalScroll,
  isMobile,
  calcProductsOffset,
}, ownProps, stateProps, dispatchProps);


export default (ProductsContainer) => connect(mapStateToProps, mapDispatchToProps, mergeProps)(ProductsContainer);
