import { withState, withHandlers, compose } from 'recompose';

export default (DashboardGroupsContainer) => compose(
  withState('selectedColors', 'updateColor', ['All']),
  withHandlers({
    onColorToggle: ({ selectedColors, updateColor }) =>
      item => {
        if (selectedColors.includes(item)) {
          updateColor(() => ['All']);
        } else {
          updateColor(() => [item]);
        }
      },
  }),
)(DashboardGroupsContainer);
