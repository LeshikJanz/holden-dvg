import * as styles from 'template/styled/styles';
import styled from 'styled-components';

export const Component = styled.div`
  padding: ${styles.paddingBaseHorizontal};
  color: ${styles.white};
  background: ${styles.green};

  ${props => props.color === 'red' ? `
    color: ${styles.white};
    background: ${styles.pink};
  ` : null}
`;

export const Text = styled.div`
`;
