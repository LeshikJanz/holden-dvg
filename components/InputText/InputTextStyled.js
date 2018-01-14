import * as styles from 'template/styled/styles';
import * as mixins from 'template/styled/mixins';
import styled from 'styled-components';

export const Component = styled.div`
  border: 1px solid ${styles.searchBorder};
  padding: ${styles.paddingLargeHorizontal};
  display: flex;
  background: ${styles.white};
  box-sizing: content-box;
  font-size: ${styles.h2Size};
  line-height: auto;

  ${mixins.responsiveMixin().tablet`
    padding: 0 ${styles.paddingLargeHorizontal};
  `}
`;

export const Icon = styled.div`
  margin-right: ${styles.paddingBaseHorizontal};
  display: flex;
  align-items: center;
`;

export const Search = styled.div`
  display: flex;
  width: 100%;

  & > input, & > textarea {
    border: 0;
    width: 100%;

    &::placeholder {
      color: $c-label;
    }
  }
`;
