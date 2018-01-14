import React, { PropTypes } from 'react';
import * as styles from 'template/styled/styles';
import * as mixins from 'template/styled/mixins';
import styled from 'styled-components';

const BlockUnfolded = styled.div`
  height: 22px;
`;

const Component = styled.div`
  ${props => mixins.backgroundHoverMixin(props.background)};
  padding: 0 ${styles.paddingBaseHorizontal};
  border-radius: ${styles.radius};
  color: ${styles.white};
  cursor: pointer;
`;

Component.defaultProps = {
  color: '#ffffff',
  background: '#65839f',
};

const Tag = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;

const TagTitle = styled.div`
  white-space: nowrap;
`;

const TagItemCompactComponent = (props) => (
  <BlockUnfolded>
    <Component background={props.color}>
      <Tag>
        <TagTitle>{props.title}</TagTitle>
      </Tag>
    </Component>
  </BlockUnfolded>
);

TagItemCompactComponent.propTypes = {
  title: PropTypes.string.isRequired,
  color: PropTypes.oneOf([
    null, 'blue', 'pink', 'green', 'orange', 'asphalt'
  ]).isRequired,
  item: PropTypes.shape(),
};

export default TagItemCompactComponent;
