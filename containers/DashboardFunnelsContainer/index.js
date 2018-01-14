import React, { PropTypes } from 'react';
import * as DashboardFunnelsStyled from 'template/containers/DashboardFunnelsContainer/DashboardFunnelsStyled';
import hoc from 'template/containers/DashboardFunnelsContainer/hoc';
import DashboardHeaderComponent from 'template/components/DashboardHeader/DashboardHeaderComponent';
import DashboardFunnelsComponent from 'template/components/DashboardFunnels/DashboardFunnelsComponent';
import { Link } from 'react-router-dom';
import ButtonComponent from 'template/components/Button/ButtonComponent';

class DashboardFunnelsContainer extends React.Component {
  componentWillMount() {
  }

  render() {
    return (
      <DashboardFunnelsStyled.Component>
        <DashboardFunnelsStyled.Header>
          <DashboardHeaderComponent returnBack="/dashboard/categories">
            Create Marketing Funnel Page
          </DashboardHeaderComponent>
        </DashboardFunnelsStyled.Header>
        <DashboardFunnelsStyled.Button>
          <Link to="/dashboard/funnels/create"><ButtonComponent color="green">Add New Page</ButtonComponent></Link>
        </DashboardFunnelsStyled.Button>
        <DashboardFunnelsStyled.Funnels>
          <DashboardFunnelsComponent
            funnelPages={this.props.funnelPages}
            getFunnelPagesRequest={this.props.getFunnelPagesRequest}
            getFunnelPagesIdle={this.props.getFunnelPagesIdle}
          />
        </DashboardFunnelsStyled.Funnels>
      </DashboardFunnelsStyled.Component>
    );
  }
}

DashboardFunnelsContainer.propTypes = {
  getFunnelPagesRequest: PropTypes.func.isRequired,
  getFunnelPagesIdle: PropTypes.func.isRequired,
  funnelPages: PropTypes.shape().isRequired,
};

export default hoc(DashboardFunnelsContainer);
