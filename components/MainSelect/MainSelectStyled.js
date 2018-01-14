import * as styles from 'template/styled/styles';
import * as mixins from 'template/styled/mixins';
import styled from 'styled-components';
import { darken } from 'polished';

export const Component = styled.div`
  background: ${styles.white};
  ${props => props.isDisabled && `
    position: relative;
  `}
`;

export const DisableOverlay = styled.div`
  ${mixins.roundedMixin('4px')}
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.2);
`;

export const Select = styled.div`
  ${mixins.roundedMixin('4px')}
  display: flex;
  flex-wrap: wrap;
  &>div:first-child > div > div:first-child {
    height: 80px;
  }
`;

export const SelectItem = styled.div`
  ${mixins.responsiveMixin().default` width: calc(100% / 6);`}
  ${mixins.responsiveMixin().tablet` width: 100%;`}

  ${mixins.responsiveMixin().default` height: 140px;`}
  ${mixins.responsiveMixin().tablet`
    height: auto;
    &:not(:last-child) {
      border-bottom: 1px solid ${styles.linkActive};
    }
  `}

  cursor: pointer;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  opacity: 0.6;

  ${props => !props.isActive && `
    &:hover {
      color: ${darken(0.04, styles.selected)};
      opacity: 1;
    }
  `}

  ${props => props.isActive && `
    color: ${styles.selected};
    opacity: 1;
    font-weight: bold;
  `}
`;

export const CarThumb = styled.div`
  width: 100%;
  ${mixins.responsiveMixin().tablet`
    display: flex;
    align-items: center;
    justify-content: left;
    height: 48px;
  `}
`;

export const CarThumbIcon = styled.div`
  ${mixins.responsiveMixin().default`
    margin-bottom: ${styles.paddingBaseHorizontal};
    height: 50px;
  `}
  ${mixins.responsiveMixin().tablet`
    margin-bottom: 0;
    height: auto;
  `}
  padding: ${styles.paddingBaseVertical} ${styles.paddingBaseHorizontal};

  & > img {
    max-width: 80%;
    ${mixins.responsiveMixin().tablet`
      width: 80px;
    `}
  }
`;

export const CarThumbTitle = styled.div`

`;

export const Dot = styled.div`
  ${mixins.responsiveMixin().default` display: none;`}
  ${mixins.responsiveMixin().tablet` display: block;`}

  position: absolute;
  right: 0;
  padding: ${styles.paddingBaseHorizontal};
`;
