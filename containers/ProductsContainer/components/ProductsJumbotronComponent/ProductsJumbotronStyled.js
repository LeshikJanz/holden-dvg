import * as styles from 'template/styled/styles';
import styled from 'styled-components';
import bgImage from 'template/assets/img/cover/skoda-bg.jpg';
import bgSkodaCover from 'template/assets/img/cover/skoda-bg-cover.png';
import bgImageSpecial from 'template/assets/img/cover/cover-special.jpg';

export const Component = styled.div`
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  background-image: url(${bgImage});
`;

export const Jumbotron = styled.div`
  background-color: ${styles.gray};
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  padding: calc(${styles.paddingLargeHorizontal} * 3);
  padding-bottom: 180px;
  background-image: url(${bgSkodaCover});
  
  ${props => props.background && props.background.length && `
    background-image: url(${bgImageSpecial});
    min-height: 560px;
  `}
`;

export const JumbotronContent = styled.div`
  & > *:not(:last-child) {
    margin-bottom: calc(${styles.paddingLargeHorizontal} * 2);
  }
`;

export const Placeholder = styled.div`
  @media (max-width: 768px) {
    height: 100px;
  }
`;

export const MobileCondition = styled.div`
  display: none;
  padding-bottom: $padding-base-horizontal;

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    zoom: 0.8;
  }
`;

export const Headline = styled.div`
  font-size: ${styles.giantSize};
  font-weight: bold;
  color: ${styles.white};
  text-align: center;
  letter-spacing: 3px;

  @media (max-width: 768px) {
    display: none;
  }

  ${props => props.isHidden && `
    visibility: hidden;
  `}
`;


export const Promotion = styled.div`
  text-align: center;
`;

export const PromotionButton = styled.a`
  color: ${styles.white};
  background: none;
  &:hover { color: ${styles.white}; }
  display: inline-block;

  img {
    display: block;
    width: 450px;
    max-width: 100%;
  }
`;
