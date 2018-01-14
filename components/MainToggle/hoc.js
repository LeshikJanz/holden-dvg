import { withState, withHandlers, compose } from 'recompose';

export default (MainToggle) => compose(
  withState('isVisible', 'updateIsVisible', ({ isVisible }) => isVisible),
  withHandlers({
    onVisibilityToggle: ({ isVisible, updateIsVisible }) => () => updateIsVisible(!isVisible),
  }),
)(MainToggle);
