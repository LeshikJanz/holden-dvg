import React from 'react';
import css from 'services/cssService';
import * as MainSelectStyled from 'template/components/MainSelect/MainSelectStyled';
import styles from 'template/components/MainSelect/_MainSelectComponent.scss';
import items from './items';

const MainSelectComponent = ({ categories, onCategoryClick, isDisabled = false }) => (
  <MainSelectStyled.Component isDisabled>
    {isDisabled ?
      <MainSelectStyled.DisableOverlay />
    : null}

    <MainSelectStyled.Select>
      {items.map((item, key) =>
        <MainSelectStyled.SelectItem
          key={key}
          isActive={categories === item.title}
          onClick={onCategoryClick.bind(null, item.title)}
        >
          <MainSelectStyled.CarThumb>
            <MainSelectStyled.CarThumbIcon>
              <img src={item.image} alt="" />
            </MainSelectStyled.CarThumbIcon>
            <MainSelectStyled.CarThumbTitle>
              {item.title}
            </MainSelectStyled.CarThumbTitle>
            {categories === item.title && <MainSelectStyled.Dot className="fa fa-circle" aria-hidden="true" />}
          </MainSelectStyled.CarThumb>
        </MainSelectStyled.SelectItem>
      )}
    </MainSelectStyled.Select>
  </MainSelectStyled.Component>
);

MainSelectComponent.propTypes = {
};

export default css(MainSelectComponent, styles);
