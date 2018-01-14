import { connect } from 'react-redux';
import * as actions from 'template/actions/index';

const mapStateToProps = (state) => ({
  enquiries: state.enquiryReducer.enquiries,
  enquiriesActions: state.enquiryReducer.actions.getProductEnquiries,
});

const mapDispatchToProps = {
  getProductEnquiriesRequest: actions.getProductEnquiriesRequest,
  getProductEnquiriesIdle: actions.getProductEnquiriesIdle,
};

export default (DashboardEnquiriesContainer) => connect(mapStateToProps, mapDispatchToProps)(DashboardEnquiriesContainer);
