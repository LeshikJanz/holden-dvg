import React from 'react';
import * as ProductPlaceholderStyled from 'template/containers/ProductsContainer/components/ProductPlaceholderComponent/ProductPlaceholderStyled';

const ProductPlaceholderComponent = () => (
  <ProductPlaceholderStyled.Component>
    <ProductPlaceholderStyled.Line />
    <ProductPlaceholderStyled.Line />
    <ProductPlaceholderStyled.Line />
    <ProductPlaceholderStyled.Line />
    <ProductPlaceholderStyled.Line />
    <ProductPlaceholderStyled.Line />
    <ProductPlaceholderStyled.Line />
    <ProductPlaceholderStyled.Line width="60" />
    <ProductPlaceholderStyled.Line width="60" />
    <ProductPlaceholderStyled.Line width="30" />
    <ProductPlaceholderStyled.Line width="30" />
  </ProductPlaceholderStyled.Component>
);

ProductPlaceholderComponent.propTypes = {
};

export default ProductPlaceholderComponent;
