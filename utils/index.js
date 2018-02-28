import round from 'lodash/round';
import replace from 'lodash/replace';

export const roundEngineSize = (size) => round(size / 1000, 1);

export const roundProductPrice = (price) => replace(price, /\B(?=(?:\d{3})+$)/g, ',');

export const smoothScroll = (axis) => {
  const top = window.pageYOffset || document.documentElement.scrollTop;
  if (top < axis) {
    let i = top;
    const int = setInterval(() => {
      window.scrollTo(0, i);
      i += axis / 30;
      if (i >= axis) {
        clearInterval(int);
      }
    }, 12);
  } else {
    window.scrollTo(0, axis);
  }
};

export const defaultScroll = (axis) => {
  window.scrollTo(0, axis);
};

export const isMobile = () => document.body.clientWidth < 768;

const isNotFoundPicture = photoUrl => photoUrl.indexOf("imgur.com") >= 0

export const generatePhotoThumbsUrl = (photo, product) => isNotFoundPicture(photo) ? photo : `${API_ENDPOINT}/images/${product.StockNumber}/thumbs/${photo.replace(/^.*[\\\/]/, '').split(/[?#]/)[0]}`;
export const generatePhotoUrl = (photo, product) => isNotFoundPicture(photo) ? photo : `${API_ENDPOINT}/images/${product.StockNumber}/${photo.replace(/^.*[\\\/]/, '').split(/[?#]/)[0]}`;

export const _generatePhotoThumbsUrl = (photo, product) => photo;
export const _generatePhotoUrl = (photo, product) => photo;