import React from 'react';
import { Link } from 'react-router-dom';
import * as DashboardCategoriesStyled from 'template/components/DashboardCategories/DashboardCategoriesStyled';
import mostPopularVehiclesPng from 'template/assets/img/dashboard/mostPopularVehicles.png';
import categoriseVehiclesPng from 'template/assets/img/dashboard/categoriseVehicles.png';
import createAFunnelPagePng from 'template/assets/img/dashboard/createAFunnelPage.png';
import createCustomGroupPng from 'template/assets/img/dashboard/createCustomGroup.png';
import leadLogPng from 'template/assets/img/dashboard/leadLog.png';
import manageSalesPersonsPng from 'template/assets/img/dashboard/manageSalesPersons.png';
import postFacebookAdvertPng from 'template/assets/img/dashboard/mostPopularVehicles.png';

const DashboardCategoriesComponent = () => (
  <DashboardCategoriesStyled.Component>
    <DashboardCategoriesStyled.Categories>
      <DashboardCategoriesStyled.CategoriesItem>
        <Link to="/dashboard/categorise">
          <DashboardCategoriesStyled.Thumb background="categoriseVehicles">
            <DashboardCategoriesStyled.ThumbIcon>
              <img src={categoriseVehiclesPng} alt="" />
            </DashboardCategoriesStyled.ThumbIcon>
            <DashboardCategoriesStyled.ThumbTitle>
              Categorise Vehicles
            </DashboardCategoriesStyled.ThumbTitle>
          </DashboardCategoriesStyled.Thumb>
        </Link>
      </DashboardCategoriesStyled.CategoriesItem>

      <DashboardCategoriesStyled.CategoriesItem>
        <Link to="/dashboard/groups/create">
          <DashboardCategoriesStyled.Thumb background="createCustomGroup">
            <DashboardCategoriesStyled.ThumbIcon>
              <img src={createCustomGroupPng} alt="" />
            </DashboardCategoriesStyled.ThumbIcon>
            <DashboardCategoriesStyled.ThumbTitle>
              Create Custom Group
            </DashboardCategoriesStyled.ThumbTitle>
          </DashboardCategoriesStyled.Thumb>
        </Link>
      </DashboardCategoriesStyled.CategoriesItem>

      <DashboardCategoriesStyled.CategoriesItem>
        <Link to="/dashboard/funnels/create">
          <DashboardCategoriesStyled.Thumb background="createAFunnelPage">
            <DashboardCategoriesStyled.ThumbIcon>
              <img src={createAFunnelPagePng} alt="" />
            </DashboardCategoriesStyled.ThumbIcon>
            <DashboardCategoriesStyled.ThumbTitle>
              Create a Funnel Page
            </DashboardCategoriesStyled.ThumbTitle>
          </DashboardCategoriesStyled.Thumb>
        </Link>
      </DashboardCategoriesStyled.CategoriesItem>

      <DashboardCategoriesStyled.CategoriesItem>
        <Link to="/dashboard/enquiries">
          <DashboardCategoriesStyled.Thumb background="leadLog">
            <DashboardCategoriesStyled.ThumbIcon>
              <img src={leadLogPng} alt="" />
            </DashboardCategoriesStyled.ThumbIcon>
            <DashboardCategoriesStyled.ThumbTitle>
              Lead Log
            </DashboardCategoriesStyled.ThumbTitle>
          </DashboardCategoriesStyled.Thumb>
        </Link>
      </DashboardCategoriesStyled.CategoriesItem>

      {/**
      <DashboardCategoriesStyled.CategoriesItem>
        <Link to="/dashboard/">
          <DashboardCategoriesStyled.Thumb background="postFacebookAdvert">
            <DashboardCategoriesStyled.ThumbIcon>
              <img src={postFacebookAdvertPng} alt="" />
            </DashboardCategoriesStyled.ThumbIcon>
            <DashboardCategoriesStyled.ThumbTitle>
              Post Facebook Advert
            </DashboardCategoriesStyled.ThumbTitle>
          </DashboardCategoriesStyled.Thumb>
        </Link>
      </DashboardCategoriesStyled.CategoriesItem>

      <DashboardCategoriesStyled.CategoriesItem>
        <Link to="/dashboard/">
          <DashboardCategoriesStyled.Thumb background="manageSalesPersons">
            <DashboardCategoriesStyled.ThumbIcon>
              <img src={manageSalesPersonsPng} alt="" />
            </DashboardCategoriesStyled.ThumbIcon>
            <DashboardCategoriesStyled.ThumbTitle>
              Manage Sales Persons
            </DashboardCategoriesStyled.ThumbTitle>
          </DashboardCategoriesStyled.Thumb>
        </Link>
      </DashboardCategoriesStyled.CategoriesItem>

      <DashboardCategoriesStyled.CategoriesItem>
        <Link to="/dashboard/">
          <DashboardCategoriesStyled.Thumb background="mostPopularVehicles">
            <DashboardCategoriesStyled.ThumbIcon>
              <img src={mostPopularVehiclesPng} alt="" />
            </DashboardCategoriesStyled.ThumbIcon>
            <DashboardCategoriesStyled.ThumbTitle>
              Most Popular Vehicles
            </DashboardCategoriesStyled.ThumbTitle>
          </DashboardCategoriesStyled.Thumb>
        </Link>
      </DashboardCategoriesStyled.CategoriesItem>
      */}
    </DashboardCategoriesStyled.Categories>
  </DashboardCategoriesStyled.Component>
);

export default DashboardCategoriesComponent;
