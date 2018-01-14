import * as styles from 'template/styled/styles';
import styled from 'styled-components';

export const Component = styled.div`
  text-align: center;
  color: ${styles.titleActive};
`;

export const Image = styled.div``;

export const Title = styled.h1`
  font-size: ${styles.godSize};
  padding-top: calc(${styles.paddingLargeVertical} * 3);
`;

export const Text = styled.div`
  font-size: ${styles.h1Size};
  padding-bottom: calc(${styles.paddingLargeVertical} * 3);
`;
