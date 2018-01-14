import React, { PropTypes } from 'react';
import ButtonComponent from 'template/components/Button/ButtonComponent';
import * as DashboardVehicleGroupStyled from 'template/components/DashboardVehicleGroup/DashboardVehicleGroupStyled';
import map from 'lodash/map';

const DashboardVehicleGroupComponent = ({ vehiclesGroup, onVehiclesGroupRemove }) => (
  <DashboardVehicleGroupStyled.Component>
    <DashboardVehicleGroupStyled.Heading>Vehicles in group so far</DashboardVehicleGroupStyled.Heading>

    <DashboardVehicleGroupStyled.Group>
      {map(vehiclesGroup, product => (
        <DashboardVehicleGroupStyled.GroupItem key={product._id}>
          <ButtonComponent>
            <DashboardVehicleGroupStyled.Vehicle onClick={onVehiclesGroupRemove.bind(null, product)}>
              <DashboardVehicleGroupStyled.VehicleText>
                {product.StockNumber} {product.Make} {product.Model} {product.Badge}
              </DashboardVehicleGroupStyled.VehicleText>

              <DashboardVehicleGroupStyled.VehicleAction>
                <i className="fa fa-close" />
              </DashboardVehicleGroupStyled.VehicleAction>
            </DashboardVehicleGroupStyled.Vehicle>
          </ButtonComponent>
        </DashboardVehicleGroupStyled.GroupItem>
      ))}
    </DashboardVehicleGroupStyled.Group>
  </DashboardVehicleGroupStyled.Component>
);

DashboardVehicleGroupComponent.propTypes = {
  vehiclesGroup: PropTypes.arrayOf(PropTypes.object).isRequired,
  onVehiclesGroupRemove: PropTypes.func.isRequired,
};

export default DashboardVehicleGroupComponent;
