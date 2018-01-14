import * as styles from 'template/styled/styles';
import * as mixins from 'template/styled/mixins';
import styled from 'styled-components';

export const Header = styled.div`
`;

export const Component = styled.div`
`;

export const Title = styled.div`
  margin: ${styles.paddingLargeHorizontal} 0;
  font-size: ${styles.giantSize};
  color: ${styles.nightsky};
  font-weight: bold;
`;

export const MainView = styled.div`
  border: 1px solid ${styles.border};
  background: ${styles.white};
  margin-bottom: ${styles.paddingLargeHorizontal};
  display: flex;
  align-items: stretch;
  flex-wrap: wrap;
  overflow: hidden;
`;

export const AboutEnquiry = styled.div`
  border: 1px solid ${styles.border};
  background: ${styles.white};
  display: flex;
  align-items: stretch;
  flex-wrap: wrap;
  margin-bottom: ${styles.paddingLargeHorizontal};
`;

export const Features = styled.div`
  border: 1px solid ${styles.border};
  background: ${styles.white};
  padding: ${styles.paddingLargeHorizontal};
  margin-bottom: ${styles.paddingLargeHorizontal};
`;

export const Suggested = styled.div`
  border: 1px solid ${styles.border};
  background: ${styles.white};
  padding: ${styles.paddingLargeHorizontal};
`;

export const Left = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;

  ${mixins.responsiveMixin().tablet`
    width: 100%;
  `}
`;

export const Right = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;

  ${mixins.responsiveMixin().tablet`
    width: 100%;
  `}
`;

export const Gallery = styled.div`
  flex: 1;
  background: ${styles.white};

  display: flex;
  flex-direction: column;
  justify-content: center;

  ${mixins.responsiveMixin().tablet`
    display: block;
  `}
`;

export const Thumbs = styled.div`
  height: 148px;
  background: ${styles.white};

  display: flex;
  flex-direction: column;
  justify-content: center;

  ${mixins.responsiveMixin().tablet`
    height: 78px;
    display: block;
  `}
`;

export const Overview = styled.div`
`;

export const Contact = styled.div`
  height: 148px;
  background: ${styles.fotmBackground};
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 0 ${styles.paddingLargeHorizontal};
`;

export const About = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  ${mixins.responsiveMixin().tablet`
    width: 100%;
  `}
`;

export const AboutInfo = styled.div`
  flex: 1;
  padding: ${styles.paddingLargeHorizontal};
  border-right: 1px solid ${styles.border};
`;

export const AboutContact = styled.div`
  padding: ${styles.paddingLargeHorizontal};
  border-right: 1px solid ${styles.border};
  background: ${styles.fotmBackground};
`;

export const AboutCallon = styled.div`
  padding: ${styles.paddingLargeHorizontal};
  border-right: 1px solid ${styles.border};
  border-top: 1px solid ${styles.border};
`;

export const Enquiry = styled.div`
  width: 40%;
  ${mixins.responsiveMixin().tablet`
    width: 100%;
  `}
`;

export const EnquiryInfo = styled.div`
  padding: ${styles.paddingLargeHorizontal};
`;

export const EnquiryForm = styled.div`
  padding: ${styles.paddingLargeHorizontal};
`;

export const ToggledInfo = styled.div`
  margin-top: ${styles.paddingLargeHorizontal};
  padding: ${styles.paddingLargeHorizontal};
  border: 1px solid ${styles.border};
`;
