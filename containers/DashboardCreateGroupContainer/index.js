import React, { PropTypes } from 'react';
import hoc from 'template/containers/DashboardCreateGroupContainer/hoc';
import * as DashboardCreateGroupStyled from 'template/containers/DashboardCreateGroupContainer/DashboardCreateGroupStyled';
import DashboardHeaderComponent from 'template/components/DashboardHeader/DashboardHeaderComponent';
import DashboardGroupFormComponent from 'template/components/DashboardGroupForm/DashboardGroupFormComponent';
import DashboardVehicleGroupComponent from 'template/components/DashboardVehicleGroup/DashboardVehicleGroupComponent';
import DashboardGroupNamingComponent from 'template/components/DashboardGroupNaming/DashboardGroupNamingComponent';
import ButtonComponent from 'template/components/Button/ButtonComponent';
import NotificationComponent from 'template/components/Notification/NotificationComponent';
import { Link } from 'react-router-dom';
import map from 'lodash/map';

class DashboardCreateGroupContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { vehiclesGroup: [], name: '', apicall: '', onVehiclesGroupRemove: () => {} };
    this.onVehiclesGroupChange = this.onVehiclesGroupChange.bind(this);
    this.onGroupNameChange = this.onGroupNameChange.bind(this);
    this.onApiCallChange = this.onApiCallChange.bind(this);
    this.onVehiclesGroupMount = this.onVehiclesGroupMount.bind(this);
    this.postProductGroupRequest = this.postProductGroupRequest.bind(this);
  }

  componentWillUnmount() {
    this.props.postProductGroupIdle();
  }

  onVehiclesGroupChange(vehiclesGroup) {
    this.setState({ vehiclesGroup });
  }

  onVehiclesGroupMount({ onVehiclesGroupRemove }) {
    this.setState({ onVehiclesGroupRemove });
  }

  onGroupNameChange(name) {
    this.setState({ name });
  }

  onApiCallChange(apicall) {
    this.setState({ apicall });
  }

  postProductGroupRequest() {
    this.props.postProductGroupRequest({
      name: this.state.name,
      endpoint: this.state.apicall,
      products: map(this.state.vehiclesGroup, item => item.StockNumber),
    });
  }

  render() {
    return (
      <DashboardCreateGroupStyled.Component>
        <DashboardCreateGroupStyled.Header>
          <DashboardHeaderComponent
            returnCustom={{
              path: '/dashboard/groups',
              title: 'Return to Groups',
            }}
          >
            Create New Group of Vehicles
          </DashboardHeaderComponent>
        </DashboardCreateGroupStyled.Header>
        {this.props.postProductGroupActions.status === 'success' &&
          <DashboardCreateGroupStyled.Notification>
            <NotificationComponent>
              New product group has been successfully created
            </NotificationComponent>
          </DashboardCreateGroupStyled.Notification>
        }
        <DashboardCreateGroupStyled.Naming>
          <DashboardGroupNamingComponent
            onGroupNameChange={this.onGroupNameChange}
            onApiCallChange={this.onApiCallChange}
          />
        </DashboardCreateGroupStyled.Naming>
        <DashboardCreateGroupStyled.Groups>
          <DashboardGroupFormComponent
            getDashboardProductsRequest={this.props.getDashboardProductsRequest}
            getDashboardProductsIdle={this.props.getDashboardProductsIdle}
            dashboardProducts={this.props.dashboardProducts}
            onVehiclesGroupMount={this.onVehiclesGroupMount}
            onVehiclesGroupChange={this.onVehiclesGroupChange}
          />
        </DashboardCreateGroupStyled.Groups>
        <DashboardCreateGroupStyled.VehicleGroup>
          <DashboardVehicleGroupComponent
            vehiclesGroup={this.state.vehiclesGroup}
            onVehiclesGroupRemove={this.state.onVehiclesGroupRemove}
          />
        </DashboardCreateGroupStyled.VehicleGroup>
        <DashboardCreateGroupStyled.Actions>
          <ButtonComponent color="green" onClick={this.postProductGroupRequest}>Save new Group</ButtonComponent>
          <Link to="/dashboard/categories">
            <ButtonComponent color="white">Cancel</ButtonComponent>
          </Link>
        </DashboardCreateGroupStyled.Actions>
      </DashboardCreateGroupStyled.Component>
    );
  }
}

DashboardCreateGroupContainer.propTypes = {
  getDashboardProductsRequest: PropTypes.func.isRequired,
  getDashboardProductsIdle: PropTypes.func.isRequired,
  dashboardProducts: PropTypes.shape().isRequired,
  postProductGroupRequest: PropTypes.func.isRequired,
  postProductGroupIdle: PropTypes.func.isRequired,
  postProductGroupActions: PropTypes.shape().isRequired,
};

export default hoc(DashboardCreateGroupContainer);
