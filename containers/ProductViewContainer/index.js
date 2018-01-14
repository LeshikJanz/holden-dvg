import React from 'react';
import * as ProductViewStyled from 'template/containers/ProductViewContainer/ProductViewStyled';

import { init, propTypes } from 'containers/ProductViewContainer/index';
import productViewHoc from 'template/containers/ProductViewContainer/productViewHoc';
import ProductHeaderComponent from 'template/components/ProductHeader/ProductHeaderComponent';
import ProductGalleryComponent from 'template/components/ProductGallery/ProductGalleryComponent';
import ProductGalleryThumbsComponent from 'template/components/ProductGalleryThumbs/ProductGalleryThumbsComponent';
import ProductOverviewComponent from 'template/components/ProductOverview/ProductOverviewComponent';
import ProductToggledInfoComponent from 'template/components/ProductToggledInfo/ProductToggledInfoComponent';
import ProductContactComponent from 'template/components/ProductContact/ProductContactComponent';
import ProductAboutComponent from 'template/components/ProductAbout/ProductAboutComponent';
import EnquiryFormComponent from 'template/components/EnquiryForm/EnquiryFormComponent';
import ProductFeaturesComponent from 'template/components/ProductFeatures/ProductFeaturesComponent';
import ProductsSuggestedComponent from 'template/components/ProductsSuggested/ProductsSuggestedComponent';
import shuffle from 'lodash/shuffle';
import take from 'lodash/take';

export class ProductViewContainer extends React.Component {
  constructor(props) {
    super(props);
    this.galleryPageTransition = this.galleryPageTransition.bind(this);
    this.state = { currentGalleryPage: 1 };
  }

  componentWillMount() {
    this.props.horizontalScroll(0);
    this.props.getProductRequest({ id: this.props.match.params.id });
    this.props.getProductsRequest({
      categoryId: null,
      subCategoryId: null,
      pricing: 1,
    });
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.match.params.id && nextProps.match.params.id !== this.props.match.params.id) {
      this.props.horizontalScroll(0);
      this.props.getProductRequest({ id: nextProps.match.params.id });
      this.props.postProductEnquiryIdle();
    }

    if (
      nextProps.match.params.id && nextProps.match.params.id !== this.props.match.params.id
    ) {
      this.props.getProductsRequest({
        categoryId: null,
        subCategoryId: null,
        pricing: 1,
      });
    }
  }

  componentWillUnmount() {
    this.props.getProductIdle();
    this.props.postProductEnquiryIdle();
  }

  galleryPageTransition(nextPage) {
    this.setState({ currentGalleryPage: nextPage });
  }

  render() {
    return (
      <div>
        <ProductViewStyled.Header>
          <ProductHeaderComponent
            goBack={this.props.history.goBack}
          />
        </ProductViewStyled.Header>
        <ProductViewStyled.Component>
          <ProductViewStyled.Title>
            {this.props.product.data.ComplianceYear} {this.props.product.data.Make} {this.props.product.data.Model} {this.props.product.data.Badge}
          </ProductViewStyled.Title>

          <ProductViewStyled.MainView>
            <ProductViewStyled.Left>
              <ProductViewStyled.Gallery>
                <ProductGalleryComponent
                  product={this.props.product.data}
                  currentGalleryPage={this.state.currentGalleryPage}
                  arrowsAlwaysVisible
                />
              </ProductViewStyled.Gallery>
              <ProductViewStyled.Thumbs>
                <ProductGalleryThumbsComponent
                  product={this.props.product.data}
                  afterChange={this.galleryPageTransition}
                  currentGalleryPage={this.state.currentGalleryPage}
                />
              </ProductViewStyled.Thumbs>
            </ProductViewStyled.Left>
            <ProductViewStyled.Right>
              <ProductViewStyled.Overview>
                <ProductOverviewComponent
                  product={this.props.product.data}
                  salesManVersion={this.props.appConfig.salesManVersion}
                />
              </ProductViewStyled.Overview>
              <ProductViewStyled.Contact>
                <ProductContactComponent
                  postProductEnquiryRequest={this.props.postProductEnquiryRequest}
                  postProductEnquiryActions={this.props.postProductEnquiryActions}
                  product={this.props.product.data}
                />
              </ProductViewStyled.Contact>
            </ProductViewStyled.Right>
          </ProductViewStyled.MainView>

          <ProductViewStyled.AboutEnquiry>
            <ProductViewStyled.About>
              <ProductViewStyled.AboutInfo>
                <ProductAboutComponent
                  product={this.props.product.data}
                />
              </ProductViewStyled.AboutInfo>
            </ProductViewStyled.About>

            <ProductViewStyled.Enquiry>
              <ProductViewStyled.EnquiryForm>
                <EnquiryFormComponent
                  postProductEnquiryRequest={this.props.postProductEnquiryRequest}
                  postProductEnquiryActions={this.props.postProductEnquiryActions}
                  product={this.props.product.data}
                />
              </ProductViewStyled.EnquiryForm>
            </ProductViewStyled.Enquiry>
          </ProductViewStyled.AboutEnquiry>

          <ProductViewStyled.Features>
            <ProductFeaturesComponent
              product={this.props.product.data}
            />
          </ProductViewStyled.Features>

          <ProductViewStyled.Suggested>
            <ProductsSuggestedComponent
              products={take(shuffle(this.props.products.data), 3)}
              snippetEnabled={false}
            />
          </ProductViewStyled.Suggested>

          {this.props.appConfig.salesManVersion ?
            <ProductViewStyled.ToggledInfo>
              <ProductToggledInfoComponent
                product={this.props.product.data}
              />
            </ProductViewStyled.ToggledInfo>
          : null}
        </ProductViewStyled.Component>
      </div>
    );
  }
}

ProductViewContainer.propTypes = propTypes;
export default productViewHoc(init(ProductViewContainer));
