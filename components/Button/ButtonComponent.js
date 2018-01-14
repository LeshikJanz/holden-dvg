import React, { PropTypes } from 'react';
import * as ButtonStyled from 'template/components/Button/ButtonStyled';

const Button = ({ children, size, width, color, disable, onClick }) => (
  <ButtonStyled.Component width={width}>
    <ButtonStyled.Button size={size} color={color} onClick={onClick} disable={disable} disabled={disable}>
      {children}
    </ButtonStyled.Button>
  </ButtonStyled.Component>
);

Button.propTypes = {
  children: PropTypes.shape().isRequired,
  size: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;
