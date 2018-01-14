import React, { PropTypes } from 'react';
import * as DashboardEditFunnelStyled from 'template/containers/DashboardEditFunnelContainer/DashboardEditFunnelStyled';
import hoc from 'template/containers/DashboardEditFunnelContainer/hoc';
import DashboardHeaderComponent from 'template/components/DashboardHeader/DashboardHeaderComponent';
import DashboardFunnelFormComponent from 'template/components/DashboardFunnelForm/DashboardFunnelFormComponent';
import ButtonComponent from 'template/components/Button/ButtonComponent';
import NotificationComponent from 'template/components/Notification/NotificationComponent';
import { Link } from 'react-router-dom';

class DashboardEditFunnelContainer extends React.Component {
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
      <DashboardEditFunnelStyled.Component>
        <DashboardEditFunnelStyled.Header>
          <DashboardHeaderComponent
            returnCustom={{
              path: '/dashboard/funnels',
              title: 'Return to Funnel Pages',
            }}
          >
            Edit Marketing Funnel Page
          </DashboardHeaderComponent>
        </DashboardEditFunnelStyled.Header>
        {this.props.postFunnelPageActions.status === 'success' &&
          <DashboardEditFunnelStyled.Notification>
            <NotificationComponent>
              New funnel page has been successfully created
            </NotificationComponent>
          </DashboardEditFunnelStyled.Notification>
        }
        <DashboardEditFunnelStyled.Funnels>
          <DashboardFunnelFormComponent
            onChange={this.onFormChange}
          />
        </DashboardEditFunnelStyled.Funnels>
        <DashboardEditFunnelStyled.Actions>
          <ButtonComponent color="green" onClick={this.onSubmit}>Publish</ButtonComponent>
          <Link to="/dashboard/categories">
            <ButtonComponent color="white">Cancel</ButtonComponent>
          </Link>
        </DashboardEditFunnelStyled.Actions>
      </DashboardEditFunnelStyled.Component>
    );
  }
}

DashboardEditFunnelContainer.propTypes = {
  postFunnelPageRequest: PropTypes.func.isRequired,
  postFunnelPageIdle: PropTypes.func.isRequired,
  postFunnelPageActions: PropTypes.shape().isRequired,
};

export default hoc(DashboardEditFunnelContainer);
