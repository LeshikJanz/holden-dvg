import React, { PropTypes } from 'react';
import css from 'services/cssService';
import styles from 'template/components/ProductContact/ProductContactComponent.scss';
import ResponsiveHoc from 'template/components/ProductContact/ResponsiveHoc';
import ButtonComponent from 'template/components/Button/ButtonComponent';

import { Field, reduxForm } from 'redux-form';
import ProductContactValidator from 'template/components/ProductContact/ProductContactValidator';
import { ProductContactInput } from 'template/components/Shared/SharedFormInputComponent';


class ProductContactComponent extends React.Component {
  constructor(props) {
    super(props);
    this.postProductEnquiryRequest = this.postProductEnquiryRequest.bind(this);
  }

  postProductEnquiryRequest({ name, phone }) {
    this.props.postProductEnquiryRequest({
      origin: 'ProductContactComponent',

      Prospect: {
        FirstName: name,
        LastName: 'phone-only-user',
        Email: 'nonameuser',
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
    const width = this.props.responsive.window.width;
    return (
      <div styleName="block">
        <form styleName="componentMultiline" onSubmit={this.props.handleSubmit(this.postProductEnquiryRequest)}>
          <div styleName="component-form">
            <div styleName="input">
              <Field name="name" component={ProductContactInput} label={width > 470 ? 'Enter your name' : 'Name'} />
            </div>
            <div styleName="input">
              <Field name="phone" component={ProductContactInput} label={width > 470 ? 'Enter your phone' : 'Phone number'} />
            </div>
          </div>

          <div styleName="component-button">
            {this.props.postProductEnquiryActions.status === 'loading' ?
              <ButtonComponent width="full" disable>...Loading</ButtonComponent>
            : null}

            {this.props.postProductEnquiryActions.status === 'success' ?
              <ButtonComponent width="full" disable>Successfully sent</ButtonComponent>
            : null}

            {!['loading', 'success'].includes(this.props.postProductEnquiryActions.status) ?
              <ButtonComponent width="full" color="green" type="submit">Call me back today</ButtonComponent>
            : null}
          </div>
        </form>
      </div>
    );
  }
}

ProductContactComponent.propTypes = {
  product: PropTypes.shape().isRequired,
  postProductEnquiryRequest: PropTypes.func.isRequired,
  postProductEnquiryActions: PropTypes.shape().isRequired,
  form: PropTypes.shape().isRequired,
  onPhoneChange: PropTypes.func.isRequired,
  onNameChange: PropTypes.func.isRequired,
  responsive: PropTypes.object
};

export default ResponsiveHoc(reduxForm({
  form: 'ProductContactComponent',
  asyncValidate: ProductContactValidator.asyncValidate
})(css(ProductContactComponent, styles)));
