import React, { PropTypes } from 'react';
import * as ProductsStyled from 'template/containers/ProductsContainer/components/ProductsComponent/ProductsStyled';
import ProductItemComponent from 'template/containers/ProductsContainer/components/ProductItemComponent';
import map from 'lodash/map';
import update from 'immutability-helper';

class ProductsComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { products: {} };
  }

  componentWillReceiveProps(nextProps) {
    const products = update(nextProps.products, { data: { $splice: [[nextProps.maxItemsCount, nextProps.products.data.length]] } });
    this.setState({ products });
  }

  render() {
    return (
      <ProductsStyled.Component>
        {this.state.products.data && map(this.state.products.data, (product) =>
          <ProductsStyled.Item sm={4} xs={12} key={product.id}>
            <ProductItemComponent
              product={product}
              productsFilter={this.props.productsFilter}
              snippetEnabled={this.props.snippetEnabled}
            />
          </ProductsStyled.Item>
        )}
      </ProductsStyled.Component>
    );
  }
}

ProductsComponent.propTypes = {
  products: PropTypes.shape({
  }).isRequired,
  productsFilter: PropTypes.shape({
  }).isRequired,
};

export default ProductsComponent;
