import React, { PropTypes } from 'react';
import * as SearchSuggestStyled from 'template/components/SearchSuggest/SearchSuggestStyled';
import sortBy from 'lodash/sortBy';

const SearchSuggestComponent = ({ productSuggest, updateProductSearch }) => (
  <SearchSuggestStyled.Component>
    <SearchSuggestStyled.Suggest>
      {sortBy(productSuggest, ['level']).map((item, key) =>
        <SearchSuggestStyled.SuggestItem
          key={key}
          onClick={() => updateProductSearch({ make: item.Make, model: item.Model, level: item.level })}
          level={item.level}
        >
          {item.Make} {item.Model}
        </SearchSuggestStyled.SuggestItem>
      )}
    </SearchSuggestStyled.Suggest>
  </SearchSuggestStyled.Component>
);

SearchSuggestComponent.propTypes = {
  productSuggest: PropTypes.arrayOf(PropTypes.object).isRequired,
  updateProductSearch: PropTypes.func.isRequired,
};

export default SearchSuggestComponent;
