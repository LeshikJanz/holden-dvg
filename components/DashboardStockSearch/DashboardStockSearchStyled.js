import * as styles from 'template/styled/styles';
import * as mixins from 'template/styled/mixins';
import styled from 'styled-components';

export const Component = styled.div`
  display: flex;
  background: ${styles.white};
`;

export const Content = styled.div`
  width: 40%;
  margin-right: ${styles.paddingLargeHorizontal};
`;

export const Description = styled.div`
  width: 60%;
  display: flex;
  align-items: center;
`;

export const Note = styled.div`
  color: ${styles.label};
`;

export const Search = styled.div`
`;
