import React from 'react';
import * as ProductsFilterStyled from 'template/containers/ProductsContainer/components/ProductsFilterComponent/ProductsFilterStyled';
import Sticky from 'template/containers/ProductsContainer/components/ProductsFilterComponent/stickyHoc';
import scrollHoc from 'template/containers/ProductsContainer/components/ProductsFilterComponent/scrollHoc';
import MainSelectInfoComponent from 'template/components/MainSelect/MainSelectInfoComponent';
import TagTypeComponent from 'template/components/TagType/TagTypeComponent';
import FiltersComponent from 'template/components/Filters/FiltersComponent';
import { defaultScroll } from 'template/utils/index';

const ProductsFilterComponent = (props) => (
  <ProductsFilterStyled.Block>
    <ProductsFilterStyled.Component>
      <MainSelectInfoComponent
        categories={props.productsCategory}
        onCategoryClick={props.updateProductCategory}
      />

      <Sticky innerZ="4">
        <div>
          <TagTypeComponent
            allCategories={props.allCategories}
            productsCategory={props.productsCategory}
            updateProductCategory={props.updateProductCategory}
            productsFilter={props.productsFilter}
            toggleProductFilter={props.toggleProductFilter}
            filtersMap={props.filtersMap}
          />
        </div>
      </Sticky>

      <FiltersComponent
        productsStartat={props.productsStartat}
        updateProductStartat={props.updateProductStartat}
        productsPricing={props.productsPricing}
        updateProductPricing={props.updateProductPricing}
        productsLocation={props.productsLocation}
        updateProductLocation={props.updateProductLocation}
        productsCondition={props.productsCondition}
        updateProductCondition={props.updateProductCondition}
        updateProductColor={props.updateProductColor}
        productsColor={props.productsColor}
        toggleProductFilter={props.toggleProductFilter}
      />
    </ProductsFilterStyled.Component>

    <ProductsFilterStyled.MobileTopScroll
      onClick={defaultScroll.bind(null, 0)}
      showScrollToTop={props.showScrollToTop}
    >
      <i className="fa fa-angle-double-up" /> Back to top <i className="fa fa-angle-double-up" />
    </ProductsFilterStyled.MobileTopScroll>
  </ProductsFilterStyled.Block>
);

export default scrollHoc(ProductsFilterComponent);
