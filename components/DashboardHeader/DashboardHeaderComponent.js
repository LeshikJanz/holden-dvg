import React, { PropTypes } from 'react';
import ButtonComponent from 'template/components/Button/ButtonComponent';
import * as DashboardHeaderStyled from 'template/components/DashboardHeader/DashboardHeaderStyled';
import { Link } from 'react-router-dom';
import isEmpty from 'lodash/isEmpty';

const DashboardHeaderComponent = ({ children, returnBack, returnCustom }) => (
  <DashboardHeaderStyled.Component>
    <DashboardHeaderStyled.Content>
      <DashboardHeaderStyled.Heading>{children}</DashboardHeaderStyled.Heading>
    </DashboardHeaderStyled.Content>

    <DashboardHeaderStyled.Action>
      {!isEmpty(returnCustom) &&
        <Link to={returnCustom.path}>
          <ButtonComponent size="small" color="white">{returnCustom.title}</ButtonComponent>
        </Link>
      }

      {returnBack &&
        <Link to={returnBack}>
          <ButtonComponent size="small" color="white">Return Back</ButtonComponent>
        </Link>
      }
    </DashboardHeaderStyled.Action>
  </DashboardHeaderStyled.Component>
);

DashboardHeaderComponent.propTypes = {
  children: PropTypes.shape().isRequired,
  returnBack: PropTypes.string.isRequired,
  returnCustom: PropTypes.shape({
    path: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default DashboardHeaderComponent;
