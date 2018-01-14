import React, { PropTypes } from 'react';
import css from 'services/cssService';
import styles from 'template/components/EnquiryForm/EnquiryFormComponent.scss';
import ButtonComponent from 'template/components/Button/ButtonComponent';
import NotificationComponent from 'template/components/Notification/NotificationComponent';
import eq from 'lodash/eq';

import { Field, reduxForm } from 'redux-form';
import EnquiryFormValidator from 'template/components/EnquiryForm/EnquiryFormValidator';
import { ProductContactInput } from 'template/components/Shared/SharedFormInputComponent';

class EnquiryFormComponent extends React.Component {
  constructor(props) {
    super(props);
    this.postProductEnquiryRequest = this.postProductEnquiryRequest.bind(this);
  }

  postProductEnquiryRequest({ name, phone, email }) {
    this.props.postProductEnquiryRequest({
      origin: 'EnquiryFormComponent',

      Prospect: {
        FirstName: name,
        LastName: name,
        Email: email,
        HomePhone: phone,
      },
      Item: {
        StockNumber: this.props.product.StockNumber,
        Make: this.props.product.Make[0] || this.props.product.Make,
        Model: this.props.product.Model[0] || this.props.product.Model,
        RedbookCode: this.props.product.RedbookCode
      },
      Environment: {
        PageSource: window.location.href,
      },
      SellerIdentifier: this.props.product.DealerIdentifier,
      LeadType: this.props.product.ListingType,
    });
  }

  render() {
    return (
      <div styleName="block">
        <div styleName="component">
          <div styleName="component-title">
            Enquiry
          </div>
          <div styleName="component-form">
            <form styleName="form" onSubmit={this.props.handleSubmit(this.postProductEnquiryRequest)}>
              <div styleName="form-namePhone">
                <Field name="name" component={ProductContactInput} label="Name" />
                <Field name="phone" component={ProductContactInput} label="Phone" />
              </div>
              <div styleName="form-email">
                <Field name="email" component={ProductContactInput} label="Email" />
              </div>
              <div styleName="form-notification">
                {this.props.postProductEnquiryActions.status === 'success' ?
                  <NotificationComponent>Looking forward to speaking with you</NotificationComponent>
                : null}

                {this.props.postProductEnquiryActions.status === 'failure' ?
                  <NotificationComponent color="red">Could not submit enquiry</NotificationComponent>
                : null}
              </div>
              <div styleName="form-button">
                {this.props.postProductEnquiryActions.status === 'loading' ?
                  <ButtonComponent width="full" disable>...Loading</ButtonComponent>
                : null}

                {this.props.postProductEnquiryActions.status !== 'loading' ?
                  <ButtonComponent type="submit" width="full" color="blue">GO</ButtonComponent>
                : null}
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

EnquiryFormComponent.propTypes = {
  product: PropTypes.shape().isRequired,
  postProductEnquiryRequest: PropTypes.func.isRequired,
  postProductEnquiryActions: PropTypes.shape().isRequired,
  form: PropTypes.shape().isRequired,
  onNameChange: PropTypes.func.isRequired,
  onPhoneChange: PropTypes.func.isRequired,
  onEmailChange: PropTypes.func.isRequired,
};

export default reduxForm({
  form: 'EnquiryFormComponent',
  asyncValidate: EnquiryFormValidator.asyncValidate,
})(css(EnquiryFormComponent, styles));
