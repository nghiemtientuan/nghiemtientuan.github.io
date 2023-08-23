import React from 'react';
import { useTranslation } from 'react-i18next';

// components
import LayoutComponent from '../../components/layouts/LayoutComponent';
import PaginationComponent from '../../components/layouts/PaginationComponent';

const LATEST_VALUE = 'latest';
const EARLIEST_VALUE = 'earliest';

const CoursesPage = (_props) => {
  const {t} = useTranslation();

  const sortOptions = [
    {
      name: t('sortOptions.sortBy') + t('sortOptions.latest'),
      value: LATEST_VALUE,
    },
    {
      name: t('sortOptions.sortBy') + t('sortOptions.earliest'),
      value: EARLIEST_VALUE,
    },
  ];

  return (
    <LayoutComponent>
      <div className="uk-section uk-section-default uk-padding-remove-top">
        <div className="uk-container">
          <div data-uk-grid>
            <div className="uk-width-1-2@m">
              <form className="uk-search uk-search-default uk-width-1-1 uk-margin-small-bottom">
                <span data-uk-search-icon></span>
                <input
                  className="uk-search-input uk-text-small uk-border-rounded uk-form-large"
                  type="search"
                  placeholder={t('inputs.search_place_holder')}
                />
              </form>
            </div>

            <div className="uk-width-1-2@m uk-text-right@m">
              <select className="uk-select uk-select-light uk-width-auto uk-border-pill uk-select-muted">
                {
                  sortOptions.map((option, optionIndex) => (
                    <option key={optionIndex}>{option.name}</option>
                  ))
                }
              </select>
            </div>
          </div>

          <div className="uk-child-width-1-2 uk-child-width-1-3@s uk-child-width-1-4@m uk-margin-medium-top" data-uk-grid>
            <div>
              <div
                className="uk-card">
                <div className="uk-card-media-top uk-inline uk-light">
                  <img className="uk-border-rounded-medium" src="https://via.placeholder.com/300x160" alt="Course Title" />
                    <div className="uk-position-cover uk-card-overlay uk-border-rounded-medium"></div>
                    <div className="uk-position-xsmall uk-position-top-right">
                      <a href="#" className="uk-icon-button uk-like uk-position-z-index uk-position-relative"
                         data-uk-icon="heart"></a>
                    </div>
                </div>
                <div>
                  <h3 className="uk-card-title uk-text-500 uk-margin-small-bottom uk-margin-top">Chef John's Turkey Sloppy Joes</h3>
                  <div className="uk-text-xsmall uk-text-muted" data-uk-grid>
                    <div className="uk-width-auto uk-flex uk-flex-middle">
                      <span className="uk-rating-filled" data-uk-icon="icon: star; ratio: 0.7"></span>
                      <span className="uk-margin-xsmall-left">5.0</span>
                      <span>(73)</span>
                    </div>
                    <div className="uk-width-expand uk-text-right">by Tuntun</div>
                  </div>
                </div>
                <a href="recipe.html" className="uk-position-cover"></a>
              </div>
            </div>
            <div>
              <div
                className="uk-card">
                <div className="uk-card-media-top uk-inline uk-light">
                  <img className="uk-border-rounded-medium" src="https://via.placeholder.com/300x160" alt="Course Title"/>
                    <div className="uk-position-cover uk-card-overlay uk-border-rounded-medium"></div>
                    <div className="uk-position-xsmall uk-position-top-right">
                      <a href="#" className="uk-icon-button uk-like uk-position-z-index uk-position-relative"
                         data-uk-icon="heart"></a>
                    </div>
                </div>
                <div>
                  <h3 className="uk-card-title uk-text-500 uk-margin-small-bottom uk-margin-top">Brown Sugar Meatloaf</h3>
                  <div className="uk-text-xsmall uk-text-muted" data-uk-grid>
                    <div className="uk-width-auto uk-flex uk-flex-middle">
                      <span className="uk-rating-filled" data-uk-icon="icon: star; ratio: 0.7"></span>
                      <span className="uk-margin-xsmall-left">3.0</span>
                      <span>(94)</span>
                    </div>
                    <div className="uk-width-expand uk-text-right">by Danial Caleem</div>
                  </div>
                </div>
                <a href="recipe.html" className="uk-position-cover"></a>
              </div>
            </div>
            <div>
              <div
                className="uk-card">
                <div className="uk-card-media-top uk-inline uk-light">
                  <img className="uk-border-rounded-medium" src="https://via.placeholder.com/300x160" alt="Course Title"/>
                    <div className="uk-position-cover uk-card-overlay uk-border-rounded-medium"></div>
                    <div className="uk-position-xsmall uk-position-top-right">
                      <a href="#" className="uk-icon-button uk-like uk-position-z-index uk-position-relative"
                         data-uk-icon="heart"></a>
                    </div>
                </div>
                <div>
                  <h3 className="uk-card-title uk-text-500 uk-margin-small-bottom uk-margin-top">Awesome Slow Cooker Pot Roast</h3>
                  <div className="uk-text-xsmall uk-text-muted" data-uk-grid>
                    <div className="uk-width-auto uk-flex uk-flex-middle">
                      <span className="uk-rating-filled" data-uk-icon="icon: star; ratio: 0.7"></span>
                      <span className="uk-margin-xsmall-left">4.5</span>
                      <span>(153)</span>
                    </div>
                    <div className="uk-width-expand uk-text-right">by Janet Small</div>
                  </div>
                </div>
                <a href="recipe.html" className="uk-position-cover"></a>
              </div>
            </div>
            <div>
              <div
                className="uk-card">
                <div className="uk-card-media-top uk-inline uk-light">
                  <img className="uk-border-rounded-medium" src="https://via.placeholder.com/300x160" alt="Course Title"/>
                    <div className="uk-position-cover uk-card-overlay uk-border-rounded-medium"></div>
                    <div className="uk-position-xsmall uk-position-top-right">
                      <a href="#" className="uk-icon-button uk-like uk-position-z-index uk-position-relative"
                         data-uk-icon="heart"></a>
                    </div>
                </div>
                <div>
                  <h3 className="uk-card-title uk-text-500 uk-margin-small-bottom uk-margin-top">Broiled Tilapia Parmesan</h3>
                  <div className="uk-text-xsmall uk-text-muted" data-uk-grid>
                    <div className="uk-width-auto uk-flex uk-flex-middle">
                      <span className="uk-rating-filled" data-uk-icon="icon: star; ratio: 0.7"></span>
                      <span className="uk-margin-xsmall-left">5.0</span>
                      <span>(524)</span>
                    </div>
                    <div className="uk-width-expand uk-text-right">by Aleaxa Dorchest</div>
                  </div>
                </div>
                <a href="recipe.html" className="uk-position-cover"></a>
              </div>
            </div>
            <div>
              <div
                className="uk-card">
                <div className="uk-card-media-top uk-inline uk-light">
                  <img className="uk-border-rounded-medium" src="https://via.placeholder.com/300x160" alt="Course Title"/>
                    <div className="uk-position-cover uk-card-overlay uk-border-rounded-medium"></div>
                    <div className="uk-position-xsmall uk-position-top-right">
                      <a href="#" className="uk-icon-button uk-like uk-position-z-index uk-position-relative"
                         data-uk-icon="heart"></a>
                    </div>
                </div>
                <div>
                  <h3 className="uk-card-title uk-text-500 uk-margin-small-bottom uk-margin-top">Baked Teriyaki Chicken</h3>
                  <div className="uk-text-xsmall uk-text-muted" data-uk-grid>
                    <div className="uk-width-auto uk-flex uk-flex-middle">
                      <span className="uk-rating-filled" data-uk-icon="icon: star; ratio: 0.7"></span>
                      <span className="uk-margin-xsmall-left">4.6</span>
                      <span>(404)</span>
                    </div>
                    <div className="uk-width-expand uk-text-right">by Ben Kaller</div>
                  </div>
                </div>
                <a href="recipe.html" className="uk-position-cover"></a>
              </div>
            </div>
            <div>
              <div
                className="uk-card">
                <div className="uk-card-media-top uk-inline uk-light">
                  <img className="uk-border-rounded-medium" src="https://via.placeholder.com/300x160" alt="Course Title"/>
                    <div className="uk-position-cover uk-card-overlay uk-border-rounded-medium"></div>
                    <div className="uk-position-xsmall uk-position-top-right">
                      <a href="#" className="uk-icon-button uk-like uk-position-z-index uk-position-relative"
                         data-uk-icon="heart"></a>
                    </div>
                </div>
                <div>
                  <h3 className="uk-card-title uk-text-500 uk-margin-small-bottom uk-margin-top">Zesty Slow Cooker Chicken</h3>
                  <div className="uk-text-xsmall uk-text-muted" data-uk-grid>
                    <div className="uk-width-auto uk-flex uk-flex-middle">
                      <span className="uk-rating-filled" data-uk-icon="icon: star; ratio: 0.7"></span>
                      <span className="uk-margin-xsmall-left">3.9</span>
                      <span>(629)</span>
                    </div>
                    <div className="uk-width-expand uk-text-right">by Sam Brown</div>
                  </div>
                </div>
                <a href="recipe.html" className="uk-position-cover"></a>
              </div>
            </div>
            <div>
              <div
                className="uk-card">
                <div className="uk-card-media-top uk-inline uk-light">
                  <img className="uk-border-rounded-medium" src="https://via.placeholder.com/300x160" alt="Course Title"/>
                    <div className="uk-position-cover uk-card-overlay uk-border-rounded-medium"></div>
                    <div className="uk-position-xsmall uk-position-top-right">
                      <a href="#" className="uk-icon-button uk-like uk-position-z-index uk-position-relative"
                         data-uk-icon="heart"></a>
                    </div>
                </div>
                <div>
                  <h3 className="uk-card-title uk-text-500 uk-margin-small-bottom uk-margin-top">Rosemary Ranch Chicken Kabobs</h3>
                  <div className="uk-text-xsmall uk-text-muted" data-uk-grid>
                    <div className="uk-width-auto uk-flex uk-flex-middle">
                      <span className="uk-rating-filled" data-uk-icon="icon: star; ratio: 0.7"></span>
                      <span className="uk-margin-xsmall-left">3.6</span>
                      <span>(149)</span>
                    </div>
                    <div className="uk-width-expand uk-text-right">by Theresa Samuel</div>
                  </div>
                </div>
                <a href="recipe.html" className="uk-position-cover"></a>
              </div>
            </div>
            <div>
              <div
                className="uk-card">
                <div className="uk-card-media-top uk-inline uk-light">
                  <img className="uk-border-rounded-medium" src="https://via.placeholder.com/300x160" alt="Course Title"/>
                    <div className="uk-position-cover uk-card-overlay uk-border-rounded-medium"></div>
                    <div className="uk-position-xsmall uk-position-top-right">
                      <a href="#" className="uk-icon-button uk-like uk-position-z-index uk-position-relative"
                         data-uk-icon="heart"></a>
                    </div>
                </div>
                <div>
                  <h3 className="uk-card-title uk-text-500 uk-margin-small-bottom uk-margin-top">Slow Cooker Pulled Pork</h3>
                  <div className="uk-text-xsmall uk-text-muted" data-uk-grid>
                    <div className="uk-width-auto uk-flex uk-flex-middle">
                      <span className="uk-rating-filled" data-uk-icon="icon: star; ratio: 0.7"></span>
                      <span className="uk-margin-xsmall-left">2.9</span>
                      <span>(309)</span>
                    </div>
                    <div className="uk-width-expand uk-text-right">by Adam Brown</div>
                  </div>
                </div>
                <a href="recipe.html" className="uk-position-cover"></a>
              </div>
            </div>
            <div>
              <div
                className="uk-card">
                <div className="uk-card-media-top uk-inline uk-light">
                  <img className="uk-border-rounded-medium" src="https://via.placeholder.com/300x160" alt="Course Title"/>
                    <div className="uk-position-cover uk-card-overlay uk-border-rounded-medium"></div>
                    <div className="uk-position-xsmall uk-position-top-right">
                      <a href="#" className="uk-icon-button uk-like uk-position-z-index uk-position-relative"
                         data-uk-icon="heart"></a>
                    </div>
                </div>
                <div>
                  <h3 className="uk-card-title uk-text-500 uk-margin-small-bottom uk-margin-top">Greek Lemon Chicken and Potatoes</h3>
                  <div className="uk-text-xsmall uk-text-muted" data-uk-grid>
                    <div className="uk-width-auto uk-flex uk-flex-middle">
                      <span className="uk-rating-filled" data-uk-icon="icon: star; ratio: 0.7"></span>
                      <span className="uk-margin-xsmall-left">3.6</span>
                      <span>(124)</span>
                    </div>
                    <div className="uk-width-expand uk-text-right">by Thomas Haller</div>
                  </div>
                </div>
                <a href="recipe.html" className="uk-position-cover"></a>
              </div>
            </div>
            <div>
              <div
                className="uk-card">
                <div className="uk-card-media-top uk-inline uk-light">
                  <img className="uk-border-rounded-medium" src="https://via.placeholder.com/300x160" alt="Course Title"/>
                    <div className="uk-position-cover uk-card-overlay uk-border-rounded-medium"></div>
                    <div className="uk-position-xsmall uk-position-top-right">
                      <a href="#" className="uk-icon-button uk-like uk-position-z-index uk-position-relative"
                         data-uk-icon="heart"></a>
                    </div>
                </div>
                <div>
                  <h3 className="uk-card-title uk-text-500 uk-margin-small-bottom uk-margin-top">Turkey Posole Dinner</h3>
                  <div className="uk-text-xsmall uk-text-muted" data-uk-grid>
                    <div className="uk-width-auto uk-flex uk-flex-middle">
                      <span className="uk-rating-filled" data-uk-icon="icon: star; ratio: 0.7"></span>
                      <span className="uk-margin-xsmall-left">4.0</span>
                      <span>(84)</span>
                    </div>
                    <div className="uk-width-expand uk-text-right">by Thomas Haller</div>
                  </div>
                </div>
                <a href="recipe.html" className="uk-position-cover"></a>
              </div>
            </div>
            <div>
              <div
                className="uk-card">
                <div className="uk-card-media-top uk-inline uk-light">
                  <img className="uk-border-rounded-medium" src="https://via.placeholder.com/300x160" alt="Course Title"/>
                    <div className="uk-position-cover uk-card-overlay uk-border-rounded-medium"></div>
                    <div className="uk-position-xsmall uk-position-top-right">
                      <a href="#" className="uk-icon-button uk-like uk-position-z-index uk-position-relative"
                         data-uk-icon="heart"></a>
                    </div>
                </div>
                <div>
                  <h3 className="uk-card-title uk-text-500 uk-margin-small-bottom uk-margin-top">Baked Macaroni and Cheese</h3>
                  <div className="uk-text-xsmall uk-text-muted" data-uk-grid>
                    <div className="uk-width-auto uk-flex uk-flex-middle">
                      <span className="uk-rating-filled" data-uk-icon="icon: star; ratio: 0.7"></span>
                      <span className="uk-margin-xsmall-left">2.9</span>
                      <span>(311)</span>
                    </div>
                    <div className="uk-width-expand uk-text-right">by Thomas Haller</div>
                  </div>
                </div>
                <a href="recipe.html" className="uk-position-cover"></a>
              </div>
            </div>
            <div>
              <div
                className="uk-card">
                <div className="uk-card-media-top uk-inline uk-light">
                  <img className="uk-border-rounded-medium" src="https://via.placeholder.com/300x160" alt="Course Title"/>
                    <div className="uk-position-cover uk-card-overlay uk-border-rounded-medium"></div>
                    <div className="uk-position-xsmall uk-position-top-right">
                      <a href="#" className="uk-icon-button uk-like uk-position-z-index uk-position-relative"
                         data-uk-icon="heart"></a>
                    </div>
                </div>
                <div>
                  <h3 class="uk-card-title uk-text-500 uk-margin-small-bottom uk-margin-top">Deb's General Tso's Chicken</h3>
                  <div class="uk-text-xsmall uk-text-muted" data-uk-grid>
                    <div class="uk-width-auto uk-flex uk-flex-middle">
                      <span class="uk-rating-filled" data-uk-icon="icon: star; ratio: 0.7"></span>
                      <span class="uk-margin-xsmall-left">4.4</span>
                      <span>(68)</span>
                    </div>
                    <div class="uk-width-expand uk-text-right">by Thomas Haller</div>
                  </div>
                </div>
                <a href="recipe.html" class="uk-position-cover"></a>
              </div>
            </div>
          </div>

          <PaginationComponent />
        </div>
      </div>
    </LayoutComponent>
  );
};

export default CoursesPage;
