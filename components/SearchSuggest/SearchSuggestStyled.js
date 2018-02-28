import * as styles from 'template/styled/styles';
import * as mixins from 'template/styled/mixins';
import styled from 'styled-components';

export const Component = styled.div`
  ${mixins.roundedMixin('4px')}
  background: ${styles.white};
  max-height: 240px;
  overflow-y: scroll;
  z-index: 5;
  margin-top: ${styles.paddingBaseHorizontal};
  border: 1px solid $c-border;
`;

export const Suggest = styled.div`
`;

export const SuggestItem = styled.div`
  padding: ${styles.paddingBaseHorizontal} ${parseInt(styles.paddingLargeHorizontal, 10) * 2}px;
  cursor: pointer;
  color: ${styles.border};

  &:not(:last-child) {
    border-bottom: 1px solid ${styles.border};
    color: #858585;
  }

  &:hover {
    background: ${styles.label};
    color: ${styles.white};
  }

  ${props => parseInt(props.level, 10) === 1 && `
    font-weight: bold;
    color: #333 !important;
  `}

  ${mixins.responsiveMixin().tablet`
    padding: ${styles.paddingBaseHorizontal} ${styles.paddingLargeHorizontal};
  `}
`;
