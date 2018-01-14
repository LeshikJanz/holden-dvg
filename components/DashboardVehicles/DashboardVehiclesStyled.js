import * as styles from 'template/styled/styles';
import * as mixins from 'template/styled/mixins';
import styled from 'styled-components';

export const Component = styled.div`
`;

export const Heading = styled.div`
  font-size: ${styles.h2Size};
  color: ${styles.label};
  font-weight: bold;
  margin-bottom: ${styles.paddingLargeHorizontal};
`;

export const Search = styled.div`
`;

export const Selection = styled.div`
  font-weight: bold;
  cursor: pointer;
  color: ${styles.label};
`;
