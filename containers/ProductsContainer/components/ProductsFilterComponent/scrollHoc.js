import React, { PropTypes } from 'react';
import throttle from 'lodash/throttle';

const scrollHoc = (ProductsFilterComponent) => {
  class ScrollHoc extends React.Component {
    constructor(props) {
      super(props);
      this.onScroll = throttle(this.onScroll.bind(this), 100);
      this.state = { showScrollToTop: false };
    }

    componentWillMount() {
      window.addEventListener('scroll', this.onScroll);
    }

    componentWillUnmount() {
      window.removeEventListener('scroll', this.onScroll);
    }

    onScroll() {
      if (document.body.scrollTop > 300) {
        this.setState({
          showScrollToTop: true
        });
      } else {
        this.setState({
          showScrollToTop: false
        });
      }
    }

    render() {
      return (
        <ProductsFilterComponent
          showScrollToTop={this.state.showScrollToTop}
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
