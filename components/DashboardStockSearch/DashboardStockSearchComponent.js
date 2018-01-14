import React from 'react';
import InputText from 'template/components/InputText/InputTextComponent';
import InputLabel from 'template/components/InputLabel/InputLabelComponent';
import * as DashboardStockSearchStyled from 'template/components/DashboardStockSearch/DashboardStockSearchStyled';

const DashboardStockSearchComponent = () => (
  <DashboardStockSearchStyled.Component>
    <DashboardStockSearchStyled.Content>
      <InputLabel>Stock Number</InputLabel>
      <InputText>
        <input type="text" placeholder="Enter Stock Number" />
      </InputText>
    </DashboardStockSearchStyled.Content>

    <DashboardStockSearchStyled.Description>
      <DashboardStockSearchStyled.Note>
        Note: The system will wait 24 hours for this vehicle to appear from Carsales.
        If the stock number is never found then the vehicle will be removed after 24 hours.
      </DashboardStockSearchStyled.Note>
    </DashboardStockSearchStyled.Description>
  </DashboardStockSearchStyled.Component>
);

export default DashboardStockSearchComponent;
