import React, { PropTypes } from 'react';
import css from 'services/cssService';
import styles from 'template/components/ProductHeader/ProductHeaderComponent.scss';

class ProductHeaderComponent extends React.Component {
  componentWillMount() {
    window.addEventListener('keydown', this.keydown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.keydown);
  }

  keydown(e) {
    const event = e || window.event;
    if (event.keyCode === 27) {
      this.props.goBack();
    }
  }

  render() {
    return (
      <div styleName="block">
        <div styleName="component">
          <div styleName="component-left">
            <button styleName="button" onClick={this.props.goBack}>Return to More Cars</button>
          </div>
        </div>
      </div>
    );
  }
}

ProductHeaderComponent.propTypes = {
  goBack: PropTypes.func.isRequired,
};

export default css(ProductHeaderComponent, styles);
