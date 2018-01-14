import React, { PropTypes } from 'react';
import hoc from 'template/containers/DashboardEditGroupContainer/hoc';
import * as DashboardEditGroupStyled from 'template/containers/DashboardEditGroupContainer/DashboardEditGroupStyled';
import DashboardHeaderComponent from 'template/components/DashboardHeader/DashboardHeaderComponent';
import DashboardGroupFormComponent from 'template/components/DashboardGroupForm/DashboardGroupFormComponent';
import DashboardVehicleGroupComponent from 'template/components/DashboardVehicleGroup/DashboardVehicleGroupComponent';
import DashboardGroupNamingComponent from 'template/components/DashboardGroupNaming/DashboardGroupNamingComponent';
import ButtonComponent from 'template/components/Button/ButtonComponent';
import NotificationComponent from 'template/components/Notification/NotificationComponent';
import { Link } from 'react-router-dom';
import map from 'lodash/map';
import eq from 'lodash/eq';

class DashboardEditGroupContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { vehiclesGroup: [], name: '', apicall: '', onVehiclesGroupRemove: () => {} };
    this.onVehiclesGroupChange = this.onVehiclesGroupChange.bind(this);
    this.onGroupNameChange = this.onGroupNameChange.bind(this);
    this.onApiCallChange = this.onApiCallChange.bind(this);
    this.onVehiclesGroupMount = this.onVehiclesGroupMount.bind(this);
    this.postProductGroupRequest = this.postProductGroupRequest.bind(this);
  }

  componentWillMount() {
    this.props.getProductGroupRequest({ id: this.props.match.params.id });
  }

  componentWillUnmount() {
    this.props.getProductGroupIdle();
  }

  componentWillReceiveProps(nextProps) {
    if (!eq(nextProps.productGroup, this.props.productGroup)) {
      this.setState({
        name: nextProps.productGroup.data.name,
        apicall: nextProps.productGroup.data.endpoint,
        vehiclesGroup: nextProps.productGroup.data.products,
      });
    }
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
      <DashboardEditGroupStyled.Component>
        <DashboardEditGroupStyled.Header>
          <DashboardHeaderComponent
            returnCustom={{
              path: '/dashboard/groups',
              title: 'Return to Groups',
            }}
          >
            Edit Group of Vehicles
          </DashboardHeaderComponent>
        </DashboardEditGroupStyled.Header>
        {this.props.postProductGroupActions.status === 'success' &&
          <DashboardEditGroupStyled.Notification>
            <NotificationComponent>
              Product group has been successfully edited
            </NotificationComponent>
          </DashboardEditGroupStyled.Notification>
        }
        <DashboardEditGroupStyled.Naming>
          <DashboardGroupNamingComponent
            form={this.state}
            onGroupNameChange={this.onGroupNameChange}
            onApiCallChange={this.onApiCallChange}
          />
        </DashboardEditGroupStyled.Naming>
        <DashboardEditGroupStyled.Groups>
          <DashboardGroupFormComponent
            getDashboardProductsRequest={this.props.getDashboardProductsRequest}
            getDashboardProductsIdle={this.props.getDashboardProductsIdle}
            dashboardProducts={this.props.dashboardProducts}
            onVehiclesGroupMount={this.onVehiclesGroupMount}
            onVehiclesGroupChange={this.onVehiclesGroupChange}
          />
        </DashboardEditGroupStyled.Groups>
        <DashboardEditGroupStyled.VehicleGroup>
          <DashboardVehicleGroupComponent
            vehiclesGroup={this.state.vehiclesGroup}
            onVehiclesGroupRemove={this.state.onVehiclesGroupRemove}
          />
        </DashboardEditGroupStyled.VehicleGroup>
        <DashboardEditGroupStyled.Actions>
          <ButtonComponent color="green" onClick={this.postProductGroupRequest}>Save new Group</ButtonComponent>
          <Link to="/dashboard/categories">
            <ButtonComponent color="white">Cancel</ButtonComponent>
          </Link>
        </DashboardEditGroupStyled.Actions>
      </DashboardEditGroupStyled.Component>
    );
  }
}

DashboardEditGroupContainer.propTypes = {
  getDashboardProductsRequest: PropTypes.func.isRequired,
  getDashboardProductsIdle: PropTypes.func.isRequired,
  dashboardProducts: PropTypes.shape().isRequired,
  getProductGroupRequest: PropTypes.func.isRequired,
  getProductGroupIdle: PropTypes.func.isRequired,
  putProductGroupRequest: PropTypes.func.isRequired,
  putProductGroupIdle: PropTypes.func.isRequired,
  postProductGroupActions: PropTypes.shape().isRequired,
};

export default hoc(DashboardEditGroupContainer);
