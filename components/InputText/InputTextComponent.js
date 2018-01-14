import React from 'react';
import * as InputTextStyled from 'template/components/InputText/InputTextStyled';

const InputText = ({ Icon, children }) => (
  <InputTextStyled.Component>
    {Icon ?
      <InputTextStyled.Icon>
        {Icon}
      </InputTextStyled.Icon>
    : null}
    <InputTextStyled.Search>
      {children}
    </InputTextStyled.Search>
  </InputTextStyled.Component>
);

InputText.propTypes = {
};

export default InputText;
