import React, { PropTypes } from 'react';
import * as DashboardPrecategoriseStyled from 'template/components/DashboardPrecategorise/DashboardPrecategoriseStyled';

const DashboardPrecategoriseComponent = ({ togglePreCategorise, preCategoriseVisible }) => (
  <DashboardPrecategoriseStyled.Component>
    <DashboardPrecategoriseStyled.Content>
      <DashboardPrecategoriseStyled.Heading>
        Pre-Categorise a vehicle which you have just added to Autogate
      </DashboardPrecategoriseStyled.Heading>
    </DashboardPrecategoriseStyled.Content>

    <DashboardPrecategoriseStyled.Action>
      <DashboardPrecategoriseStyled.Select onClick={togglePreCategorise}>
        {preCategoriseVisible ? 'Hide Pre-Categorise' : 'Show Pre-Categorise'}
      </DashboardPrecategoriseStyled.Select>
    </DashboardPrecategoriseStyled.Action>
  </DashboardPrecategoriseStyled.Component>
);

DashboardPrecategoriseComponent.propTypes = {
  togglePreCategorise: PropTypes.func.isRequired,
  preCategoriseVisible: PropTypes.bool.isRequired,
};

export default DashboardPrecategoriseComponent;
