import * as styles from 'template/styled/styles';
import * as mixins from 'template/styled/mixins';
import styled from 'styled-components';

export const Preview = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -${styles.paddingXsHorizontal};

  ${mixins.responsiveMixin().phone`
    flex-wrap: nowrap;
    overflow: hidden;
    overflow-x: scroll;
  `}
`;

export const Item = styled.div`
  margin: 0 ${styles.paddingXsHorizontal};
`;
