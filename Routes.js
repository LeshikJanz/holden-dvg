import React, { PropTypes } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import 'template/assets/global.scss';
import 'template/assets/typography.scss';

import LayoutContainer from 'template/containers/LayoutContainer';
import ProductsContainer from 'template/containers/ProductsContainer';
import ProductViewContainer from 'template/containers/ProductViewContainer';
import NotFoundContainer from 'containers/NotFoundContainer';
import DashboardCategoriesContainer from 'template/containers/DashboardCategoriesContainer';
import DashboardCategoriseContainer from 'template/containers/DashboardCategoriseContainer';
import DashboardFunnelsContainer from 'template/containers/DashboardFunnelsContainer';
import DashboardCreateGroupContainer from 'template/containers/DashboardCreateGroupContainer';
import DashboardEditGroupContainer from 'template/containers/DashboardEditGroupContainer';
import DashboardCreateFunnelContainer from 'template/containers/DashboardCreateFunnelContainer';
import DashboardGroupsContainer from 'template/containers/DashboardGroupsContainer';
import DashboardAuthContainer from 'template/containers/DashboardAuthContainer';
import DashboardEnquiriesContainer from 'template/containers/DashboardEnquiriesContainer';
import DashboardContainer from 'template/containers/DashboardContainer';

function withProps(Component, props) {
  return function (matchProps) {
    return <Component {...props} {...matchProps} />;
  };
}

/**
 * Keep in mind that history is passed down as prop from LoadingComponent to RouterComponent
 */
const Routes = ({ history }) => (
  <LayoutContainer history={history}>
    <Switch>
      <Route exact path="/" component={ProductsContainer} />
      <Route exact path="/dvg-3-and-half-day-sale" component={withProps(ProductsContainer, { promotionPage: true, defaultProductsCondition: ['demo', 'used'] })} />
      <Route exact path="/products" component={ProductsContainer} />
      <Route exact path="/products/:id" component={ProductViewContainer} />

      <Route exact path="/dashboard/auth" component={DashboardAuthContainer} />
      <DashboardContainer>
        <Route exact path="/dashboard/categories" component={DashboardCategoriesContainer} />
        <Route exact path="/dashboard/categorise" component={DashboardCategoriseContainer} />
        <Route exact path="/dashboard/funnels/create" component={DashboardCreateFunnelContainer} />
        <Route exact path="/dashboard/funnels" component={DashboardFunnelsContainer} />

        <Route exact path="/dashboard/groups/create" component={DashboardCreateGroupContainer} />
        <Route exact path="/dashboard/groups" component={DashboardGroupsContainer} />
        <Route exact path="/dashboard/groups/:id" component={DashboardEditGroupContainer} />

        <Route exact path="/dashboard/enquiries" component={DashboardEnquiriesContainer} />
      </DashboardContainer>

      <Route exact path="/404" component={NotFoundContainer} />
      <Redirect from="*" to="/404" />
    </Switch>
  </LayoutContainer>
);

Routes.propTypes = {
  history: PropTypes.object.isRequired,
};

export default Routes;
