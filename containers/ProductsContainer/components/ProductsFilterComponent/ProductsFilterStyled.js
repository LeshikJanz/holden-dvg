import * as styles from 'template/styled/styles';
import styled from 'styled-components';

export const Block = styled.div``;

export const Component = styled.div`
  background: ${styles.white};
`;

export const MobileTopScroll = styled.button`
  background: rgba(0, 184, 224, 0.7);
  display: block;
  position: fixed;
  padding: ${styles.paddingBaseHorizontal};
  bottom: 0;
  left: 0;
  z-index: 3;
  zoom: 0.85;
  width: 100%;
  color: ${styles.white};
  font-size: ${styles.h1Size};
  transition: transform 500ms ease-in;
  img {
    width: ${styles.h1Size};
    margin-left: ${styles.paddingBaseHorizontal};
  }

  ${props => props.showScrollToTop ? `
    transform: translateY(0);
  ` : `
    transform: translateY(60px);
  `}
`;
