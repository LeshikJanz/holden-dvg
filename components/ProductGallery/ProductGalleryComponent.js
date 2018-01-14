import React, { PropTypes } from 'react';
import * as ProductGalleryStyled from 'template/components/ProductGallery/ProductGalleryStyled';
import isEmpty from 'lodash/isEmpty';
import map from 'lodash/map';
import { generatePhotoUrl } from 'template/utils/index';

const settings = {
  dots: false,
  arrows: true,
  speed: 500,
  swipe: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  lazyLoad: true,
};

class ProductGalleryComponent extends React.Component {
  constructor(props) {
    super(props);
    this.touchStart = this.touchStart.bind(this);
    this.touchEnd = this.touchEnd.bind(this);
    this.changeImage = this.changeImage.bind(this);
    this.state = { imageLoaded: false };
  }

  touchStart(event) {
    this.start = event.touches[0].pageX;
  }

  touchEnd(event) {
    const direction = this.start - event.changedTouches[0].pageX;

    if (direction > 10) {
      this.slider.slickNext();
    } else if (direction < -10) {
      this.slider.slickPrev();
    }
  }

  changeImage() {
    if (!this.state.imageLoaded) {
      this.setState({ imageLoaded: true });

      this.props.product.Photos.forEach((src) => {
        // Preload after delay to force load current image
        setTimeout(() => {
          const image = new Image();
          image.src = generatePhotoUrl(src, this.props.product);
        }, 150);
      });
    }
  }

  render() {
    return (
      <ProductGalleryStyled.Block>
        {!isEmpty(this.props.product.Photos) ?
          <ProductGalleryStyled.Component
            innerRef={(c) => { this.slider = c; }}
            {...settings}
            afterChange={this.changeImage}
            slickGoTo={this.props.currentGalleryPage}
            arrowsAlwaysVisible={this.props.arrowsAlwaysVisible}
          >
            {map(this.props.product.Photos, item => generatePhotoUrl(item, this.props.product)).map((item, key) =>
              <ProductGalleryStyled.Image key={key}>
                <img src={item} alt="" />
              </ProductGalleryStyled.Image>
            )}
          </ProductGalleryStyled.Component>
        : null}
      </ProductGalleryStyled.Block>
    );
  }
}

ProductGalleryComponent.propTypes = {
  currentGalleryPage: PropTypes.int,
  arrowsAlwaysVisible: PropTypes.bool,
  product: PropTypes.object,
};

ProductGalleryComponent.defaultProps = {
  currentGalleryPage: 0,
};

export default ProductGalleryComponent;
