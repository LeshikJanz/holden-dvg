import React, { PropTypes } from 'react';
import hoc from 'template/components/DashboardGroupForm/hoc';
import ProductsSearch from 'template/components/ProductsSearch/ProductsSearchComponent';
import * as DashboardGroupFormStyled from 'template/components/DashboardGroupForm/DashboardGroupFormStyled';
import * as TableStyled from 'template/components/Table/TableStyled';
import map from 'lodash/map';
import eq from 'lodash/eq';
import debounce from 'lodash/debounce';

class DashboardGroupFormComponent extends React.Component {
  constructor(props) {
    super(props);
    this.getDashboardProductsRequest = debounce(this.props.getDashboardProductsRequest.bind(this), 300);
    this.onProductSearch = this.onProductSearch.bind(this);
  }

  componentWillMount() {
    this.props.onVehiclesGroupMount({ onVehiclesGroupRemove: this.props.onVehiclesGroupRemove });
    this.props.getDashboardProductsRequest({ categoryId: null, subcategoryId: null });
  }

  componentWillReceiveProps(nextProps) {
    if (!eq(nextProps.vehiclesGroup, this.props.vehiclesGroup)) {
      this.props.onVehiclesGroupChange(nextProps.vehiclesGroup);
    }
  }

  componentWillUnmount() {
    this.props.getDashboardProductsIdle();
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

  render() {
    return (
      <DashboardGroupFormStyled.Component>
        <DashboardGroupFormStyled.Heading>Vehicles</DashboardGroupFormStyled.Heading>

        <DashboardGroupFormStyled.Search>
          <ProductsSearch onChange={this.onProductSearch} />
        </DashboardGroupFormStyled.Search>

        <TableStyled.Table>
          <TableStyled.TableHeader>
            <TableStyled.TableRow header>
              <TableStyled.TableCol>Stock Number</TableStyled.TableCol>
              <TableStyled.TableCol>Make</TableStyled.TableCol>
              <TableStyled.TableCol>Model</TableStyled.TableCol>
              <TableStyled.TableCol>Variant</TableStyled.TableCol>
              <TableStyled.TableCol>Type</TableStyled.TableCol>
              <TableStyled.TableCol>Price</TableStyled.TableCol>
              <TableStyled.TableCol>Categories</TableStyled.TableCol>
            </TableStyled.TableRow>
          </TableStyled.TableHeader>

          <TableStyled.TableBody>
            {map(this.props.dashboardProducts.data, product => (
              <TableStyled.TableRow key={product._id}>
                <TableStyled.TableCol>{product.StockNumber}</TableStyled.TableCol>
                <TableStyled.TableCol>{product.Make}</TableStyled.TableCol>
                <TableStyled.TableCol>{product.Model}</TableStyled.TableCol>
                <TableStyled.TableCol>{product.Badge}</TableStyled.TableCol>
                <TableStyled.TableCol>{product.ListingType}</TableStyled.TableCol>
                <TableStyled.TableCol>{product._ft.Price}</TableStyled.TableCol>
                <TableStyled.TableCol>
                  {product.isProductInGroup &&
                    <span onClick={this.props.onVehiclesGroupRemove.bind(null, product)}>Remove from Group</span>
                  }
                  {!product.isProductInGroup &&
                    <span onClick={this.props.onVehiclesGroupAdd.bind(null, product)}>Add To Group</span>
                  }
                </TableStyled.TableCol>
              </TableStyled.TableRow>
            ))}
          </TableStyled.TableBody>
        </TableStyled.Table>
      </DashboardGroupFormStyled.Component>
    );
  }
}

DashboardGroupFormComponent.propTypes = {
  getDashboardProductsRequest: PropTypes.func.isRequired,
  getDashboardProductsIdle: PropTypes.func.isRequired,
  dashboardProducts: PropTypes.shape().isRequired,
  vehiclesGroup: PropTypes.arrayOf(PropTypes.object).isRequired,
  onVehiclesGroupMount: PropTypes.func.isRequired,
  onVehiclesGroupAdd: PropTypes.func.isRequired,
  onVehiclesGroupRemove: PropTypes.func.isRequired,
  onVehiclesGroupChange: PropTypes.func.isRequired,
};

export default hoc(DashboardGroupFormComponent);
