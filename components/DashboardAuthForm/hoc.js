import { withState, withHandlers, withProps, onlyUpdateForKeys, compose } from 'recompose';

export default (DashboardFunnelForm) => compose(
  withState('username', 'updateUsername', ''),
  withState('password', 'updatePassword', ''),
  withHandlers({
    onUsernameChange: ({ updateUsername }) => event => { updateUsername(event.target.value); },
    onPasswordChange: ({ updatePassword }) => event => { updatePassword(event.target.value); },
  }),
  withProps(props => ({
    ...props,
    form: {
      username: props.username,
      password: props.password,
    }
  })),
  onlyUpdateForKeys(['username', 'password'])
)(DashboardFunnelForm);
