import * as styles from 'template/styled/styles';
import * as mixins from 'template/styled/mixins';
import styled from 'styled-components';

export const Block = styled.div``;

export const Title = styled.div`
  font-size: ${styles.giantSize};
  border-bottom: 1px solid ${styles.border};
  padding: ${styles.paddingBaseHorizontal};
  position: relative;
`;

export const CloseBtn = styled.div`
  font-size: ${styles.h1Size};
  position: absolute;
  right: 2px;
  top: 5px;
  cursor: pointer;
  height: 30px;
  width: 30px;
  text-align: center;
`;

export const ProductPrice = styled.div`
  font-size: ${styles.giantSize};
  color: ${styles.nightsky};
`;

export const SubText = styled.div`
  font-size: ${styles.h3Size};
  padding: ${styles.paddingBaseHorizontal};
`;

export const InputText = styled.div`
  font-size: ${styles.h3Size};
  width: 240px;
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  padding: ${styles.paddingBaseVertical} ${styles.paddingLargeHorizontal};

  ${props => props.align && props.align === 'right' && `
    justify-content: flex-end;
  `}
`;

export const Input = styled.input``;

export const Select = styled.select`
`;

export const Repayments = styled.div`
  font-size: ${styles.h1Size};
`;

export const Img = styled.img`
  height: auto;
  width: 240px;
`;

export const Product = styled.div`
  font-size: ${styles.h1Size};
  color: ${styles.darkYellow};
  padding: ${styles.paddingBaseHorizontal};
`;

export const MediumText = styled.div`
  font-size: ${styles.h2Size};
`;

export const TermsAndConditions = styled.div`
  font-size: ${styles.smallSize};
  padding: ${styles.paddingBaseHorizontal};
  border-top: 1px solid ${styles.border};
`;

export const Apply = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding: ${styles.paddingBaseHorizontal};
`;

export const ApplyHeader = styled.div`
  width: 200px;
  color: ${styles.label};
  text-transform: uppercase;
`;

export const ApplyCost = styled.div`
  width: 200px;
  color: ${styles.label};
  font-weight: 300;
  margin-bottom: ${styles.paddingSmallVertical};

  strong {
    color: ${styles.nightsky};
    font-weight: 400;
    font-size: ${styles.h1Size};
  }

  sub {
    bottom: 0;
  }
`;

export const ApplyLink = styled.a`
  width: 200px;
  color: ${styles.darkYellow};
  font-weight: 300;
  text-transform: uppercase;

  &:hover {
    color: ${styles.orange};
  }
`;
