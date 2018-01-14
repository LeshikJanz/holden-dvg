import React from 'react';
import * as MainSelectInfoStyled from 'template/components/MainSelect/MainSelectInfoStyled';
import items from './items';

const all = items[0].title;

const MainSelectInfoComponent = ({ categories, onCategoryClick }) => (
  categories !== all ?
    <MainSelectInfoStyled.Component>
      <MainSelectInfoStyled.Image src={items.find((item) => item.title === categories).image} />
      <MainSelectInfoStyled.Title>
        {categories}
      </MainSelectInfoStyled.Title>
      <MainSelectInfoStyled.Clear onClick={onCategoryClick.bind(null, all)}>
        clear the filter <i className="fa fa-trash-o" aria-hidden="true" />
      </MainSelectInfoStyled.Clear>
    </MainSelectInfoStyled.Component>
    : null
);

MainSelectInfoComponent.propTypes = {
};

export default MainSelectInfoComponent;
