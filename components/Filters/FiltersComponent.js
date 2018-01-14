import React, { PropTypes } from 'react';
import * as FiltersStyled from 'template/components/Filters/FiltersStyled';
import PriceFilterComponent from 'template/components/PriceFilter/PriceFilterComponent';
import LocationFilterComponent from 'template/components/LocationFilter/LocationFilterComponent';
import ColourFilterComponent from 'template/components/ColourFilter/ColourFilterComponent';
import ConditionFilterComponent from 'template/components/ConditionFilter/ConditionFilterComponent';

const FiltersComponent = (props) =>
  <FiltersStyled.Component>
    <FiltersStyled.Left>
      <FiltersStyled.Title>
        <i className="fa fa-align-left" /> &nbsp; <span>Sort by:</span>
      </FiltersStyled.Title>

      <FiltersStyled.PriceFilter>
        <PriceFilterComponent
          productsPricing={props.productsPricing}
          updateProductPricing={props.updateProductPricing}
        />
      </FiltersStyled.PriceFilter>
      <FiltersStyled.ColourFilter>
        <ColourFilterComponent
          updateProductColor={props.toggleProductFilter}
          productsColor={props.productsColor}
        />
      </FiltersStyled.ColourFilter>
      <FiltersStyled.LocationFilter>
        <LocationFilterComponent
          productsLocation={props.productsLocation}
          updateProductLocation={props.updateProductLocation}
        />
      </FiltersStyled.LocationFilter>
    </FiltersStyled.Left>

    <FiltersStyled.Right>
      <FiltersStyled.Title>
        <span>Type:</span>
      </FiltersStyled.Title>

      <FiltersStyled.ConditionFilter>
        <ConditionFilterComponent
          productsCondition={props.productsCondition}
          updateProductCondition={props.updateProductCondition}
        />
      </FiltersStyled.ConditionFilter>
    </FiltersStyled.Right>
  </FiltersStyled.Component>;

FiltersComponent.propTypes = {
  productsPricing: PropTypes.string.isRequired,
  updateProductPricing: PropTypes.func.isRequired,
  productsLocation: PropTypes.string.isRequired,
  updateProductLocation: PropTypes.func.isRequired,
  productsCondition: PropTypes.string.isRequired,
  updateProductCondition: PropTypes.func.isRequired,
  productsColor: PropTypes.string.isRequired,
  updateProductColor: PropTypes.func.isRequired,
};

export default FiltersComponent;
