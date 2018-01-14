import React from 'react';
import * as ProductGalleryThumbsStyled from 'template/components/ProductGalleryThumbs/ProductGalleryThumbsStyled';
import map from 'lodash/map';
import isEmpty from 'lodash/isEmpty';
import { generatePhotoThumbsUrl } from 'template/utils/index';

const settings = {
  arrows: false,
  dots: false,
  infinite: true,
  swipe: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  centerMode: true,
  focusOnSelect: true,
  draggable: true,
};

const ProductGalleryThumbsComponent = ({ product, afterChange, currentGalleryPage = 0 }) => (
  <ProductGalleryThumbsStyled.Block>
    {!isEmpty(product.Photos) ?
      <ProductGalleryThumbsStyled.Component
        {...settings}
        afterChange={afterChange}
        slickGoTo={currentGalleryPage}
      >
        {map(product.Photos, item => generatePhotoThumbsUrl(item, product)).map((item, key) =>
          <ProductGalleryThumbsStyled.ComponentItem key={key}>
            <img src={item} alt="" />
          </ProductGalleryThumbsStyled.ComponentItem>
        )}
      </ProductGalleryThumbsStyled.Component>
    : null}
  </ProductGalleryThumbsStyled.Block>
);

export default ProductGalleryThumbsComponent;
