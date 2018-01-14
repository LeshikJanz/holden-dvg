import React, { PropTypes } from 'react';
import { withRouter } from 'react-router-dom';
import * as DashboardStyled from 'template/containers/DashboardContainer/DashboardStyled';
import hoc from 'template/containers/DashboardContainer/hoc';
import isEmpty from 'lodash/isEmpty';

class DashboardContainer extends React.Component {
  componentWillMount() {
    if (isEmpty(this.props.login.data) || !this.props.login.data.token) {
      this.props.history.push('/dashboard/auth');
    }
  }

  render() {
    return (
      <DashboardStyled.Component>
        <DashboardStyled.Content>
          {this.props.children}
        </DashboardStyled.Content>

        <button onClick={() => this.props.postLogoutRequest()}>Logout</button>
      </DashboardStyled.Component>
    );
  }
}

DashboardContainer.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  login: PropTypes.shape().isRequired,
  children: PropTypes.shape().isRequired,
  postLogoutRequest: PropTypes.func.isRequired,
};

export default withRouter(hoc(DashboardContainer));
