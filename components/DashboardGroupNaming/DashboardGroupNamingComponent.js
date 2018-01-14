import React, { PropTypes } from 'react';
import InputText from 'template/components/InputText/InputTextComponent';
import InputLabel from 'template/components/InputLabel/InputLabelComponent';
import * as DashboardGroupNamingStyled from 'template/components/DashboardGroupNaming/DashboardGroupNamingStyled';

const DashboardGroupNamingComponent = ({ form: { name, apicall }, onGroupNameChange, onApiCallChange }) => (
  <DashboardGroupNamingStyled.Component>
    <DashboardGroupNamingStyled.Content>
      <InputLabel>Group Name</InputLabel>
      <InputText>
        <input type="text" placeholder="Enter Group Name" value={name} onChange={event => onGroupNameChange(event.target.value)} />
      </InputText>
    </DashboardGroupNamingStyled.Content>
    <DashboardGroupNamingStyled.Content>
      <InputLabel>API Call</InputLabel>
      <InputText>
        <input type="text" placeholder="API Call" value={apicall} onChange={event => onApiCallChange(event.target.value)} />
      </InputText>
    </DashboardGroupNamingStyled.Content>
  </DashboardGroupNamingStyled.Component>
);

DashboardGroupNamingComponent.propTypes = {
  onGroupNameChange: PropTypes.func.isRequired,
  onApiCallChange: PropTypes.func.isRequired,
  form: PropTypes.shape().isRequired,
};

DashboardGroupNamingComponent.defaultProps = {
  form: {
    name: '',
    apicall: '',
  },
};

export default DashboardGroupNamingComponent;
