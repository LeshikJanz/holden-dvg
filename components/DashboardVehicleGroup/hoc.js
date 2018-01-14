import { withState, withHandlers, compose } from 'recompose';
import remove from 'lodash/remove';

export default (ProductsContainer) => compose(
  withState('vehiclesGroup', 'updateVehiclesGroup', []),
  withHandlers({
    onVehiclesGroupAdd: ({ updateVehiclesGroup, vehiclesGroup }) =>
      item => updateVehiclesGroup(vehiclesGroup.push(item)),
    onVehiclesGroupRemove: ({ updateVehiclesGroup, vehiclesGroup }) =>
      item => updateVehiclesGroup(remove(vehiclesGroup, vehicle => vehicle === item)),
  }),
)(ProductsContainer);
