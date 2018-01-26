import styled from 'styled-components';
import * as styles from 'template/styled/styles';
import bgHeader from 'template/assets/img/cover/holden-bg-header.jpg';
import bgRight from 'template/assets/img/cover/right-bg.jpg';
import bgLeft from 'template/assets/img/cover/left-bg.jpg';

export const Block = styled.div`
  background: transparent;
`;

export const Header = styled.div`
  width: 100%;
  min-height: 219px;
  min-width: 860px;
  background-repeat: no-repeat;
  background-size: contain;
  background-color: #fff;
  background-image: url(${bgHeader});
`;

export const LeftDrop = styled.div`
  position: absolute;
  left: 0;
  width: 100%;
  z-index: -1;
  height: 100%;
  background-repeat: no-repeat;
  background-size: contain;
  background-image: url(${bgLeft});
`;

export const RightDrop = styled.div`
  position: absolute;
  right: 0;
  z-index: -1;
  min-width: 200px;
  height: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(${bgRight});
`;

export const Component = styled.div`
  position: relative;
  width: 100%;
  min-width: 300px;
  max-width: 1170px;
  margin: 0 auto;
`;

export const Content = styled.div``;

export const Copyright = styled.p`
  text-align: center;
  padding: ${styles.paddingLargeVertical} 0;
`;
