import React, { Component } from 'react';
import debounce from 'lodash/debounce';

export default (ResponsiveComponent) => class ResponsiveHOC extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.update = debounce(this.update.bind(this));
  }

  componentDidMount() {
    this.update();
    window.addEventListener('resize', this.update);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.update);
  }

  update() {
    this.setState({
      width: window.innerWidth,
      height: window.innerHeight
    });
  }

  render() {
    const { width, height } = this.state;
    return (
      <ResponsiveComponent
        responsive={{
          window: { width, height }
        }}
        {...this.props}
      />
    );
  }
};
