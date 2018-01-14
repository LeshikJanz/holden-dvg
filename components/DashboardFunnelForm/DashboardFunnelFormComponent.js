import React, { PropTypes } from 'react';
import InputText from 'template/components/InputText/InputTextComponent';
import InputLabel from 'template/components/InputLabel/InputLabelComponent';
import * as DashboardFunnelFormStyled from 'template/components/DashboardFunnelForm/DashboardFunnelFormStyled';
import hoc from 'template/components/DashboardFunnelForm/hoc';
import ButtonComponent from 'template/components/Button/ButtonComponent';
import eq from 'lodash/eq';

class DashboardFunnelFormComponent extends React.Component {
  componentWillReceiveProps(nextProps) {
    if (!eq(nextProps.form, this.props.form)) {
      this.props.onChange(nextProps.form);
    }
  }

  shouldComponentUpdate(nextProps) {
    return !eq(nextProps.form, this.props.form);
  }

  render() {
    return (
      <DashboardFunnelFormStyled.Component>
        <DashboardFunnelFormStyled.Content>
          <DashboardFunnelFormStyled.ContentItem>
            <InputLabel>Campaign Name</InputLabel>
            <InputText>
              <input
                type="text"
                onChange={this.props.onCampaignNameChange}
                placeholder="Volkswagen Google Ad"
              />
            </InputText>
          </DashboardFunnelFormStyled.ContentItem>

          <DashboardFunnelFormStyled.ContentItem>
            <InputLabel>Page Name</InputLabel>
            <InputText>
              <input
                type="text"
                onChange={this.props.onPageNameChange}
                placeholder="volkswagen-google-ad"
              />
            </InputText>
          </DashboardFunnelFormStyled.ContentItem>

          <DashboardFunnelFormStyled.ContentItem full>
            <InputLabel>Page URL</InputLabel>
            <InputText>
              <input
                type="text"
                onChange={this.props.onUrlChange}
                placeholder="carsales-for-sale.dvg.au/campaign/volkswagen-google-ad"
              />
            </InputText>
          </DashboardFunnelFormStyled.ContentItem>

          <DashboardFunnelFormStyled.ContentItem>
            <InputLabel>Banner Image</InputLabel>
            <ButtonComponent>Upload Photo</ButtonComponent>
          </DashboardFunnelFormStyled.ContentItem>

          <DashboardFunnelFormStyled.ContentItem>
            <InputLabel>Banner Mobile Image</InputLabel>
            <ButtonComponent>Upload Photo</ButtonComponent>
          </DashboardFunnelFormStyled.ContentItem>

          <DashboardFunnelFormStyled.ContentItem>
            <InputLabel>Page Title</InputLabel>
            <InputText>
              <input
                type="text"
                onChange={this.props.onPageTitleChange}
                placeholder="Enter page title for header and meta-title"
              />
            </InputText>
          </DashboardFunnelFormStyled.ContentItem>

          <DashboardFunnelFormStyled.ContentItem>
            <InputLabel>Vehicle Group</InputLabel>
            <InputText>
              <input
                type="text"
                onChange={this.props.onEndpointChange}
                placeholder="Enter api call for group, for example volkswagen201728832"
              />
            </InputText>
          </DashboardFunnelFormStyled.ContentItem>

          <DashboardFunnelFormStyled.ContentItem full>
            <InputLabel>Header Text</InputLabel>
            <InputText>
              <textarea
                onChange={this.props.onHeaderTextChange}
                placeholder="Enter promotional text" rows="6"
              />
            </InputText>
          </DashboardFunnelFormStyled.ContentItem>
        </DashboardFunnelFormStyled.Content>
      </DashboardFunnelFormStyled.Component>
    );
  }
}

DashboardFunnelFormComponent.propTypes = {
  onCampaignNameChange: PropTypes.func.isRequired,
  onPageNameChange: PropTypes.func.isRequired,
  onUrlChange: PropTypes.func.isRequired,
  onPageTitleChange: PropTypes.func.isRequired,
  onEndpointChange: PropTypes.func.isRequired,
  onHeaderTextChange: PropTypes.func.isRequired,
  form: PropTypes.shape().isRequired,
  onChange: PropTypes.func.isRequired,
};

export default hoc(DashboardFunnelFormComponent);
