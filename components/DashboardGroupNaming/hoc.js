import { withState, withHandlers, compose } from 'recompose';

export default (DashboardGroupNaming) => compose(
  withState('groupName', 'updateGroupName', []),
  withHandlers({
    onVehiclesGroupChange: ({ updateGroupName }) => event => updateGroupName(event.target.value),
  }),
)(DashboardGroupNaming);
