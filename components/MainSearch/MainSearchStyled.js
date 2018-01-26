import * as styles from 'template/styled/styles';
import * as mixins from 'template/styled/mixins';
import styled from 'styled-components';

export const Block = styled.div`
  width: 100%;
  height: 100%;
`;

export const Component = styled.div`
  width: 100%;
  display: flex;
  box-sizing: border-box;
  line-height: auto;
  height: 100%;
  overflow: hidden;

  ${props => props.isSuggestVisible && `
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  `}
`;

export const Search = styled.div`
  ${mixins.roundedMixin('4px')}
  display: flex;
  width: 100%;
  background: ${styles.white};
  margin-right: 4px;

  & > input {
    font-size: ${styles.h3Size};
    color: #858585;
    line-height: calc(${styles.h3Size} * 1.618);
    border: 0;
    background: transparent;
    height: 100%;
    max-height: 60px;

    &::placeholder {
      color: #858585;
    }

    ${mixins.responsiveMixin().tablet`
      font-size: ${styles.baseSize} !important;
    `}
  }
`;

export const Button = styled.button`
  ${mixins.roundedMixin('4px')}
  height: 100%;
  background: #fff;
  font-size: ${styles.h2Size};
  color: #dc0000;
  font-weight: bold;
  text-transform: uppercase;
  padding: 0 calc(${styles.paddingLargeHorizontal} * 2);
  &:hover {
    color: #777;
    &:not([disabled]) {
      color: #fff;
      background: #242d59;
    }
  }
  &[disabled] {
    opacity: 1;
    color: #fff;
  }

  ${props => props.isDisabled && `
    background: #777;
  `}

  ${mixins.responsiveMixin().tablet`
    font-size: ${styles.baseSize} !important;
    padding: 0 calc(${styles.paddingBaseHorizontal});
  `}
`;
