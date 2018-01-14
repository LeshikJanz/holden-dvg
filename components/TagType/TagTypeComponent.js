import React from 'react';
import css from 'services/cssService';
import styles from 'template/components/TagType/_TagTypeComponent.scss';
import * as TagTypeStyled from 'template/components/TagType/TagTypeStyled';
import TagPreviewComponent from 'template/components/TagPreview/TagPreviewComponent';
import TagSelectComponent from 'template/components/TagSelect/TagSelectComponent';

const TagTypeComponent = ({ type = "folded", filtersMap, productsFilter, toggleProductFilter, productsCategory, updateProductCategory, allCategories }) => (
  <TagTypeStyled.Component>
    <TagTypeStyled.Content>
      <TagTypeStyled.TagPreview>
        <TagPreviewComponent
          productsFilter={productsFilter}
          toggleProductFilter={toggleProductFilter}
        />
      </TagTypeStyled.TagPreview>

      <TagTypeStyled.TagSelect>
        <TagSelectComponent
          filtersMap={filtersMap}
          productsFilter={productsFilter}
          toggleProductFilter={toggleProductFilter}
        />
      </TagTypeStyled.TagSelect>
    </TagTypeStyled.Content>
  </TagTypeStyled.Component>
);

TagTypeComponent.propTypes = {
};

export default css(TagTypeComponent, styles);
