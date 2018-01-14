import React from 'react';
import * as InputLabelStyled from 'template/components/InputLabel/InputLabelStyled';

const InputLabel = ({ children }) => (
  <InputLabelStyled.Component>
    <InputLabelStyled.Label>
      {children}
    </InputLabelStyled.Label>
  </InputLabelStyled.Component>
);

InputLabel.propTypes = {
};

export default InputLabel;
