import React, { PropTypes } from 'react';
import * as DashboardGroupsStyled from 'template/containers/DashboardGroupsContainer/DashboardGroupsStyled';
import hoc from 'template/containers/DashboardGroupsContainer/hoc';
import DashboardGroupsComponent from 'template/components/DashboardGroups/DashboardGroupsComponent';
import DashboardHeaderComponent from 'template/components/DashboardHeader/DashboardHeaderComponent';
import { Link } from 'react-router-dom';
import ButtonComponent from 'template/components/Button/ButtonComponent';

class DashboardGroupsContainer extends React.Component {
  componentWillMount() {
  }

  render() {
    return (
      <DashboardGroupsStyled.Component>
        <DashboardGroupsStyled.Header>
          <DashboardHeaderComponent returnBack="/dashboard/categories">
            Group of Vehicles
          </DashboardHeaderComponent>
        </DashboardGroupsStyled.Header>
        <DashboardGroupsStyled.Button>
          <Link to="/dashboard/groups/create"><ButtonComponent color="green">Add New Group</ButtonComponent></Link>
        </DashboardGroupsStyled.Button>
        <DashboardGroupsStyled.Categories>
          <DashboardGroupsComponent
            onProductGroupDelete={() => {}}
            getProductGroupsRequest={this.props.getProductGroupsRequest}
            getProductGroupsIdle={this.props.getProductGroupsIdle}
            productGroups={this.props.productGroups}
          />
        </DashboardGroupsStyled.Categories>
      </DashboardGroupsStyled.Component>
    );
  }
}

DashboardGroupsContainer.propTypes = {
  getProductGroupsRequest: PropTypes.func.isRequired,
  getProductGroupsIdle: PropTypes.func.isRequired,
  productGroups: PropTypes.shape().isRequired,
};

export default hoc(DashboardGroupsContainer);
