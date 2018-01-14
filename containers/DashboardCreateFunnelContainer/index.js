import React, { PropTypes } from 'react';
import * as DashboardCreateFunnelStyled from 'template/containers/DashboardCreateFunnelContainer/DashboardCreateFunnelStyled';
import hoc from 'template/containers/DashboardCreateFunnelContainer/hoc';
import DashboardHeaderComponent from 'template/components/DashboardHeader/DashboardHeaderComponent';
import DashboardFunnelFormComponent from 'template/components/DashboardFunnelForm/DashboardFunnelFormComponent';
import ButtonComponent from 'template/components/Button/ButtonComponent';
import NotificationComponent from 'template/components/Notification/NotificationComponent';
import { Link } from 'react-router-dom';

class DashboardCreateFunnelContainer extends React.Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
    this.onFormChange = this.onFormChange.bind(this);
    this.state = { form: {} };
  }

  componentWillUnmount() {
    this.props.postFunnelPageIdle();
  }

  onFormChange(form) {
    this.setState({ form });
  }

  onSubmit() {
    this.props.postFunnelPageRequest(this.state.form);
  }

  render() {
    return (
      <DashboardCreateFunnelStyled.Component>
        <DashboardCreateFunnelStyled.Header>
          <DashboardHeaderComponent
            returnCustom={{
              path: '/dashboard/funnels',
              title: 'Return to Funnel Pages',
            }}
          >
            Create New Create Marketing Funnel Page
          </DashboardHeaderComponent>
        </DashboardCreateFunnelStyled.Header>
        {this.props.postFunnelPageActions.status === 'success' &&
          <DashboardCreateFunnelStyled.Notification>
            <NotificationComponent>
              New funnel page has been successfully created
            </NotificationComponent>
          </DashboardCreateFunnelStyled.Notification>
        }
        <DashboardCreateFunnelStyled.Funnels>
          <DashboardFunnelFormComponent
            onChange={this.onFormChange}
          />
        </DashboardCreateFunnelStyled.Funnels>
        <DashboardCreateFunnelStyled.Actions>
          <ButtonComponent color="green" onClick={this.onSubmit}>Publish</ButtonComponent>
          <Link to="/dashboard/categories">
            <ButtonComponent color="white">Cancel</ButtonComponent>
          </Link>
        </DashboardCreateFunnelStyled.Actions>
      </DashboardCreateFunnelStyled.Component>
    );
  }
}

DashboardCreateFunnelContainer.propTypes = {
  postFunnelPageRequest: PropTypes.func.isRequired,
  postFunnelPageIdle: PropTypes.func.isRequired,
  postFunnelPageActions: PropTypes.shape().isRequired,
};

export default hoc(DashboardCreateFunnelContainer);
