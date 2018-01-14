import { connect } from 'react-redux';
import * as actions from 'template/actions/index';

const mapStateToProps = (state) => ({
  funnelPages: state.dashboardReducer.funnelPages,
  funnelPagesActions: state.dashboardReducer.actions.funnelPages,
});

const mapDispatchToProps = {
  getFunnelPagesRequest: actions.getFunnelPagesRequest,
  getFunnelPagesIdle: actions.getFunnelPagesIdle,
};

export default (ProductsContainer) => connect(mapStateToProps, mapDispatchToProps)(ProductsContainer);
