import React, { PropTypes } from 'react';
import css from 'services/cssService';
import cssStyles from 'template/components/ColourFilter/_ColourFilterComponent.scss';
import SelectComponent from 'template/components/Select/SelectComponent';
import styled from 'styled-components';
import hoc from 'template/components/ColourFilter/hoc';
import * as styles from 'template/styled/styles';
import * as mixins from 'template/styled/mixins';
import eq from 'lodash/eq';

const Color = styled.span`
  ${mixins.roundedMixin('4px')}
  width: 40px;
  height: 16px;
  display: inline-block;
  border: 1px solid ${styles.selected};
  ${props => props.color && `
    background: ${props.color};
  `}
`;

const dropdown = {
  All: {
    value: 'All colors',
    tag: () => <div>All colors</div>,
  },
  Black: {
    value: 'Black',
    tag: () => <div>Black <Color color="#000000" /></div>,
  },
  Blue: {
    value: 'Blue',
    tag: () => <div>Blue <Color color="#284fbc" /></div>,
  },
  Red: {
    value: 'Red',
    tag: () => <div>Red <Color color="#ea0a2a" /></div>,
  },
  White: {
    value: 'White',
    tag: () => <div>White <Color color="#ffffff" /></div>,
  },
  Grey: {
    value: 'Grey',
    tag: () => <div>Grey <Color color="#727272" /></div>,
  },
  Yellow: {
    value: 'Yellow',
    tag: () => <div>Yellow <Color color="#fde800" /></div>,
  },
  Bronze: {
    value: 'Bronze',
    tag: () => <div>Bronze <Color color="#b55825" /></div>,
  },
  Green: {
    value: 'Green',
    tag: () => <div>Green <Color color="#1ea90f" /></div>,
  },
};

class ColourFilterComponent extends React.Component {
  shouldComponentUpdate(nextProps) {
    return (!eq(nextProps.selectedColors, this.props.selectedColors));
  }

  componentWillReceiveProps(nextProps) {
    if (!eq(nextProps.selectedColors, this.props.selectedColors)) {
      this.props.updateProductColor({ key: 'GenericColour', color: 'asphalt', title: nextProps.selectedColors[0] });
    }
  }

  render() {
    return (
      <div styleName="filter">
        <SelectComponent
          onChange={this.props.onColorToggle}
          defaultValue={this.props.selectedColors[0]}
          items={dropdown}
        />
      </div>
    );
  }
}

ColourFilterComponent.propTypes = {
  productsColor: PropTypes.string.isRequired,
  updateProductColor: PropTypes.func.isRequired,
};

export default hoc(css(ColourFilterComponent, cssStyles));
