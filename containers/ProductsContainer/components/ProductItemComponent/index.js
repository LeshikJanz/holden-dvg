import React, { PropTypes } from 'react';
import css from 'services/cssService';
import styles from 'template/containers/ProductsContainer/components/ProductItemComponent/_ProductItemComponent.scss';
import { TagItemCompactComponent } from 'template/components/TagItem/index';
import ProductGalleryComponent from 'template/components/ProductGallery/ProductGalleryComponent';
import { roundEngineSize, roundProductPrice } from 'template/utils/index';
import { Link } from 'react-router-dom';
import isEmpty from 'lodash/isEmpty';

const ProductItemComponent = ({ product, snippetEnabled }) => {
  const price = Number(product._ft.Price)

  return (!isEmpty(product) && (
    <div styleName="block">
      <div styleName="component">
        <div styleName="productHead">
          <div styleName="productHead-image">
            {snippetEnabled ? (
              <a
                href={`http://www.dvg.com.au/cars/products/${product.Make}-${product.Model}-${product.ComplianceYear}-for-sale-perth-${product.StockNumber}`}>
                <ProductGalleryComponent product={product} />
              </a>
            ) : (
              <Link
                to={{ pathname: `/products/${product.Make}-${product.Model}-${product.ComplianceYear}-for-sale-perth-${product.StockNumber}` }}>
                <ProductGalleryComponent product={product} />
              </Link>
            )}
            <div styleName="productHead-condition">
              <div styleName="condition">
                {product.ListingType}
              </div>
            </div>
          </div>
        </div>
        <div styleName="productTail">
          <div styleName="productTail-title">
            <div styleName="title">
              {product.ComplianceYear} {product.Make} {product.Model} {product.Badge}
            </div>
          </div>
          <div styleName="productTail-description">
            <div styleName="description">
              <div styleName="description-item">
                <div styleName="description-item-title">Km:</div>
                <div styleName="description-item-text">{product.Kilometres} km</div>
              </div>
              <div styleName="description-item">
                <div styleName="description-item-title">Engine:</div>
                <div styleName="description-item-text">
                  <span>{`${product.EngineCapacity}L`}</span>
                  <span>
                  {product.filters.Fuel ?
                    <TagItemCompactComponent
                      title={product.Fuel}
                      color={product.filters.Fuel.color}
                    />
                    : product.Fuel}
                </span>
                  <span>
                  {product.filters.Cylinders ?
                    <TagItemCompactComponent
                      title={`${product.Cylinders} Cylinder`}
                      color={product.filters.Cylinders.color}
                    />
                    : `${product.Cylinders} Cylinder`}
                </span>
                </div>
              </div>
              <div styleName="description-item">
                <div styleName="description-item-title">Transmission:</div>
                <div styleName="description-item-text">
                  {product.filters.TransmissionType ?
                    <TagItemCompactComponent
                      title={product.filters.TransmissionType.title}
                      color={product.filters.TransmissionType.color}
                    />
                    : product.TransmissionType}
                </div>
              </div>
              <div styleName="description-item">
                <div styleName="description-item-title">Drive:</div>
                <div styleName="description-item-text">
                  {product.filters.DriveType ?
                    <TagItemCompactComponent
                      title={product.filters.DriveType.title}
                      color={product.filters.DriveType.color}
                    />
                    : product.DriveType}
                </div>
              </div>
              <div styleName="description-item">
                <div styleName="description-item-title">Colour:</div>
                <div styleName="description-item-text">
                  {product.filters.GenericColour ?
                    <TagItemCompactComponent
                      title={product.filters.GenericColour.title}
                      color={product.filters.GenericColour.color}
                    />
                    : product.GenericColour}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div styleName="productPrice">
          {price ?
            (<div>
              <div styleName="price">
                <div styleName="number">
                  ${roundProductPrice(price)}
                </div>
                {['used', 'demo'].includes(product.ListingType.toLowerCase()) && (
                  <div styleName="gov-excl">(excl. gov charges)</div>
                )}
              </div>
            </div>) :
            <div styleName="price">POA</div>
          }
        </div>
      </div>
    </div>
  ))
}

ProductItemComponent.propTypes = {
  product: PropTypes.shape().isRequired,
  filters: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default css(ProductItemComponent, styles);