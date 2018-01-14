import { withState, withHandlers, withProps, compose } from 'recompose';

export default (MainToggle) => compose(
  withState('isVisible', 'updateIsVisible', false),
  withHandlers({
    onVisibilityToggle: ({ isVisible, updateIsVisible }) => () => updateIsVisible(!isVisible),
  }),
  withProps(props => ({
    ...props,
    onClick: (item) => { props.onChange(item); props.onVisibilityToggle(); },
  })),
)(MainToggle);
