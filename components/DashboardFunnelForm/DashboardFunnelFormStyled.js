import * as styles from 'template/styled/styles';
import * as mixins from 'template/styled/mixins';
import styled from 'styled-components';

export const Component = styled.div`
  background: ${styles.white};
`;

export const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: -${styles.paddingLargeHorizontal};
`;

export const ContentItem = styled.div`
  width: 50%;
  padding: ${styles.paddingLargeHorizontal};

  ${props => props.full ? `
    width: 100%;
  ` : null}
`;
