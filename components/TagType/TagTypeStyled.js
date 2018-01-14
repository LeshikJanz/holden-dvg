import * as styles from 'template/styled/styles';
import * as mixins from 'template/styled/mixins';
import styled from 'styled-components';

export const Component = styled.div`
  display: flex;
`;

export const Content = styled.div`
  min-width: 0;
  width: 100%;
  padding: ${styles.paddingBaseHorizontal};
  margin-bottom: ${styles.paddingBaseVertical};
  background: ${styles.white};

  ${mixins.responsiveMixin().phone`
    padding: ${styles.paddingBaseVertical / 2};
    zoom: 0.7;
  `}
`;

export const Button = styled.div`
  ${props => props.isVisible && `
    display: none;
  `}

  width: 140px;
  height: 140px;
  padding: ${styles.paddingBaseHorizontal};
  background: rgba(0, 184, 224, 0.4);
  margin-bottom: ${styles.paddingBaseVertical};

  ${mixins.responsiveMixin().phone`
    display: none;
  `}
  ${mixins.responsiveMixin().tablet`
    display: none;
  `}
`;

export const TypeSelect = styled.div`
  ${mixins.responsiveMixin().tablet` display: none; `}
  width: 20%;
  margin-right: ${styles.paddingBaseHorizontal};
`;

export const TagPreview = styled.div`
  margin-bottom: ${styles.paddingBaseHorizontal};
`;

export const TagSelect = styled.div`
`;

export const Top = styled.div`
  height: 100%;
  text-transform: uppercase;
  color: ${styles.white};
  font-size: ${styles.giantSize};
  background: ${styles.linkActive};
  border-radius: ${styles.radius};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  flex-direction: column;
`;

export const Text = styled.div`
  ${mixins.responsiveMixin().tablet`
    display: none;
  `}
`;
