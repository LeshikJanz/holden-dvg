import * as styles from 'template/styled/styles';
import * as mixins from 'template/styled/mixins';
import styled from 'styled-components';

export const Component = styled.div`
`;

export const Header = styled.div`
`;

export const Notification = styled.div`
  padding: ${styles.paddingLargeHorizontal};
`;

export const Categories = styled.div`
`;

export const Funnels = styled.div`
  padding: ${styles.paddingLargeHorizontal};
`;

export const Actions = styled.div`
  padding: ${styles.paddingBaseHorizontal};
  display: flex;

  & > *:not(:last-child) {
    margin-right: ${styles.paddingLargeHorizontal};
  }
`;
