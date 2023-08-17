import React from 'react';

// components
import HeaderComponent from './HeaderComponent';
import FooterComponent from './FooterComponent';

const LayoutComponent = (props) => {
  return (
    <div className="container">
      <HeaderComponent />

      {props.children}

      <FooterComponent />
    </div>
  );
};

export default LayoutComponent;
