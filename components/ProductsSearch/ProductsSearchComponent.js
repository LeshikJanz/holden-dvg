import React, { PropTypes } from 'react';
import InputText from 'template/components/InputText/InputTextComponent';
import * as ProductsSearchStyled from 'template/components/ProductsSearch/ProductsSearchStyled';
import hoc from 'template/components/ProductsSearch/hoc';
import eq from 'lodash/eq';

class ProductsSearchComponent extends React.Component {
  componentWillReceiveProps(nextProps) {
    if (
      !eq(nextProps.searchByModel, this.props.searchByModel) ||
      !eq(nextProps.searchByMake, this.props.searchByMake) ||
      !eq(nextProps.searchByStock, this.props.searchByStock)
    ) {
      this.props.onChange({
        model: nextProps.searchByModel,
        make: nextProps.searchByMake,
        stock: nextProps.searchByStock,
      });
    }
  }

  render() {
    return (
      <ProductsSearchStyled.Component>
        <ProductsSearchStyled.Search>
          <InputText>
            <input type="text" placeholder="Search by Model or Stock number" onChange={this.props.onSearch} />
          </InputText>
        </ProductsSearchStyled.Search>
      </ProductsSearchStyled.Component>
    );
  }
}

ProductsSearchComponent.propTypes = {
  onChange: PropTypes.func.isRequired,
  onSearch: PropTypes.func.isRequired,
  searchByMake: PropTypes.string.isRequired,
  searchByModel: PropTypes.string.isRequired,
  searchByStock: PropTypes.string.isRequired,
};

export default hoc(ProductsSearchComponent);
