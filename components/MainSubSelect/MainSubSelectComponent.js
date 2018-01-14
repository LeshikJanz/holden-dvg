import React from 'react';
import * as MainSubSelectStyled from 'template/components/MainSubSelect/MainSubSelectStyled';

import smallPng from 'template/assets/img/types/small.png';
import crossoverPng from 'template/assets/img/types/crossover.png';
import sedanPng from 'template/assets/img/types/sedan.png';
import wagonPng from 'template/assets/img/types/wagon.png';
import midSUVPng from 'template/assets/img/types/midSUV.png';
import largeSUVPng from 'template/assets/img/types/largeSUV.png';
import luxuryPng from 'template/assets/img/types/luxury.png';
import performancePng from 'template/assets/img/types/performance.png';
import traybackPng from 'template/assets/img/types/trayback.png';
import vanPng from 'template/assets/img/types/van.png';
import peopleMoverPng from 'template/assets/img/types/peopleMover.png';

const items = [
  {
    image: smallPng,
    title: 'Small Cars',
  },
  {
    image: crossoverPng,
    title: 'Hatch/Wagon Crossovers',
  },
  {
    image: sedanPng,
    title: 'Mid and Large Sedans',
  },
  {
    image: wagonPng,
    title: 'Station Wagons',
  },
  {
    image: midSUVPng,
    title: 'Mid-sized and Family SUVs',
  },
  {
    image: largeSUVPng,
    title: 'Large SUVs and Wagons',
  },
  {
    image: luxuryPng,
    title: 'Luxury Vehicles',
  },
  {
    image: performancePng,
    title: 'Performance Vehicles',
  },
  {
    image: traybackPng,
    title: 'Utes and Traybacks',
  },
  {
    image: vanPng,
    title: 'Vans',
  },
  {
    image: peopleMoverPng,
    title: 'People Movers',
  }
];

const MainSubSelectComponent = ({ categories, onCategoryClick, isDisabled = false }) => (
  <MainSubSelectStyled.Component isDisabled>
    {isDisabled ?
      <MainSubSelectStyled.DisableOverlay />
    : null}

    <MainSubSelectStyled.Select>
      {items.map((item, key) =>
        <MainSubSelectStyled.SelectItem
          key={key}
          isActive={categories.includes(item.title)}
          onClick={onCategoryClick.bind(null, item.title)}
        >
          <MainSubSelectStyled.CarThumb>
            <MainSubSelectStyled.CarThumbIcon>
              <img src={item.image} alt="" />
            </MainSubSelectStyled.CarThumbIcon>
            <MainSubSelectStyled.CarThumbTitle>
              {item.title}
            </MainSubSelectStyled.CarThumbTitle>
          </MainSubSelectStyled.CarThumb>
        </MainSubSelectStyled.SelectItem>
      )}
    </MainSubSelectStyled.Select>
  </MainSubSelectStyled.Component>
);

MainSubSelectComponent.propTypes = {
};

export default MainSubSelectComponent;
