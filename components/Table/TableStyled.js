import * as styles from 'template/styled/styles';
import * as mixins from 'template/styled/mixins';
import styled from 'styled-components';

export const Table = styled.table`
  width: 100%;
`;

export const TableHeader = styled.thead`
`;

export const TableBody = styled.tbody`
`;

export const TableRow = styled.tr`
  background: ${styles.white};
  color: ${styles.nightsky};

  ${props => props.header ? `
    background: ${styles.bodyBackground};
    color: ${styles.label};
  ` : null}

  ${props => props.collapsed ? `
    background: ${styles.bodyBackground};
  ` : null}
`;

export const TableCol = styled.td`
  padding: ${styles.paddingBaseHorizontal};
  border: 1px solid ${styles.border};

  ${props => props.collapsed ? `
    padding: 0;
  ` : null}
`;
