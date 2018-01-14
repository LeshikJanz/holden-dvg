import React, { PropTypes } from 'react';
import MainSubSelect from 'template/components/MainSubSelect/MainSubSelectComponent';
import ProductsSearch from 'template/components/ProductsSearch/ProductsSearchComponent';
import * as DashboardVehiclesStyled from 'template/components/DashboardVehicles/DashboardVehiclesStyled';
import hoc from 'template/components/DashboardVehicles/hoc';
import * as TableStyled from 'template/components/Table/TableStyled';
import debounce from 'lodash/debounce';
import map from 'lodash/map';
import eq from 'lodash/eq';
import get from 'lodash/get';

class DashboardVehiclesComponent extends React.Component {
  constructor(props) {
    super(props);
    this.getDashboardProductsRequest = debounce(this.props.getDashboardProductsRequest.bind(this), 300);
    this.onProductSearch = this.onProductSearch.bind(this);
    this.putProductCategoryRequest = this.putProductCategoryRequest.bind(this);
  }

  componentWillMount() {
    this.props.getDashboardProductsRequest({
      limit: this.props.limit,
      offset: this.props.offset,
    });
    this.props.getProductCategoriesRequest({});
  }

  componentWillReceiveProps(nextProps) {
    if (
      !eq(this.props.offset, nextProps.offset) ||
      !eq(this.props.limit, nextProps.limit)
    ) {
      this.props.getDashboardProductsRequest({
        limit: nextProps.limit,
        offset: nextProps.offset,
      });
    }
  }

  onProductSearch({ make, model, stock }) {
    this.getDashboardProductsRequest({
      categoryId: null,
      subcategoryId: null,
      reset: true,
      model,
      make,
      stock,
    });
  }

  putProductCategoryRequest(productId, { stockNumber, categories }) {
    this.props.onCategoriesReset(productId);
    this.props.putProductCategoryRequest({ productId, stockNumber, categories });
  }

  render() {
    return (
      <DashboardVehiclesStyled.Component>
        <DashboardVehiclesStyled.Heading>Vehicles</DashboardVehiclesStyled.Heading>

        <DashboardVehiclesStyled.Search>
          <ProductsSearch onChange={this.onProductSearch} />
        </DashboardVehiclesStyled.Search>

        <TableStyled.Table>
          <TableStyled.TableHeader>
            <TableStyled.TableRow header>
              <TableStyled.TableCol>Stock Number</TableStyled.TableCol>
              <TableStyled.TableCol>Make</TableStyled.TableCol>
              <TableStyled.TableCol>Model</TableStyled.TableCol>
              <TableStyled.TableCol>Variant</TableStyled.TableCol>
              <TableStyled.TableCol>Type</TableStyled.TableCol>
              <TableStyled.TableCol />
            </TableStyled.TableRow>
          </TableStyled.TableHeader>

          <TableStyled.TableBody>
            {map(this.props.dashboardProducts.data, product => [
              <TableStyled.TableRow>
                <TableStyled.TableCol>
                  <strong><a href={get(product.Photos, '0')} target="_blank">{product.StockNumber}</a></strong>
                </TableStyled.TableCol>
                <TableStyled.TableCol>
                  <strong>{product.Make}</strong>
                </TableStyled.TableCol>
                <TableStyled.TableCol>
                  <strong>{product.Model}</strong>
                </TableStyled.TableCol>
                <TableStyled.TableCol>
                  <strong>{product.Badge}</strong>
                </TableStyled.TableCol>
                <TableStyled.TableCol>
                  <strong>{product.ListingType}</strong>
                </TableStyled.TableCol>
                <TableStyled.TableCol />
              </TableStyled.TableRow>,

              <TableStyled.TableRow collapsed>
                <TableStyled.TableCol collapsed colSpan={5}>
                  <MainSubSelect
                    categories={this.props.categories[product.StockNumber] || []}
                    onCategoryClick={this.props.onCategoriesClick.bind(null, product.StockNumber)}
                  />
                </TableStyled.TableCol>
                <TableStyled.TableCol>
                  <DashboardVehiclesStyled.Selection>
                    {this.props.modifiedProducts.includes(product.StockNumber) ?
                      <span onClick={this.putProductCategoryRequest.bind(null, product._id, { categories: this.props.categories[product.StockNumber], stockNumber: product.StockNumber })}>Accept</span> :
                      <span>Change</span>
                    }
                  </DashboardVehiclesStyled.Selection>
                </TableStyled.TableCol>
              </TableStyled.TableRow>
            ])}
          </TableStyled.TableBody>
        </TableStyled.Table>
      </DashboardVehiclesStyled.Component>
    );
  }
}

DashboardVehiclesComponent.propTypes = {
  getDashboardProductsRequest: PropTypes.func.isRequired,
  dashboardProducts: PropTypes.shape().isRequired,
  categories: PropTypes.shape().isRequired,
  onCategoriesClick: PropTypes.func.isRequired,
  modifiedProducts: PropTypes.arrayOf(PropTypes.string).isRequired,
  getProductCategoriesRequest: PropTypes.func.isRequired,
  putProductCategoryRequest: PropTypes.func.isRequired,
  onCategoriesReset: PropTypes.func.isRequired,
  limit: PropTypes.number.isRequired,
  offset: PropTypes.number.isRequired,
};

export default hoc(DashboardVehiclesComponent);
