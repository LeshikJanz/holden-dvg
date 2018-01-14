import React from 'react';
import map from 'lodash/map';
import { TagItemFoldedComponent } from 'template/components/TagItem/index';
import * as TagPreviewComponentStyled from './TagPreviewComponentStyled';

const TagPreviewComponent = ({ productsFilter, toggleProductFilter }) =>
  <TagPreviewComponentStyled.Preview>
    {map(productsFilter, (item, key) => (
      <TagPreviewComponentStyled.Item key={key}>
        <TagItemFoldedComponent
          toggleProductFilter={toggleProductFilter}
          item={item}
          title={item.title}
          color={item.color}
        />
      </TagPreviewComponentStyled.Item>
    ))}
  </TagPreviewComponentStyled.Preview>;

TagPreviewComponent.propTypes = {
};

export default TagPreviewComponent;
