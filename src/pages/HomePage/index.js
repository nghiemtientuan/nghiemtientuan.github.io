import React from 'react';

// components
import SliderComponent from '../../components/layouts/SliderComponent';
import LayoutComponent from '../../components/layouts/LayoutComponent';
import CategoriesComponent from '../../components/HomePage/CategoriesComponent';
import ContentsComponent from '../../components/HomePage/ContentsComponent';

const HomePage = (_props) => {
  return (
    <LayoutComponent>
      <SliderComponent />

      <div className="uk-section uk-section-default">
        <div className="uk-container">
          <div data-uk-grid>
            <CategoriesComponent />

            <ContentsComponent />
          </div>
        </div>
      </div>
    </LayoutComponent>
  );
};

export default HomePage;
