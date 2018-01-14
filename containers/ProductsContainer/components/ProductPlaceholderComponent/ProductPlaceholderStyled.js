import * as styles from 'template/styled/styles';
import styled from 'styled-components';

export const Component = styled.div`
  width: 100%;
  height: 400px;
  border: 1px solid ${styles.border};
  overflow: hidden;
  background: ${styles.white};
  padding: ${styles.paddingBaseHorizontal};
`;

export const Line = styled.div`
  height: 16px;
  background: ${styles.border};
  margin-bottom: ${styles.paddingBaseHorizontal};

  ${props => props.width ? `
    width: ${props.width}%;
  ` : null}
`;
