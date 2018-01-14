import * as styles from 'template/styled/styles';
import * as mixins from 'template/styled/mixins';
import styled from 'styled-components';

export const Component = styled.div`
`;

export const Categories = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: -${styles.paddingLargeHorizontal};
`;

export const CategoriesItem = styled.div`
  width: 33.33%;
  height: 260px;
  padding: ${styles.paddingLargeHorizontal};
`;

export const Thumb = styled.div`
  height: 100%;
  padding: ${styles.paddingLargeHorizontal};
  color: ${styles.white};
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  border-radius: 4px;

  ${props => props.background === 'categoriseVehicles' ? `
    background: -webkit-linear-gradient(90deg, #36b433 0%, #33b460 99%);
    background: -moz-linear-gradient(90deg, #36b433 0%, #33b460 99%);
    background: -o-linear-gradient(90deg, #36b433 0%, #33b460 99%);
    background: -ms-linear-gradient(90deg, #36b433 0%, #33b460 99%);
    background: linear-gradient(0deg, #36b433 0%, #33b460 99%);
  ` : null}

  ${props => props.background === 'createCustomGroup' ? `
    background: -webkit-linear-gradient(90deg, #7032d6 0%, #4777bf 99%);
    background: -moz-linear-gradient(90deg, #7032d6 0%, #4777bf 99%);
    background: -o-linear-gradient(90deg, #7032d6 0%, #4777bf 99%);
    background: -ms-linear-gradient(90deg, #7032d6 0%, #4777bf 99%);
    background: linear-gradient(0deg, #7032d6 0%, #4777bf 99%);
  ` : null}

  ${props => props.background === 'createAFunnelPage' ? `
    background: -webkit-linear-gradient(90deg, #ea5149 0%, #ea7349 99%);
    background: -moz-linear-gradient(90deg, #ea5149 0%, #ea7349 99%);
    background: -o-linear-gradient(90deg, #ea5149 0%, #ea7349 99%);
    background: -ms-linear-gradient(90deg, #ea5149 0%, #ea7349 99%);
    background: linear-gradient(0deg, #ea5149 0%, #ea7349 99%);
  ` : null}

  ${props => props.background === 'leadLog' ? `
    background: -webkit-linear-gradient(90deg, #148aa3 0%, #14a397 99%);
    background: -moz-linear-gradient(90deg, #148aa3 0%, #14a397 99%);
    background: -o-linear-gradient(90deg, #148aa3 0%, #14a397 99%);
    background: -ms-linear-gradient(90deg, #148aa3 0%, #14a397 99%);
    background: linear-gradient(0deg, #148aa3 0%, #14a397 99%);
  ` : null}

  ${props => props.background === 'postFacebookAdvert' ? `
    background: -webkit-linear-gradient(90deg, #3d8ebd 0%, #204aa2 99%);
    background: -moz-linear-gradient(90deg, #3d8ebd 0%, #204aa2 99%);
    background: -o-linear-gradient(90deg, #3d8ebd 0%, #204aa2 99%);
    background: -ms-linear-gradient(90deg, #3d8ebd 0%, #204aa2 99%);
    background: linear-gradient(0deg, #3d8ebd 0%, #204aa2 99%);
  ` : null}

  ${props => props.background === 'manageSalesPersons' ? `
    background: -webkit-linear-gradient(90deg, #e3aa0f 0%, #e38a17 99%);
    background: -moz-linear-gradient(90deg, #e3aa0f 0%, #e38a17 99%);
    background: -o-linear-gradient(90deg, #e3aa0f 0%, #e38a17 99%);
    background: -ms-linear-gradient(90deg, #e3aa0f 0%, #e38a17 99%);
    background: linear-gradient(0deg, #e3aa0f 0%, #e38a17 99%);
  ` : null}

  ${props => props.background === 'mostPopularVehicles' ? `
    background: -webkit-linear-gradient(90deg, #7641b7 0%, #a541b7 99%);
    background: -moz-linear-gradient(90deg, #7641b7 0%, #a541b7 99%);
    background: -o-linear-gradient(90deg, #7641b7 0%, #a541b7 99%);
    background: -ms-linear-gradient(90deg, #7641b7 0%, #a541b7 99%);
    background: linear-gradient(0deg, #7641b7 0%, #a541b7 99%);
  ` : null}

`;

export const ThumbIcon = styled.div`
  margin-bottom: ${styles.paddingLargeHorizontal};
`;

export const ThumbTitle = styled.div`
  font-size: ${styles.h3Size};
  font-weight: bold;
`;
