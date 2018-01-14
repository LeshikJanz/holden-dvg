import { connect } from 'react-redux';
import * as actions from 'template/actions/index';
import { compose } from 'recompose';

const mapStateToProps = (state) => ({
  postFunnelPageActions: state.dashboardReducer.actions.postFunnelPage,
});

const mapDispatchToProps = {
  postFunnelPageRequest: actions.postFunnelPageRequest,
  postFunnelPageIdle: actions.postFunnelPageIdle,
};

export default (ProductsContainer) => compose(
  connect(mapStateToProps, mapDispatchToProps),
)(ProductsContainer);
