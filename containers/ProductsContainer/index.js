import React from 'react';
import * as ProductsStyled from 'template/containers/ProductsContainer/ProductsStyled';
import { init, propTypes } from 'containers/ProductsContainer/index';
import productsHoc from 'template/containers/ProductsContainer/productsHoc';
import ProductsJumbotronComponent from 'template/containers/ProductsContainer/components/ProductsJumbotronComponent';
import ProductsFilterComponent from 'template/containers/ProductsContainer/components/ProductsFilterComponent';
import ProductsComponent from 'template/containers/ProductsContainer/components/ProductsComponent';
import SnippetComponent from 'template/containers/ProductsContainer/components/SnippetComponent';
import FunnelComponent from 'template/containers/ProductsContainer/components/FunnelComponent';
import isEqual from 'lodash/isEqual';
import get from 'lodash/get';
import throttle from 'lodash/throttle';
import { parse } from 'query-string';

export class ProductsContainer extends React.Component {
  componentWillMount() {
    const query = parse(this.props.location.search);
    const isFunnel = get(query, 'funnel', '').length;

    this.state = {
      categoryId: null,
      subCategoryId: null,
      isFunnel,

      filter: this.props.productsFilterQuery,
      filtertagposition: this.props.productsFilterTagPosition,
      make: this.props.productsSearch.make,
      model: this.props.productsSearch.model,
      startat: this.props.productsStartat,
      location: this.props.productsLocation,
      condition: this.props.productsCondition,
      pricing: this.props.productsPricing,
      category: this.props.productsCategory,
      color: this.props.productsColor,
      offset: this.props.productsActions.getProducts.meta.offset,
      limit: this.props.productsActions.getProducts.meta.limit,
    };

    this.updateProductSearch = this.updateProductSearch.bind(this);
    this.getProductSuggestRequest = this.getProductSuggestRequest.bind(this);
    this.getProductsRequest = this.props.getProductsRequest.bind(this);
    this.updateProductCategory = this.updateProductCategory.bind(this);
    this.toggleProductFilter = this.toggleProductFilter.bind(this);
    this.initScroll = throttle(this.initScroll.bind(this), 50);
    this.submitProductSearch = this.submitProductSearch.bind(this);

    if (this.props.productsViewScrollTop) {
      this.props.horizontalScroll(this.props.productsViewScrollTop);
    }

    if (query.funnel) {
      this.props.getFunnelPageRequest({ funnelPageId: query.funnel });
    } else {
      this.getProductsRequest(this.state);
    }

    /**
     * Setting default products condition which is passed from Routes.js
     * used for promotional page
     */
    if (this.props.defaultProductsCondition && Array.isArray(this.props.defaultProductsCondition)) {
      this.props.defaultProductsCondition.map(condition =>
        this.props.updateProductCondition(condition)
      );
    }

    this.props.getDistinctProductOptionsRequest(this.state);
  }

  componentWillReceiveProps(nextProps) {
    if (!isEqual(nextProps.productsActions.getProducts.meta, this.props.productsActions.getProducts.meta)) {
      this.setState({
        offset: nextProps.productsActions.getProducts.meta.offset,
        limit: nextProps.productsActions.getProducts.meta.limit,
      });
    }

    if (this.props.productsActions.getProducts.meta.offset !== nextProps.productsActions.getProducts.meta.offset) {
      this.setState({
        limitIsReached: this.props.products.data.length === nextProps.products.data.length,
      });
    }

    if (
      this.props.products.data.length === nextProps.products.data.length &&
      nextProps.productsActions.getProducts.meta.offset !== 20
    ) {
      this.setState({
        limitIsReached: true,
        offset: 0,
      });
    }

    if (
      /**
       * Autosuggest search will not be submitted while isSearching flag is false
       */
      (!isEqual(nextProps.productsSearch, this.props.productsSearch) && nextProps.productsSearch.isSearching) ||
      !isEqual(nextProps.productsFilterQuery, this.props.productsFilterQuery) ||
      !isEqual(nextProps.productsStartat, this.props.productsStartat) ||
      !isEqual(nextProps.productsPricing, this.props.productsPricing) ||
      !isEqual(nextProps.productsLocation, this.props.productsLocation) ||
      !isEqual(nextProps.productsCategory, this.props.productsCategory) ||
      !isEqual(nextProps.productsCondition, this.props.productsCondition) ||
      !isEqual(nextProps.productsColor, this.props.productsColor) ||
      !isEqual(nextProps.funnelPage.data, this.props.funnelPage.data)
    ) {
      const nextState = {
        filter: nextProps.productsFilterQuery,
        make: nextProps.productsSearch.make,
        model: nextProps.productsSearch.model,
        startat: nextProps.productsStartat,
        pricing: nextProps.productsPricing,
        location: nextProps.productsLocation,
        category: nextProps.productsCategory,
        condition: nextProps.productsCondition,
        color: nextProps.productsColor,
        offset: 0,
        limit: 20,
        filtertagposition: nextProps.productsFilterTagPosition,
        funnel: nextProps.funnelPage.data.endpoint,
      };
      this.setState(nextState);
      this.getProductsRequest({ ...nextState, reset: true });
      this.props.getDistinctProductOptionsRequest(nextState);
    }
  }

  componentWillUnmount() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    this.props.updateProductsViewScrollTop(scrollTop);
  }

  getProductsRequest(data) {
    if (!data.limitIsReached) {
      this.props.getProductsRequest(data);
    }
  }

  getProductSuggestRequest(data, toClear = false) {
    if (toClear) {
      this.props.updateProductSearch('');
      this.props.getProductSuggestIdle();
    }

    if (data.search && data.search.length) {
      this.props.getProductSuggestRequest(data);
    }
  }

  submitProductSearch() {
    this.props.submitProductSearch();
    this.initScroll();
  }

  updateProductSearch(data) {
    this.props.updateProductSearch(data);
    this.props.getProductSuggestIdle();
  }

  updateProductCategory(data) {
    this.props.updateProductCategory(data);
    this.initScroll();
  }

  toggleProductFilter(data) {
    this.props.toggleProductFilter(data);
    this.initScroll();
  }

  initScroll() {
    const offset = this.props.calcProductsOffset(this.filterRef);
    this.props.horizontalScroll(offset);
  }

  render() {
    return (
      <ProductsStyled.Component>
        {this.state.isFunnel ?
          <FunnelComponent
            funnelPage={this.props.funnelPage}
          />
        : null}

        {(!this.props.appConfig.snippetEnabled && this.props.appConfig.headerEnabled) ?
          <ProductsJumbotronComponent
            {...this.props}
            getSearchNodeRef={c => { this.filterRef = c; }}
            allCategories={this.props.allCategories}
            filtersMap={this.props.distinctProductOptions.data}
            productsFilter={this.props.productsFilter}
            toggleProductFilter={this.toggleProductFilter}
            productsCategory={this.props.productsCategory}
            updateProductCategory={this.updateProductCategory}
            productsSearch={this.props.productsSearch}
            updateProductSearch={this.updateProductSearch}
            productsStartat={this.props.productsStartat}
            updateProductStartat={this.props.updateProductStartat}
            productsLocation={this.props.productsLocation}
            updateProductLocation={this.props.updateProductLocation}
            productsCondition={this.props.productsCondition}
            updateProductCondition={this.props.updateProductCondition}
            productsPricing={this.props.productsPricing}
            updateProductPricing={this.props.updateProductPricing}
            updateProductColor={this.props.updateProductColor}
            productsColor={this.props.productsColor}
            productSuggest={this.props.productSuggest.data}
            getProductSuggestRequest={this.getProductSuggestRequest}
            isFunnel={this.state.isFunnel}
            submitProductSearch={this.submitProductSearch}
            idleProductSearch={this.props.idleProductSearch}
            background={this.props.promotionPage && this.props.appConfig.background}
            promotionPage={true}
          />
        : null}

        {!this.props.appConfig.snippetEnabled ?
          <ProductsFilterComponent
            {...this.props}
            getSearchNodeRef={c => { this.filterRef = c; }}
            allCategories={this.props.allCategories}
            filtersMap={this.props.distinctProductOptions.data}
            productsFilter={this.props.productsFilter}
            toggleProductFilter={this.toggleProductFilter}
            productsCategory={this.props.productsCategory}
            updateProductCategory={this.updateProductCategory}
            productsSearch={this.props.productsSearch}
            updateProductSearch={this.updateProductSearch}
            productsStartat={this.props.productsStartat}
            updateProductStartat={this.props.updateProductStartat}
            productsLocation={this.props.productsLocation}
            updateProductLocation={this.props.updateProductLocation}
            productsCondition={this.props.productsCondition}
            updateProductCondition={this.props.updateProductCondition}
            productsPricing={this.props.productsPricing}
            updateProductPricing={this.props.updateProductPricing}
            updateProductColor={this.props.updateProductColor}
            productsColor={this.props.productsColor}
            productSuggest={this.props.productSuggest.data}
            getProductSuggestRequest={this.getProductSuggestRequest}
            isFunnel={this.state.isFunnel}
            submitProductSearch={this.submitProductSearch}
            idleProductSearch={this.props.idleProductSearch}
          />
        : null}

        {!this.props.appConfig.snippetEnabled ?
          <ProductsStyled.Products>
            <ProductsComponent
              getProductsLoading={this.props.productsActions.getProducts.isLoading}
              getProductsLimit={this.props.productsActions.getProducts.meta.limit}
              products={this.props.products}
              productsFilter={this.props.productsFilter}
              onReachLazyLoading={this.getProductsRequest.bind(null, this.state)}
              lazyLoadIsDisabled={this.props.productsActions.getProducts.isLoading}
              limitIsReached={this.state.limitIsReached}
              productsSearch={this.props.productsSearch}
              snippetEnabled={this.props.appConfig.snippetEnabled}
            />
          </ProductsStyled.Products>
        : null}

        {(this.props.appConfig.snippetEnabled && this.props.appConfig.snippetRows) ?
          <ProductsStyled.Products>
            <SnippetComponent
              products={this.props.products}
              productsFilter={this.props.productsFilter}
              maxItemsCount={parseInt(this.props.appConfig.snippetRows, 10) * 3}
              snippetEnabled={this.props.appConfig.snippetEnabled}
            />
          </ProductsStyled.Products>
        : null}
      </ProductsStyled.Component>
    );
  }
}

ProductsContainer.propTypes = propTypes;
export default productsHoc(init(ProductsContainer));
