import * as styles from 'template/styled/styles';
import * as mixins from 'template/styled/mixins';
import styled from 'styled-components';

export const Component = styled.div`
  display: flex;
  background: ${styles.bodyBackground};
  padding: ${styles.paddingLargeHorizontal};
`;

export const Content = styled.div`
  width: 70%;
  margin-right: ${styles.paddingLargeHorizontal};
`;

export const Action = styled.div`
  width: 30%;
  text-align: right;
`;

export const Heading = styled.div`
  font-size: ${styles.h3Size};
  color: ${styles.label};
`;

export const Select = styled.div`
  font-size: ${styles.h3Size};
  color: ${styles.linkActive};
  cursor: pointer;
`;
