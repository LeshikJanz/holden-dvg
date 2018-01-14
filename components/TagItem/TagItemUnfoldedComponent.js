import React, { PropTypes } from 'react';
import * as styles from 'template/styled/styles';
import * as mixins from 'template/styled/mixins';
import styled from 'styled-components';

const BlockUnfolded = styled.div``;

const Component = styled.div`
  ${mixins.backgroundHoverMixin('#ffffff')};
  color: ${styles.nightsky};
  padding: 0 ${styles.paddingBaseHorizontal};
  border: 1px solid ${styles.border};
  border-radius: ${styles.radius};
  cursor: pointer;
  height: 60px;
`;

const Tag = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;

const TagIcon = styled.div`
  margin-right: ${styles.paddingBaseHorizontal};
`;

const TagTitle = styled.div`
  white-space: nowrap;
`;

const TagTitleTop = styled.div`
  white-space: nowrap;
  font-size: ${styles.h3Size};
`;

const TagTitleBottom = styled.div`
  opacity: .6;
`;

const TagItemUnfoldedComponent = (props) => (
  <BlockUnfolded onClick={props.toggleProductFilter}>
    <Component>
      <Tag>
        <TagIcon><div styleName="plus-icon" /></TagIcon>
        <TagTitle>
          <TagTitleTop>{props.title}</TagTitleTop>
          <TagTitleBottom>{props.subtitle}</TagTitleBottom>
        </TagTitle>
      </Tag>
    </Component>
  </BlockUnfolded>
);

TagItemUnfoldedComponent.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  toggleProductFilter: PropTypes.string.isRequired,
  item: PropTypes.shape().isRequired,
};

export default TagItemUnfoldedComponent;
