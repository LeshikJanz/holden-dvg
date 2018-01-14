import React from 'react';
import * as FunnelStyled from 'template/containers/ProductsContainer/components/FunnelComponent/FunnelStyled';

const FunnelComponent = ({ funnelPage }) => (
  <FunnelStyled.Component>
    <FunnelStyled.Image>
      <img src={'http://i.imgur.com/o8IMtSq.jpg'} alt="Funnel page" />
    </FunnelStyled.Image>

    <FunnelStyled.Title>{funnelPage.data.pageTitle}</FunnelStyled.Title>
    <FunnelStyled.Text>{funnelPage.data.headerText}</FunnelStyled.Text>
  </FunnelStyled.Component>
);

export default FunnelComponent;
