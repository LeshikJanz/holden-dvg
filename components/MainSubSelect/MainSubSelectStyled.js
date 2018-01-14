import * as styles from 'template/styled/styles';
import * as mixins from 'template/styled/mixins';
import styled from 'styled-components';
import { darken } from 'polished';

export const Component = styled.div`
  ${props => props.isDisabled ? `
    position: relative;
  ` : null}
`;

export const DisableOverlay = styled.div`
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
`;

export const SelectItem = styled.div`
  ${mixins.responsiveMixin().default` width: calc(100% / 6);`}
  ${mixins.responsiveMixin().tablet` width: calc(100% / 3);`}
  padding: ${styles.paddingBaseHorizontal} 0;
  cursor: pointer;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;

  ${props => !props.isActive ? `
    background: ${styles.white};
    color: ${styles.titleActive};
    &:hover {
      background: ${darken(0.04, styles.white)};
    }
  ` : null}

  ${props => props.isActive ? `
    background: ${styles.linkActive};
    color: ${styles.white};
  ` : null}
`;

export const CarThumb = styled.div`
  font-weight: bold;
`;

export const CarThumbIcon = styled.div`
  margin-bottom: ${styles.paddingBaseHorizontal};
  height: 28px;

  & > img {
    max-height: 100%;
  }
`;

export const CarThumbTitle = styled.div`
  font-size: ${styles.smallSize};
`;
