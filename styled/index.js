import { withProps } from 'recompose';
import * as styles from 'template/styled/styles';
import styled from 'styled-components';

const enhance = withProps(() => ({
  variables: styles,
}));

export const div = enhance(styled.div);

export default {
  div,
};
