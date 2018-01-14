import React, { PropTypes } from 'react';
import css from 'services/cssService';
import styles from 'template/components/ProductOverview/ProductOverviewComponent.scss';
import hoc from 'template/components/ProductOverview/hoc';
import CallonComponent from 'template/components/Callon/CallonComponent';
import EnquiryComponent from 'template/components/Enquiry/EnquiryComponent';
import FinanceCalculatorComponent from 'template/components/FinanceCalculator/FinanceCalculatorComponent';
import ModalComponent from 'template/components/Modal/ModalComponent';
import { roundProductPrice } from 'template/utils/index';
import get from 'lodash/get';
import isEmpty from 'lodash/isEmpty';

const ProductOverviewComponent = ({ product, salesManVersion, modal, onModalToggle, onModalClose }) => !isEmpty(product) && (
  <div styleName="block">
    <div styleName="component">
      <div styleName="component-item component-item-big border-right border-bottom">
        <div styleName="price">
          <div styleName="price-title">${roundProductPrice(product._ft.Price)}</div>
          {['used', 'demo'].includes(product.ListingType.toLowerCase()) && (
            <div styleName="gov-excl">(excl. gov charges)</div>
          )}
          <div styleName="price-subtitle">
            <div styleName="price-subtitle-title">SN:</div>
            <div styleName="price-subtitle-text">#{product.StockNumber}</div>
          </div>
        </div>
      </div>
      <div styleName="component-item component-item-big border-bottom">
        <EnquiryComponent
          loanAmount={product._ft.Price}
          interestRate="9.85"
          onClick={onModalToggle}
        />
        <ModalComponent
          isOpen={modal}
          onRequestClose={onModalToggle}
        >
          <FinanceCalculatorComponent
            loanAmount={product._ft.Price}
            interestRate="9.85"
            product={product}
            onModalClose={onModalClose}
          />
        </ModalComponent>
      </div>

      <div styleName="component-item border-right border-bottom">
        {!salesManVersion ?
          <div styleName="detail">
            <div styleName="detail-title">
              <div styleName="items-row">
                <div styleName="address-icon" />
                Address
              </div>
            </div>
            <div styleName="detail-subtitle">
              <div>{get(product, 'DealerLocation.title', 'na')}</div>
              <div>{get(product, 'DealerLocation.address', 'na')},</div>
              <div>{get(product, 'DealerLocation.suburb', 'na')}</div>
            </div>
          </div>
        : null}
      </div>
      <div styleName="component-item border-bottom">
        <div styleName="detail">
          <div styleName="detail-title">
            <div styleName="items-row">
              <div styleName="drive-icon" />
              Drive Type
            </div>
          </div>
          <div styleName="detail-subtitle">
            {product.DriveType}
          </div>
        </div>
      </div>

      <div styleName="component-item border-right border-bottom">
        <div styleName="detail">
          <div styleName="detail-title">
            <div styleName="items-row">
              <div styleName="body-icon" />
              Body
            </div>
          </div>
          <div styleName="detail-subtitle">
            <div>{product.Doors} door</div>
            <div>{product.BodyStyle}</div>
          </div>
        </div>
      </div>
      <div styleName="component-item border-bottom">
        <div styleName="detail">
          <div styleName="detail-title">
            <div styleName="items-row">
              <div styleName="kilo-icon" />
              Kilometres
            </div>
          </div>
          <div styleName="detail-subtitle">
            {(product.Kilometres || '').toLocaleString()} km
          </div>
        </div>
      </div>

      <div styleName="component-item border-right border-bottom">
        <div styleName="detail">
          <div styleName="detail-title">
            <div styleName="items-row">
              <div styleName="engine-icon" />
              Engine
            </div>
          </div>
          <div styleName="detail-subtitle">
            {product.Cylinders} Cylinder {product.Fuel}
          </div>
        </div>
      </div>
      <div styleName="component-item border-bottom">
        <div styleName="detail">
          <div styleName="detail-title">
            <div styleName="items-row">
              <div styleName="transmission-icon" />
              Transmission
            </div>
          </div>
          <div styleName="detail-subtitle">
            {product.TransmissionType}
          </div>
        </div>
      </div>

      {!salesManVersion ?
        <div styleName="component-itemFull">
          <CallonComponent
            product={product}
          />
        </div>
      : null}
    </div>
  </div>
);

ProductOverviewComponent.propTypes = {
  product: PropTypes.shape({}).isRequired,
};

export default hoc(css(ProductOverviewComponent, styles));
