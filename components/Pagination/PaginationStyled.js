import * as styles from 'template/styled/styles';
import styled from 'styled-components';

export const Component = styled.div`
`;

export const Pagination = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: -${styles.paddingLargeHorizontal};
`;

export const PaginationItem = styled.div`
  background: ${styles.bodyBackground};
  padding: ${styles.paddingBaseHorizontal};
  cursor: pointer;
  margin: ${styles.paddingSmallHorizontal};

  ${props => props.isActive ? `
    background: ${styles.linkActive};
  ` : null}
`;
