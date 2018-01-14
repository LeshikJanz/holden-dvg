import React from 'react';
import css from 'services/cssService';
import styles from 'template/components/SearchSelect/_SearchSelectComponent.scss';
import MainSearchComponent from 'template/components/MainSearch/MainSearchComponent';
import SearchSuggestComponent from 'template/components/SearchSuggest/SearchSuggestComponent';
import cx from 'classnames';
import isEmpty from 'lodash/isEmpty';

const aggregateProductSuggest = (productSuggest) => {
  if (isEmpty(productSuggest)) {
    return [];
  }
  const Make = productSuggest[0].Make.map(item => ({ ...item, Model: '', level: 1 }));
  const Model = productSuggest[0].Model;
  return Make.concat(Model);
};

const getMakeModel = (productsSearch) => {
  const make = productsSearch.make || '';
  const model = productsSearch.model || '';
  if (make.length && model.length) {
    return `${make} ${model}`;
  } else if (make.length) {
    return make;
  }
  return null;
};

const SearchSelectComponent = ({ type = "folded", updateProductSearch, productsSearch, productSuggest, getProductSuggestRequest, productsCategory, updateProductCategory, submitProductSearch, idleProductSearch, ...props }) => {
  const searchStyle = cx({
    searchUnfolded: type !== 'folded',
    searchFolded: type === 'folded',
  });

  const productMakeModel = getMakeModel(productsSearch);
  const productSuggestAggregated = aggregateProductSuggest(productSuggest);
  const isSuggestVisible = productSuggestAggregated.length;

  return (
    <div styleName="block">
      <div styleName="component">
        <div styleName={searchStyle}>
          <MainSearchComponent
            type={type}
            getProductSuggestRequest={getProductSuggestRequest}
            productsSearch={productsSearch}
            productMakeModel={productMakeModel}
            isSuggestVisible={isSuggestVisible}
            idleProductSearch={idleProductSearch}
            submitProductSearch={submitProductSearch}
            {...props}
          />
        </div>

        {isSuggestVisible ?
          <div styleName="autocomplete">
            <SearchSuggestComponent
              productSuggest={productSuggestAggregated}
              updateProductSearch={updateProductSearch}
            />
          </div>
        : null}
      </div>
    </div>
  );
};

SearchSelectComponent.propTypes = {
};

export default css(SearchSelectComponent, styles);
