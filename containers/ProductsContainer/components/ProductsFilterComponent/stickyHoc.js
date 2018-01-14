import React from 'react';
import Sticky from 'react-stickynode';

class StickyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.onStateChange = this.onStateChange.bind(this);
    this.onScroll = this.onScroll.bind(this);
    this.state = {
      componentFolded: false,
    };
  }

  onStateChange({ status }) {
    if (status === Sticky.STATUS_FIXED) {
      this.setState({ componentFolded: true });
    } else {
      this.setState({ componentFolded: false });
    }
  }

  componentWillMount() {
    window.addEventListener('scroll', this.onScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll);
  }

  onScroll() {
    setTimeout(() => {
      try {
        window.dispatchEvent(new Event('resize'));
      } catch (e) {
        const evt = document.createEvent('HTMLEvents');
        evt.initEvent('resize', true, true);
        document.dispatchEvent(evt);
      }
    }, 200);
  }

  shouldFreeze() {
    return false;
  }

  render() {
    const { innerZ, bottomBoundary, ...productsProps } = this.props;
    const type = this.state.componentFolded ? 'folded' : 'unfolded';
    return (
      <Sticky shouldFreeze={this.shouldFreeze} innerZ={innerZ} bottomBoundary={bottomBoundary} onStateChange={this.onStateChange}>
        {React.Children.map(this.props.children, thisArg =>
          React.cloneElement(thisArg.props.children, { ...productsProps, type })
        )}
      </Sticky>
    );
  }
}

export default StickyComponent;
