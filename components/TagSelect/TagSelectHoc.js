import React from 'react';

const width = window.innerWidth
|| document.documentElement.clientWidth
|| document.body.clientWidth;

const scrollPx = Math.round(width * 0.3);

const getScrollLeftPosition = (element) => (
  element.scrollLeft + scrollPx > element.scrollWidth - element.clientWidth) ?
   (element.scrollWidth - element.clientWidth) :
   element.scrollLeft + scrollPx;

const getScrollRightPosition = (element) => (element.scrollLeft < scrollPx) ? 0 :
  element.scrollLeft - scrollPx;

const tagSelectHoc = (query, ProductItemComponent) => {
  class TagSelectHoc extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        scroll: 0,
      };

      this.scrollLeft = this.scrollLeft.bind(this);
      this.scrollRight = this.scrollRight.bind(this);
    }

    componentDidMount() {
      this.scrolledElement = document.querySelector(query);
    }

    smoothScroll(change) {
      const stop = this.scrolledElement.scrollLeft + change;
      let amount = 0;
      clearInterval(this.int);

      this.int = setInterval(() => {
        this.scrolledElement.scrollLeft += change / 10;
        amount += 1;
        const reached = stop === this.scrolledElement.scrollLeft;
        if (reached || amount === 10) {
          clearInterval(this.int);
        }
      }, 12);
    }

    scrollLeft() {
      const scroll = getScrollLeftPosition(this.scrolledElement);
      this.smoothScroll(scrollPx);
      this.setState({ scroll });
    }

    scrollRight() {
      const scroll = getScrollRightPosition(this.scrolledElement);
      this.smoothScroll(-scrollPx);
      this.setState({ scroll });
    }

    scrollLeftIsVisible() {
      if (!this.scrolledElement) {
        return false;
      }
      return this.state.scroll !== this.scrolledElement.scrollWidth - this.scrolledElement.clientWidth;
    }

    scrollRightIsVisible() {
      return this.state.scroll !== 0;
    }

    render() {
      return (
        <ProductItemComponent
          scrollLeftIsVisible={this.scrollLeftIsVisible()}
          scrollRightIsVisible={this.scrollRightIsVisible()}
          scrollRight={this.scrollRight}
          scrollLeft={this.scrollLeft}
          {...this.props}
        />
      );
    }
  }

  TagSelectHoc.propTypes = {
  };

  return TagSelectHoc;
};

export default tagSelectHoc;
