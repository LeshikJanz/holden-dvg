import React from 'react';
import * as ProductsJumbotronStyled from 'template/containers/ProductsContainer/components/ProductsJumbotronComponent/ProductsJumbotronStyled';
import SearchSelectComponent from 'template/components/SearchSelect/SearchSelectComponent';
import MainSelectComponent from 'template/components/MainSelect/MainSelectComponent';
import ConditionFilterComponent from 'template/components/ConditionFilter/ConditionFilterComponent';
import MainToggleComponent from 'template/components/MainToggle/MainToggleComponent';
import buttonSpecial from 'template/assets/img/cover/button-special.png';

const ProductsJumbotronComponent = (props) => (
  <div>
    <ProductsJumbotronStyled.MobileCondition>
      <ConditionFilterComponent
        productsCondition={props.productsCondition}
        updateProductCondition={props.updateProductCondition}
      />
    </ProductsJumbotronStyled.MobileCondition>

    <ProductsJumbotronStyled.Component>
      <ProductsJumbotronStyled.Jumbotron
        innerRef={props.getSearchNodeRef}
        background={props.background}
      >
        <ProductsJumbotronStyled.JumbotronContent>
          {props.background && props.background.length ?
            <ProductsJumbotronStyled.Placeholder />
            : null}
          <ProductsJumbotronStyled.Headline isHidden={props.background && props.background.length}>
            Showing cars from 10 locations around Perth
          </ProductsJumbotronStyled.Headline>

          <MainToggleComponent title="Search Body Style" isVisible={false}>
            <MainSelectComponent
              categories={props.productsCategory}
              onCategoryClick={props.updateProductCategory}
              contentWithoutPadding
            />
          </MainToggleComponent>

          {!props.isFunnel &&
          <SearchSelectComponent
            type="unfolded"
            getProductSuggestRequest={props.getProductSuggestRequest}
            productSuggest={props.productSuggest}
            productsSearch={props.productsSearch}
            idleProductSearch={props.idleProductSearch}
            submitProductSearch={props.submitProductSearch}
            updateProductSearch={props.updateProductSearch}
            productsCategory={props.productsCategory}
            updateProductCategory={props.updateProductCategory}
          />
          }

          {!props.promotionPage ?
            <ProductsJumbotronStyled.Promotion>
              <ProductsJumbotronStyled.PromotionButton href="/cars/dvg-3-and-half-day-sale">
                <img src={buttonSpecial} alt="" />
              </ProductsJumbotronStyled.PromotionButton>
            </ProductsJumbotronStyled.Promotion>
            : null}
        </ProductsJumbotronStyled.JumbotronContent>
      </ProductsJumbotronStyled.Jumbotron>
    </ProductsJumbotronStyled.Component>
  </div>
);

export default ProductsJumbotronComponent;
