import React, { PropTypes } from 'react';
import InputText from 'template/components/InputText/InputTextComponent';
import InputLabel from 'template/components/InputLabel/InputLabelComponent';
import * as DashboardAuthFormStyled from 'template/components/DashboardAuthForm/DashboardAuthFormStyled';
import hoc from 'template/components/DashboardAuthForm/hoc';
import ButtonComponent from 'template/components/Button/ButtonComponent';

class DashboardAuthFormComponent extends React.Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit() {
    this.props.onSubmit(this.props.form);
  }

  render() {
    return (
      <DashboardAuthFormStyled.Component>
        <DashboardAuthFormStyled.Content>
          <DashboardAuthFormStyled.ContentItem>
            <InputLabel>Username</InputLabel>
            <InputText>
              <input
                type="text"
                onChange={this.props.onUsernameChange}
                placeholder="Username"
              />
            </InputText>
          </DashboardAuthFormStyled.ContentItem>

          <DashboardAuthFormStyled.ContentItem>
            <InputLabel>Password</InputLabel>
            <InputText>
              <input
                type="password"
                onChange={this.props.onPasswordChange}
                placeholder="Password"
              />
            </InputText>
          </DashboardAuthFormStyled.ContentItem>

          <DashboardAuthFormStyled.ContentItem>
            <ButtonComponent width="full" color="green" onClick={this.onSubmit}>Login</ButtonComponent>
          </DashboardAuthFormStyled.ContentItem>

          <DashboardAuthFormStyled.ContentItem>
            <ButtonComponent width="full">Cancel</ButtonComponent>
          </DashboardAuthFormStyled.ContentItem>
        </DashboardAuthFormStyled.Content>
      </DashboardAuthFormStyled.Component>
    );
  }
}

DashboardAuthFormComponent.propTypes = {
  onUsernameChange: PropTypes.func.isRequired,
  onPasswordChange: PropTypes.func.isRequired,
  form: PropTypes.shape().isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default hoc(DashboardAuthFormComponent);
