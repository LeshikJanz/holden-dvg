import React from 'react';
import styled, { keyframes } from 'styled-components';

const anim = keyframes`
  from { width: 0%; }
  to { width: 100%; }
`;

export const Loading = styled.div`
  width: 0%;
  background-color: gray;
  height: 20px;
  animation: ${anim} 10s linear infinite;
`;

class Routes extends React.Component {
	constructor(props) {
	  super(props);
	  this.state = {
      loadingCss: true
    };

    this.delayedCssState = () => {
      setTimeout(() =>
        this.setState({ loadingCss: false })
      , 200);
    };
  }

	componentWillMount() {
    const nodes = document.head.childNodes;
	  const cssLink = [...nodes].filter(elem =>
      elem.nodeName === 'LINK' && (elem.href || '').indexOf('bundle.css') !== -1
    )[0];
	  // if css wasn't loaded yet
	  // http://keithclark.co.uk/articles/loading-css-without-blocking-render/
	  if (cssLink.media !== 'all') {
      cssLink.onload = function () {
        cssLink.media = 'all';
        this.delayedCssState();
      };

      // if onload is not triggered for any reason
      setTimeout(() => {
        cssLink.media = 'all';
        this.delayedCssState();
      }, 2000);
	  } else {
      this.delayedCssState();
	  }
	}

	render() {
	  if (this.state.loadingCss) {
      return (<Loading />);
    }

	  return this.props.children;
	}
}

export default Routes;
