import React, { PropTypes } from 'react';
import css from 'services/cssService';
import styless from 'template/components/TagItem/TagItemFoldedComponent.scss';
import * as styles from 'template/styled/styles';
import * as mixins from 'template/styled/mixins';
import styled from 'styled-components';

const BlockFolded = styled.div`
  height: 35px;
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
  font-size: ${styles.h3Size};
`;

const TagIcon = styled.div`
  margin-left: ${styles.paddingBaseHorizontal};
  font-weight: bold;
`;

const TagTitle = styled.div`
  white-space: nowrap;
  font-weight: normal;
`;

const TagItemFoldedComponent = (props) => (
  <BlockFolded onClick={props.toggleProductFilter}>
    <Component background={props.color}>
      <Tag>
        <TagTitle>{props.title}</TagTitle>
        <TagIcon>
          <i className="fa fa-trash-o" aria-hidden="true" />
        </TagIcon>
      </Tag>
    </Component>
  </BlockFolded>
);

TagItemFoldedComponent.propTypes = {
  title: PropTypes.string.isRequired,
  color: PropTypes.oneOf([
    null, 'blue', 'pink', 'green', 'orange', 'asphalt'
  ]).isRequired,
  toggleProductFilter: PropTypes.func.isRequired,
  item: PropTypes.shape().isRequired,
};

export default css(TagItemFoldedComponent, styless);
