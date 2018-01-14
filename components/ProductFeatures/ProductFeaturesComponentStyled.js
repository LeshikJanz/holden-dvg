import * as styles from 'template/styled/styles';
import * as mixins from 'template/styled/mixins';
import styled from 'styled-components';

export const Component = styled.div`
  color: ${styles.eveningsky};

  h3 {
    text-transform: uppercase;
    color: ${styles.label};
    padding: ${styles.paddingLargeVertical} 0;
  }
`;

export const Header = styled.div`
  text-align: center;
  display: flex;
  justify-content: space-between;
  cursor: pointer;
`;

export const Title = styled.div`
  font-size: ${styles.h1Size};
  color: ${styles.titleActive};
  text-transform: uppercase;
  font-weight: bold;
`;

export const Subtitle = styled.div`
  font-size: ${styles.h3Size};
  color: ${styles.linkActive};
  text-transform: uppercase;
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-around;
  border-top: 1px solid ${styles.border};
  margin: ${styles.paddingLargeVertical} -${styles.paddingLargeHorizontal};
  padding: ${styles.paddingLargeHorizontal};

  ${mixins.responsiveMixin().tablet`
    display: block;
  `}
`;

export const Column = styled.div`
  width: 27%;

  ${mixins.responsiveMixin().tablet`
    width: 100%;
  `}

  & > div {
    margin-bottom: calc(${styles.paddingLargeVertical} * 3);
  }
`;

export const Feature = styled.div`
  padding: ${styles.paddingLargeVertical} 0;

  strong {
    font-weight: bold;
  }
`;

export const Rating = styled.div`
  display: inline-block;
  background: ${styles.darkYellow};
  padding: ${styles.paddingLargeVertical} ${styles.paddingBaseHorizontal};
  border-radius: ${styles.radius};
  width: 90px;
  color: ${styles.white};
`;

export const Help = styled.div`
  display: inline-block;
  color: ${styles.white};
  background: ${styles.searchBorder};
  margin-left: ${styles.paddingBaseHorizontal};
  text-align: center;
  font-weight: 700;
  width: 25px;
  height: 25px;
  line-height: 25px;
  border-radius: 50%;
  cursor: default;

  & > span {
    position: absolute;
    background: ${styles.label};
    display: none;
    border-radius: ${styles.radius};
    padding: 0 ${styles.paddingXsHorizontal};
    margin: -25px 0 0 calc(25px + ${styles.paddingXsHorizontal});
  }

  &:hover {
    & > span {
      display: block;
    }
  }
`;
