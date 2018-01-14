import styled from 'styled-components';
import * as styles from 'template/styled/styles';

export const Component = styled.div`
  background: ${styles.white};
`;

export const Header = styled.div``;

export const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const Notification = styled.div`
  padding: ${styles.paddingLargeHorizontal};
`;

export const Form = styled.div`
  padding: ${styles.paddingLargeHorizontal};
  flex: 2;
`;

export const Description = styled.div`
  padding: ${styles.paddingLargeHorizontal};
  flex: 3;
`;
