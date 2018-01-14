import * as styles from 'template/styled/styles';
import * as mixins from 'template/styled/mixins';
import styled from 'styled-components';

export const Component = styled.div`
  margin-bottom: ${styles.paddingBaseHorizontal};
`;

export const Label = styled.div`
  font-weight: bold;
  font-size: ${styles.h3Size};
  text-transform: uppercase;
  color: ${styles.titleActive};
`;
