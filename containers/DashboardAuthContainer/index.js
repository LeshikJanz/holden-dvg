import React, { PropTypes } from 'react';
import { withRouter } from 'react-router-dom';
import * as DashboardAuthStyled from 'template/containers/DashboardAuthContainer/DashboardAuthStyled';
import hoc from 'template/containers/DashboardAuthContainer/hoc';
import DashboardAuthFormComponent from 'template/components/DashboardAuthForm/DashboardAuthFormComponent';
import DashboardHeaderComponent from 'template/components/DashboardHeader/DashboardHeaderComponent';
import NotificationComponent from 'template/components/Notification/NotificationComponent';

class DashboardAuthContainer extends React.Component {
  componentWillReceiveProps(nextProps) {
    if (nextProps.loginActions.status === 'success' && nextProps.login.data.token) {
      setTimeout(() => { this.props.history.push('/dashboard/categories'); }, 500);
    }
  }

  render() {
    return (
      <DashboardAuthStyled.Component>
        <DashboardAuthStyled.Header>
          <DashboardHeaderComponent>
            Admin Dashboard
          </DashboardHeaderComponent>
        </DashboardAuthStyled.Header>
        {this.props.loginActions.status === 'success' &&
          <DashboardAuthStyled.Notification>
            <NotificationComponent>
              Successfully authorized
            </NotificationComponent>
          </DashboardAuthStyled.Notification>
        }
        {this.props.loginActions.status === 'failure' &&
          <DashboardAuthStyled.Notification>
            <NotificationComponent color="red">
              Authorization failed
            </NotificationComponent>
          </DashboardAuthStyled.Notification>
        }
        <DashboardAuthStyled.Content>
          <DashboardAuthStyled.Form>
            <DashboardAuthFormComponent
              onSubmit={this.props.postLoginRequest}
            />
          </DashboardAuthStyled.Form>

          <DashboardAuthStyled.Description />
        </DashboardAuthStyled.Content>
      </DashboardAuthStyled.Component>
    );
  }
}

DashboardAuthContainer.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  postLoginRequest: PropTypes.func.isRequired,
  loginActions: PropTypes.shape.isRequired,
};

export default withRouter(hoc(DashboardAuthContainer));
