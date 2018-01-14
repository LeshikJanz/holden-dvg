import * as styles from 'template/styled/styles';
import * as mixins from 'template/styled/mixins';
import styled from 'styled-components';
import { darken } from 'polished';

export const Component = styled.div`
  display: inline-block;

  & + & {
    margin-left: ${styles.paddingLargeHorizontal};
  }

  ${props => props.width === 'full' ? `
    display: block;
  ` : null}
`;

export const Button = styled.button`
  width: 100%;
  text-transform: uppercase;
  text-align: center;
  cursor: pointer;

  background: ${styles.white};
  color: ${styles.nightsky};
  border: 1px solid ${styles.border};
  padding: ${styles.paddingLargeHorizontal};
  box-sizing: border-box;
  border-radius: 4px;

  &:hover {
    background: ${darken(0.04, styles.white)};
    color: ${styles.nightsky};
  }

  /**
   * Sizes
   */
  ${props => props.size === 'small' ? `
    padding: ${styles.paddingSmallHorizontal};
  ` : null}

  ${props => props.size === 'large' ? `
    padding: calc(${styles.paddingLargeHorizontal} * 1.5);
  ` : null}

  /**
   * Colors
   */
  ${props => props.color === 'green' ? `
    background: ${styles.green};
    color: ${styles.white};
    border: none;
    &:hover {
      background: ${darken(0.04, styles.green)};
      color: ${styles.white};
    }
  ` : null}

 ${props => props.color === 'blue' ? `
   background: ${styles.linkActive};
   color: ${styles.white};
   border: none;
   &:hover {
     background: ${darken(0.04, styles.linkActive)};
     color: ${styles.white};
   }
 ` : null}

  ${props => props.color === 'white' ? `
    background: ${styles.white};
    color: ${styles.linkActive};
    border: 1px solid ${styles.linkActive};
    &:hover {
      background: ${darken(0.04, styles.white)};
      color: ${styles.linkActive};
    }
  ` : null}

   ${props => props.color === 'yellow' ? `
     background: ${styles.darkYellow};
     color: ${styles.white};
     &:hover {
       background: ${darken(0.04, styles.darkYellow)};
       color: ${styles.white};
     }
   ` : null}
`;
