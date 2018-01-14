import * as styles from 'template/styled/styles';
import * as mixins from 'template/styled/mixins';
import styled from 'styled-components';
import Slider from 'react-slick';

export const Block = styled.div``;

export const Component = styled(Slider)`
  position: relative;
  display: block;
  box-sizing: border-box;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -ms-touch-action: pan-y;
  touch-action: pan-y;
  -webkit-tap-highlight-color: transparent;
  z-index: 0;

  .slick-slide {
    .slick-initialized & {
      display: block;
    }
  }

  &.slick-initialized .slick-slide {
    display: block;
  }


  &.slick-initialized.slick-slider {
    min-height: 230px;
    display: flex;
    align-items: center;
    justify-content: center;

    &:before {
      position: absolute;
      left: 50%;
      top: 50%;
      font-size: 30px;
      margin-left: -15px;
      margin-top: -30px;
      font-family: FontAwesome;
      content: "\f110";
      -webkit-animation: fa-spin 1s infinite steps(8);
      animation: fa-spin 1s infinite steps(8);
    }
  }


  .slick-list {
    position: relative;
    overflow: hidden;
    display: block;
    margin: 0;
    padding: 0;
  }

  .slick-track,
  .slick-list {
    -webkit-transform: translate3d(0, 0, 0);
    -moz-transform: translate3d(0, 0, 0);
    -ms-transform: translate3d(0, 0, 0);
    -o-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }

  .slick-track {
    position: relative;
    left: 0;
    top: 0;
    display: block;
  }

  .slick-track:before {
    content: "";
    display: table;
  }

  .slick-track:after {
    content: "";
    display: table;
    clear: both;
  }

  .slick-slide {
    float: left;
    min-height: 3px;
    display: none;

    img {
      display: block;
      width: 100%;
    }
  }

  .slick-slide.slick-loading img {
    display: none;
  }

  .slick-slide.dragging img {
    pointer-event: none;
  }

  .slick-arrow.slick-hidden {
    display: none;
  }

  .slick-prev,
  .slick-next {
    position: absolute;
    display: block;
    height: 40px;
    width: 70px;
    line-height: 0px;
    font-size: 0px;
    cursor: pointer;
    background: black;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    font-weight: bold;
    color: transparent;
    top: 0;
    padding: 0;
    border: none;
    outline: none;
    z-index: 1;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;

    ${props => props.arrowsAlwaysVisible ? `
      opacity: 0.7;
    ` : null}

    &:hover,
    &:focus {
      outline: none;
      background: black;
      color: transparent;

      &:before {
        opacity: 1;
      }
    }

    &.slick-disabled:before {
      opacity: 0.3;
    }

    &:before {
      font-family: inherit;
      font-size: 20px;
      line-height: 1;
      color: white;
      opacity: 0.8;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }
  }

  &:hover {
    .slick-prev,
    .slick-next {
      opacity: 0.7;
    }
  }

  .slick-prev {
    left: 10px;
    top: 50%;

    &:before {
      content: "<";
    }
  }

  .slick-next {
    right: 10px;
    top: 50%;

    &:before {
      content: ">";
    }
  }
`;

export const Image = styled.div`
  & > img {
    display: block;
  }

  ${mixins.responsiveMixin().tablet`
    & > img {
      width: 100%;
    }
  `}
`;
