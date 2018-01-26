import React from 'react';
import { init, propTypes } from 'containers/LayoutContainer/index';
import * as LayoutStyled from 'template/containers/LayoutContainer/LayoutStyled';
import layoutHoc from 'template/containers/LayoutContainer/layoutHoc';

const LayoutContainer = ({ children, appConfig }) =>
  <LayoutStyled.Block>
    <LayoutStyled.LeftDrop />
    <LayoutStyled.RightDrop />
    <LayoutStyled.Component>
      <LayoutStyled.Header />
      <LayoutStyled.Content>
        {children}
      </LayoutStyled.Content>
      {!appConfig.snippetEnabled ?
        <LayoutStyled.Copyright>
          Automotive solutions by <a href="http://rvstudio.com.au" rel="noopener noreferrer" target="_blank">RV
          Studio</a>
        </LayoutStyled.Copyright>
        : null}
    </LayoutStyled.Component>
  </LayoutStyled.Block>;

LayoutContainer.propTypes = propTypes;
export default layoutHoc(init(LayoutContainer));
