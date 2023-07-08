import React from 'react';

const SliderComponent = (_props) => {
  return (
    <div class="uk-container">
      <div class="uk-border-rounded-large uk-background-top-center uk-background-cover 
        uk-background-norepeat uk-light uk-inline uk-overflow-hidden uk-width-1-1" 
        style={{backgroundImage: 'url(https://via.placeholder.com/1200x438.jpg)'}}>
        <div class="uk-position-cover uk-header-overlay"></div>

        <div class="uk-position-relative" data-uk-grid>
          <div class="uk-width-1-2@m uk-flex uk-flex-middle">
            <div class="uk-padding-large uk-padding-remove-right">
              <h1 class="uk-heading-small uk-margin-remove-top">Choose from thousands of recipes</h1>
              <p class="uk-text-secondary">Appropriately integrate technically sound value with scalable infomediaries
                negotiate sustainable strategic theme areas</p>
              <a class="uk-text-secondary uk-text-600 uk-text-small hvr-forward" href="sign-up.html">Sign up today<span
                class="uk-margin-small-left" data-uk-icon="arrow-right"></span></a>
            </div>
          </div>

          <div class="uk-width-expand@m"></div>
        </div>
      </div>
    </div>
  );
};

export default SliderComponent;
