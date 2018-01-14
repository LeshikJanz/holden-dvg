import * as styles from 'template/styled/styles';
import * as mixins from 'template/styled/mixins';
import styled from 'styled-components';

export const Component = styled.div`
  position: relative;
`;

export const Select = styled.div`
  ${mixins.roundedMixin('4px')}
  white-space: nowrap;
  border: 1px solid ${styles.borderThick};
  height: 48px;
  color: ${styles.titleActive};
  font-weight: bold;
  background: ${styles.white};
  cursor: pointer;
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  padding: ${styles.paddingBaseHorizontal};
`;

export const Icon = styled.div`
  position: absolute;
  top: 36%;
  right: ${styles.paddingBaseHorizontal};
  color: ${styles.titleActive};
  ${mixins.responsiveMixin().phone`
    display: none;
  `};
`;

export const SelectItem = styled.div`
  overflow: hidden;
  width: 100%;
  text-overflow: ellipsis;

  ${mixins.responsiveMixin().tablet`
    font-size: ${styles.smallSize};
  `};
`;

export const SelectDropdown = styled.div`
  ${mixins.roundedMixin('4px')}
  white-space: nowrap;
  position: absolute;
  top: 50px;
  left: 0;
  z-index: 5;
  border: 1px solid ${styles.borderThick};
  background: ${styles.white};
  overflow: hidden;
  min-width: 100%;

  ${props => !props.isVisible && `
    display: none;
  `}
`;

export const SelectDropdownItem = styled.div`
  padding: ${styles.paddingSmallVertical} ${styles.paddingBaseHorizontal};
  display: flex;
  align-items: center;

  div {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &:hover {
    background: ${styles.linkActive};
  }
`;
