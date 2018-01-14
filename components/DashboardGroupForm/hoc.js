import { withState, withProps, withHandlers, compose } from 'recompose';
import remove from 'lodash/remove';
import map from 'lodash/map';
import findIndex from 'lodash/findIndex';

export default (DashboardGroupsContainer) => compose(
  withState('vehiclesGroup', 'updateVehiclesGroup', []),
  withHandlers({
    onVehiclesGroupAdd: ({ updateVehiclesGroup }) =>
      item => updateVehiclesGroup(vehiclesGroup => vehiclesGroup.concat(item)),
    onVehiclesGroupRemove: ({ updateVehiclesGroup }) =>
      item => updateVehiclesGroup(vehiclesGroup => remove(vehiclesGroup, vehicle => vehicle._id !== item._id)),
  }),

  withProps(props => {
    const modifiedProducts = map(props.dashboardProducts.data, product => ({
      ...product,
      isProductInGroup: findIndex(props.vehiclesGroup, ['_id', product._id]) !== -1,
    }));
    return { ...props, dashboardProducts: { ...props.dashboardProducts, data: modifiedProducts } };
  })
)(DashboardGroupsContainer);
