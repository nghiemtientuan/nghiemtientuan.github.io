import React from 'react';
import Lazyload from 'react-lazyload';
import {Link} from 'react-router-dom';

// components
import LayoutComponent from '../../components/layouts/LayoutComponent';

// utils
import {linksConfig} from './linksConfig';

const RedirectPage = () => {
  return (
      <LayoutComponent>
          <div className="uk-section uk-section-default uk-padding-remove-top">
              <div className="uk-container">
                  <div
                      className="uk-child-width-1-2 uk-child-width-1-3@s uk-child-width-1-4@m uk-margin-medium-top"
                      data-uk-grid
                  >
                      {
                          linksConfig.map((link, linkIndex) => (
                              <div className="uk-card" key={linkIndex}>
                                  <div className="uk-card-media-top uk-inline uk-light">
                                      <Lazyload>
                                          <img
                                              className="uk-border-rounded-medium"
                                              src="https://picsum.photos/300/160"
                                              alt={link.name}
                                          />
                                      </Lazyload>
                                      <div className="uk-position-cover uk-card-overlay uk-border-rounded-medium"></div>
                                  </div>

                                  <h3
                                      className="uk-text-center uk-card-title uk-text-500 uk-margin-small-bottom uk-margin-top"
                                  >{link.name}</h3>

                                  <Link to={link.rawUrl} className="uk-position-cover"/>
                              </div>
                          ))
                      }
                  </div>
              </div>
          </div>
      </LayoutComponent>
  );
};

export default RedirectPage;
