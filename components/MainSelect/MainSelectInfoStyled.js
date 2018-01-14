import * as styles from 'template/styled/styles';
import * as mixins from 'template/styled/mixins';
import styled from 'styled-components';

export const Component = styled.div`
  background: ${styles.white};
  padding: ${styles.paddingBaseHorizontal};
  display: none;
  border: 1px solid ${styles.vanilla};

  ${mixins.responsiveMixin().tablet`
    display: flex;
    align-items: center;
    justify-content: space-between;
  `}
`;

export const Image = styled.img`
  height: 32px;
`;

export const Title = styled.div`
  font-weight: bold;
`;

export const Clear = styled.div`
  color: ${styles.vanilla};
  cursor: pointer;
  font-weight: normal;

  & > i {
    font-weight: bold;
  }
`;
