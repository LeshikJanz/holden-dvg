import React, { PropTypes } from 'react';
import * as ProductsStyled from 'template/containers/ProductsContainer/components/ProductsComponent/ProductsStyled';
import ProductPremisesComponent from 'template/containers/ProductsContainer/components/ProductPremisesComponent';
import ProductItemComponent from 'template/containers/ProductsContainer/components/ProductItemComponent';
import ProductPlaceholderComponent from 'template/containers/ProductsContainer/components/ProductPlaceholderComponent';
import ProductDelinatorComponent from 'template/containers/ProductsContainer/components/ProductDelinatorComponent';
import scrollHoc from 'template/containers/ProductsContainer/components/ProductsComponent/scrollHoc';
import map from 'lodash/map';
import update from 'immutability-helper';

class ProductsComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { products: {}, productsOnPremises: false };
  }

  shouldComponentUpdate(nextProps) {
    /*
     * !TODO: this is a hack to prevent component from changing it's height,
     * component should be emptied if no results returned
     */
    return nextProps.products.data.length > 0;
  }

  /**
   * SearchF1 output now is sorted on direct match > F1s F1ss
   * Front End can distinguish those from the _ft._weights.tags.MakeModelBonus field
   * where :
   *
   * 2000 => direct match
   * 1000 => F1s
   * 0 => F1ss
   */
  componentWillReceiveProps(nextProps) {
    const searchIsEmpty = !(
      nextProps.productsSearch && (
        nextProps.productsSearch.make &&
        nextProps.productsSearch.model &&
        nextProps.productsSearch.make.length &&
        nextProps.productsSearch.model.length
      )
    );

    // Find index of first F1s or F1ss car
    const similarIndex = nextProps.products.data.findIndex(item =>
      item._weights.tags.MakeModelBonus !== 2000
    );
    // Find index of appended delinator
    const delinatorIndex = (this.state.products.data || []).findIndex(item =>
      item.id === 'similar'
    );
    const productsOnPremises = (
      nextProps.productsSearch &&
      nextProps.productsSearch.level &&
      nextProps.productsSearch.level !== 1
    );
    const isDelinatorVisible = (
      !!nextProps.products.data.length &&
      !searchIsEmpty &&
      similarIndex !== -1 &&
      !productsOnPremises
    );
    // Append delinator index if criterias above are matched
    const products = isDelinatorVisible ?
      update(nextProps.products, { data: { $splice: [[similarIndex, 1, { id: 'similar' }]] } }) :
      nextProps.products;

    this.setState({ products, productsOnPremises });
  }

  render() {
    return (
      <ProductsStyled.Component>
        {this.state.productsOnPremises && [
          <ProductsStyled.Item sm={4} xs={12} key="premises">
            <ProductPremisesComponent
              productsSearch={this.props.productsSearch}
            />
          </ProductsStyled.Item>,
          <ProductsStyled.Item sm={4} xs={12} key="delinator">
            <ProductDelinatorComponent />
          </ProductsStyled.Item>
        ]}

        {this.state.products.data && map(this.state.products.data, (product) =>
          product.id === 'similar' ? [
            <ProductsStyled.Item sm={4} xs={12} key="delinator" >
              <ProductDelinatorComponent />
            </ProductsStyled.Item>
          ] : (
            <ProductsStyled.Item sm={4} xs={12} key={product.id}>
              {product.id !== 'similar' &&
                <ProductItemComponent
                  product={product}
                  productsFilter={this.props.productsFilter}
                  snippetEnabled={this.props.snippetEnabled}
                />
              }
            </ProductsStyled.Item>
          )
        )}

        {!this.props.limitIsReached && this.props.getProductsLoading && map(Array(6), (item, key) => (
          <ProductsStyled.Item sm={4} xs={12} key={key}>
            <ProductPlaceholderComponent />
          </ProductsStyled.Item>
        ))}
      </ProductsStyled.Component>
    );
  }
}

ProductsComponent.propTypes = {
  products: PropTypes.shape({
  }).isRequired,
};

export default scrollHoc(ProductsComponent);
