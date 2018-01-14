import React from 'react';
import * as DashboardCategoriesStyled from 'template/containers/DashboardCategoriesContainer/DashboardCategoriesStyled';
import DashboardHeaderComponent from 'template/components/DashboardHeader/DashboardHeaderComponent';
import DashboardCategoriesComponent from 'template/components/DashboardCategories/DashboardCategoriesComponent';

const DashboardCategoriesContainer = () =>
  <DashboardCategoriesStyled.Component>
    <DashboardCategoriesStyled.Header>
      <DashboardHeaderComponent>
        Head Admin Dashboard
      </DashboardHeaderComponent>
    </DashboardCategoriesStyled.Header>
    <DashboardCategoriesStyled.Categories>
      <DashboardCategoriesComponent />
    </DashboardCategoriesStyled.Categories>
  </DashboardCategoriesStyled.Component>;

export default DashboardCategoriesContainer;
