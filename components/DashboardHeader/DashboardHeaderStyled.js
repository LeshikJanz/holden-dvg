import * as styles from 'template/styled/styles';
import * as mixins from 'template/styled/mixins';
import styled from 'styled-components';

export const Component = styled.div`
  display: flex;
  justify-content: space-between;
  background: ${styles.linkActive};
  padding: ${styles.paddingLargeHorizontal};
  color: ${styles.white};
`;

export const Content = styled.div`
  width: 70%;
  margin-right: ${styles.paddingLargeHorizontal};
`;

export const Action = styled.div`
  max-width: 240px;
  text-align: right;
`;

export const Heading = styled.div`
  font-size: ${styles.giantSize};
`;
