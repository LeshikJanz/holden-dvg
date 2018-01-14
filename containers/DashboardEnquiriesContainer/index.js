import React from 'react';
import * as DashboardEnquiriesStyled from 'template/containers/DashboardEnquiriesContainer/DashboardEnquiriesStyled';
import DashboardHeaderComponent from 'template/components/DashboardHeader/DashboardHeaderComponent';
import DashboardLeadsComponent from 'template/components/DashboardLeads/DashboardLeadsComponent';
import hoc from 'template/containers/DashboardEnquiriesContainer/hoc';

const DashboardEnquiriesContainer = ({ getProductEnquiriesRequest, getProductEnquiriesIdle, enquiries, enquiriesActions }) =>
  <DashboardEnquiriesStyled.Component>
    <DashboardEnquiriesStyled.Header>
      <DashboardHeaderComponent>
        Lead Log
      </DashboardHeaderComponent>
    </DashboardEnquiriesStyled.Header>

    <DashboardEnquiriesStyled.Enquiries>
      <DashboardLeadsComponent
        getProductEnquiriesRequest={getProductEnquiriesRequest}
        getProductEnquiriesIdle={getProductEnquiriesIdle}
        enquiries={enquiries}
        enquiriesActions={enquiriesActions}
      />
    </DashboardEnquiriesStyled.Enquiries>
  </DashboardEnquiriesStyled.Component>;

export default hoc(DashboardEnquiriesContainer);
