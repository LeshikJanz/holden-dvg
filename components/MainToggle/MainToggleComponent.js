import React, { PropTypes } from 'react';
import * as MainToggleStyled from 'template/components/MainToggle/MainToggleStyled';
import hoc from 'template/components/MainToggle/hoc';

const MainToggle = ({ isVisible, onVisibilityToggle, title, children }) => (
  <MainToggleStyled.Component>
    <MainToggleStyled.Header onClick={onVisibilityToggle} isVisible={isVisible}>
      {isVisible ? <i className="fa fa-angle-double-up" /> : <i className="fa fa-angle-double-down" />} {title}
    </MainToggleStyled.Header>
    <MainToggleStyled.Content isVisible={isVisible}>
      {children}
    </MainToggleStyled.Content>
  </MainToggleStyled.Component>
);

MainToggle.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  onVisibilityToggle: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.shape().isRequired,
};

export default hoc(MainToggle);
