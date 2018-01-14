import get from 'lodash/get';
import { css } from 'styled-components';
import { darken } from 'polished';

export const backgroundHoverMixin = (background) => css`
  background: ${background};
  &:hover {
    background: ${darken(0.04, background)};
  }
`;

export const roundedMixin = (radius) => css`
  -webkit-border-radius: ${radius};
  -moz-border-radius: ${radius};
  border-radius: ${radius};
`;

export const responsiveMixin = () => {
  const sizes = {
    default: 99999,
    desktop: 992,
    tablet: 768,
    phone: 376,
  };

  // Iterate through the sizes and create a media template
  const media = Object.keys(sizes).reduce((acc, label) => {
    acc[label] = (...args) => css`
      @media (max-width: ${sizes[label] / 16}em) {
        ${css(...args)}
      }
    `;
    return acc;
  }, {});

  return media;
};
