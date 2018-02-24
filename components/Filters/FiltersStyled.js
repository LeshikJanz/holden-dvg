import * as styles from 'template/styled/styles';
import * as mixins from 'template/styled/mixins';
import styled from 'styled-components';

export const Component = styled.div`
  padding: 0 ${styles.paddingLargeHorizontal};
  background: ${styles.white};
  display: flex;

  ${mixins.responsiveMixin().tablet` padding: 0; `}
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  color: ${styles.titleActive};
  font-weight: bold;
  font-size: ${styles.h3Size};
  line-height: calc(${styles.h3Size} * 1.618);
  margin-bottom: 4px;
  margin-right: ${styles.paddingBaseHorizontal};

  ${mixins.responsiveMixin().tablet` display: none; `}
`;

export const Left = styled.div`
  display: flex;
  flex: 2;
  ${mixins.responsiveMixin().tablet`
    justify-content: space-between;

    > div {
      flex: 1;
    }
  `}
`;

export const Right = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
  ${mixins.responsiveMixin().tablet` display: none; `}
`;

export const PriceFilter = styled.div`
  width: 140px;
  margin-right: ${styles.paddingBaseHorizontal};
  ${mixins.responsiveMixin().tablet`
    width: 80px;
  `}
`;

export const ColourFilter = styled.div`
  width: 140px;
  margin-right: ${styles.paddingBaseHorizontal};
  ${mixins.responsiveMixin().tablet`
    width: 80px;
  `}
`;

export const LocationFilter = styled.div`
  width: 150px;
  ${mixins.responsiveMixin().tablet`
    width: 80px;
  `}
`;

export const ConditionFilter = styled.div`
  ${mixins.responsiveMixin().tablet` display: none; `}
`;
