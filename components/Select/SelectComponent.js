import React, { PropTypes } from 'react';
import * as SelectStyled from 'template/components/Select/SelectStyled';
import hoc from 'template/components/Select/hoc';
import map from 'lodash/map';

const Select = ({ children, onClick, defaultValue, isVisible, onVisibilityToggle, items, disabled }) => items ? (
  <SelectStyled.Component>
    <SelectStyled.Select disabled={disabled} onClick={onVisibilityToggle}>
      <SelectStyled.SelectItem>{items[defaultValue].value}</SelectStyled.SelectItem>
      <SelectStyled.SelectDropdown isVisible={isVisible}>
        {map(items, (item, key) =>
          <SelectStyled.SelectDropdownItem onClick={() => onClick(key)}>
            {typeof item.tag === 'function' ? item.tag() : null}
          </SelectStyled.SelectDropdownItem>
        )}
      </SelectStyled.SelectDropdown>
    </SelectStyled.Select>
    <SelectStyled.Icon>
      <i className="fa fa-caret-down" />
    </SelectStyled.Icon>
  </SelectStyled.Component>
) : null;

Select.propTypes = {
  children: PropTypes.shape().isRequired,
};

Select.defaultProps = {
  onClick: () => {},
};


export default hoc(Select);