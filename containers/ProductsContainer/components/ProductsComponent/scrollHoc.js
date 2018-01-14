import throttle from 'lodash/throttle';
import React, { PropTypes } from 'react';

const scrollHoc = (ProductsComponent) => {
  class ScrollHoc extends React.Component {
    constructor(props) {
      super(props);
      this.onScroll = throttle(this.onScroll.bind(this), 100);
    }

    componentWillMount() {
      window.addEventListener('scroll', this.onScroll);
    }

    componentWillUnmount() {
      window.removeEventListener('scroll', this.onScroll);
    }

    onScroll() {
      if (this.props.lazyLoadIsDisabled || this.props.limitIsReached) {
        return;
      }

      const currentPosition = window.innerHeight + window.pageYOffset;
      const documentHeight = document.body.offsetHeight;
      const negativeOffset = window.innerHeight * 2;
      const windowHeight = window.innerHeight
        || document.documentElement.clientHeight
        || document.body.clientHeight;
      const { onReachDocumentBottom, onReachLazyLoading } = this.props;

      /**
       * This multiplication is added because of window zoom-out to 80%
       */
      if (onReachDocumentBottom && currentPosition >= documentHeight - negativeOffset) {
        onReachDocumentBottom();
      }

      if (onReachLazyLoading && currentPosition + (windowHeight / 2) >= documentHeight - negativeOffset) {
        onReachLazyLoading();
      }
    }

    render() {
      return (
        <ProductsComponent
          {...this.props}
        />
      );
    }
  }

  ScrollHoc.propTypes = {
    onReachDocumentBottom: PropTypes.func.isRequired,
    onReachLazyLoading: PropTypes.func.isRequired,
    lazyLoadIsDisabled: PropTypes.bool.isRequired,
    limitIsReached: PropTypes.bool.isRequired,
  };

  return ScrollHoc;
};

export default scrollHoc;
