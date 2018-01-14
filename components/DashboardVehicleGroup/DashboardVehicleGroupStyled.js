import * as styles from 'template/styled/styles';
import * as mixins from 'template/styled/mixins';
import styled from 'styled-components';

export const Component = styled.div`
`;

export const Heading = styled.div`
  font-size: ${styles.h2Size};
  color: ${styles.label};
  font-weight: bold;
  margin-bottom: ${styles.paddingLargeHorizontal};
`;

export const Group = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: -${styles.paddingBaseHorizontal};
`;

export const GroupItem = styled.div`
  padding: ${styles.paddingBaseHorizontal};
`;

export const Vehicle = styled.div`
  display: flex;
`;

export const VehicleText = styled.div`
`;

export const VehicleAction = styled.div`
  margin-left: ${styles.paddingBaseHorizontal}
`;
