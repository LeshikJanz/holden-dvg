import * as styles from 'template/styled/styles';
import * as mixins from 'template/styled/mixins';
import styled from 'styled-components';
import Slider from 'react-slick';

export const Block = styled.div``;

export const Component = styled(Slider)`
  // display: flex;
  overflow-x: scroll;
  &::-webkit-scrollbar {
    display: none;
  }

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

  .slick-slide {
    .slick-loading & {
      visibility: hidden;
      background: #fff slick-image-url("ajax-loader.gif") center center no-repeat;
    }

    .slick-initialized & {
      display: block;
    }
  }

  &.slick-initialized .slick-slide {
    display: block;
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
    height: 100%;
    min-height: 1px;
    display: none;

    img {
      display: block;
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
    color: transparent;
    top: 0;
    padding: 0;
    border: none;
    outline: none;
    z-index: 1;

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

  .slick-prev {
    left: 0;

    &:before {
      content: "<";
    }
  }

  .slick-next {
    right: 0;

    &:before {
      content: ">";
    }
  }

  ${mixins.responsiveMixin().phone`
    width: 100%;
    height: auto;
  `}
`;

export const ComponentItem = styled.div`
  display: block;
  //flex-shrink: 0;
`;

// export const Thumb = styled.div`
//   height: 100%;
//
//   & > img {
//     height: 100%;
//     display: block;
//   }
// `;
