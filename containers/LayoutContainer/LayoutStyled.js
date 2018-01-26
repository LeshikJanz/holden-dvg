import styled from 'styled-components';
import * as styles from 'template/styled/styles';
import bgHeader from 'template/assets/img/cover/holden-bg-header.jpg';

export const Block = styled.div`
  background: transparent;
`;

export const Header = styled.div`
  width: 100%;
  max-height: 220px;
  height: 100%;
  background-repeat: no-repeat;
  background-size: contain;
  background-image: url(${bgHeader});
`;

export const Component = styled.div`
  width: 100%;
  max-width: 1170px;
  padding: ${styles.paddingLargeHorizontal};
  margin: 0 auto;
`;

export const Content = styled.div``;

export const Copyright = styled.p`
  text-align: center;
  padding: ${styles.paddingLargeVertical} 0;
`;
