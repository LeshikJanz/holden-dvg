import * as styles from 'template/styled/styles';
import * as mixins from 'template/styled/mixins';
import styled from 'styled-components';

export const Component = styled.div`
  text-align: center;
`;

export const Header = styled.div`
  ${mixins.roundedMixin('4px')}

  cursor: pointer;
  color: ${styles.white};
  font-size: ${styles.h2Size};
  margin: 0 auto;
  padding: ${styles.paddingBaseHorizontal};
  display: flex;
  align-items: center;
  justify-content: center;
  border: 4px solid ${styles.white};

  i {
    margin-right: ${styles.paddingBaseHorizontal};
    font-size: ${styles.giantSize};
    font-weight: bold;
  }

  ${props => props.isVisible && `
    border-bottom-left-radius: 0 !important;
    border-bottom-right-radius: 0 !important;
    border-bottom: 0 !important;
  `}

  ${mixins.responsiveMixin().default`
    width: 24%;
    max-width: 320px;
  `};

  ${mixins.responsiveMixin().tablet`
    width: 100%;
    max-width: auto;
  `};
`;

export const Content = styled.div`
  border: 4px solid ${styles.white};
  width: 100%;
  ${props => props.contentWithoutPadding && `
    padding: ${styles.paddingLargeHorizontal};
  `};
  background: ${styles.white};

  ${props => !props.isVisible && `
    display: none;
  `}
`;
