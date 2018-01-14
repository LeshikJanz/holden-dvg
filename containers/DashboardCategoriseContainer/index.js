import React, { PropTypes } from 'react';
import * as DashboardCategoriseStyled from 'template/containers/DashboardCategoriseContainer/DashboardCategoriseStyled';
import hoc from 'template/containers/DashboardCategoriseContainer/hoc';
import DashboardHeaderComponent from 'template/components/DashboardHeader/DashboardHeaderComponent';
import DashboardPrecategoriseComponent from 'template/components/DashboardPrecategorise/DashboardPrecategoriseComponent';
import DashboardStockSearchComponent from 'template/components/DashboardStockSearch/DashboardStockSearchComponent';
import MainSelectComponent from 'template/components/MainSelect/MainSelectComponent';
import DashboardVehiclesComponent from 'template/components/DashboardVehicles/DashboardVehiclesComponent';
import ButtonComponent from 'template/components/Button/ButtonComponent';
import PaginationComponent from 'template/components/Pagination/PaginationComponent';

class DashboardCategoriseContainer extends React.Component {
  constructor(props) {
    super(props);
    this.onPaginationChange = this.onPaginationChange.bind(this);
    this.state = { limit: 60, offset: 0 };
  }

  onPaginationChange(pagination) {
    this.setState(pagination);
  }

  render() {
    return (
      <DashboardCategoriseStyled.Component>
        <DashboardCategoriseStyled.Header>
          <DashboardHeaderComponent returnBack="/dashboard/categories">
            Categorise Vehicles
          </DashboardHeaderComponent>
        </DashboardCategoriseStyled.Header>
        <DashboardCategoriseStyled.Precategorise>
          <DashboardPrecategoriseComponent
            togglePreCategorise={this.props.togglePreCategorise}
            preCategoriseVisible={this.props.preCategoriseVisible}
          />
        </DashboardCategoriseStyled.Precategorise>
        {this.props.preCategoriseVisible && [
          <DashboardCategoriseStyled.StockSearch>
            <DashboardStockSearchComponent />
          </DashboardCategoriseStyled.StockSearch>,
          <DashboardCategoriseStyled.SelectCategories>
            <MainSelectComponent
              categories={[]}
              onCategoryClick={() => {}}
            />
          </DashboardCategoriseStyled.SelectCategories>,
          <DashboardCategoriseStyled.SelectSubmit>
            <ButtonComponent color="green">Pre-Categorise this vehicle</ButtonComponent>
          </DashboardCategoriseStyled.SelectSubmit>
        ]}
        <DashboardCategoriseStyled.Vehicles>
          <DashboardVehiclesComponent
            getDashboardProductsRequest={this.props.getDashboardProductsRequest}
            getProductCategoriesRequest={this.props.getProductCategoriesRequest}
            dashboardProducts={this.props.dashboardProducts}
            productCategories={this.props.productCategories}
            putProductCategoryRequest={this.props.putProductCategoryRequest}
            limit={this.state.limit}
            offset={this.state.offset}
          />
        </DashboardCategoriseStyled.Vehicles>
        <DashboardCategoriseStyled.Pagination>
          <PaginationComponent
            defaultLimit={this.state.limit}
            onChange={this.onPaginationChange}
          />
        </DashboardCategoriseStyled.Pagination>
      </DashboardCategoriseStyled.Component>
    );
  }
}

DashboardCategoriseContainer.propTypes = {
  dashboardProducts: PropTypes.shape().isRequired,
  productCategories: PropTypes.shape().isRequired,
  getDashboardProductsRequest: PropTypes.func.isRequired,
  putProductCategoryRequest: PropTypes.func.isRequired,
  getProductCategoriesRequest: PropTypes.func.isRequired,
  togglePreCategorise: PropTypes.func.isRequired,
  preCategoriseVisible: PropTypes.bool.isRequired,
};

export default hoc(DashboardCategoriseContainer);
