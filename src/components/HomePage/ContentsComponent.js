import React from 'react';

const ContentsComponent = (_props) => {
  return (
    <div className="uk-width-expand@m">
      <div data-uk-grid>
        <div className="uk-width-expand@m">
          <form className="uk-search uk-search-default uk-width-1-1">
            <span data-uk-search-icon></span>
            <input className="uk-search-input uk-text-small uk-border-rounded uk-form-large" type="search" placeholder="Search for recipes..." />
          </form>          
        </div>
        <div className="uk-width-1-3@m uk-text-right@m uk-light">
          <select className="uk-select uk-select-light uk-width-auto uk-border-pill uk-select-primary">
            <option>Sort by: Latest</option>
            <option>Sort by: Top Rated</option>
            <option>Sort by: Trending</option>
          </select>
        </div>
      </div>      
      <div className="uk-child-width-1-2 uk-child-width-1-3@s" data-uk-grid>
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
                <div className="uk-width-expand uk-text-right">by John Keller</div>
              </div>
            </div>
            <a href="recipe.html" className="uk-position-cover"></a>
          </div>
        </div>
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
              <img className="uk-border-rounded-medium" src="https://via.placeholder.com/300x160" alt="Course Title" />
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
              <img className="uk-border-rounded-medium" src="https://via.placeholder.com/300x160" alt="Course Title" />
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
              <img className="uk-border-rounded-medium" src="https://via.placeholder.com/300x160" alt="Course Title" />
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
              <img className="uk-border-rounded-medium" src="https://via.placeholder.com/300x160" alt="Course Title" />
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
              <img className="uk-border-rounded-medium" src="https://via.placeholder.com/300x160" alt="Course Title" />
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
              <img className="uk-border-rounded-medium" src="https://via.placeholder.com/300x160" alt="Course Title" />
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
              <img className="uk-border-rounded-medium" src="https://via.placeholder.com/300x160" alt="Course Title" />
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
              <img className="uk-border-rounded-medium" src="https://via.placeholder.com/300x160" alt="Course Title" />
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
              <img className="uk-border-rounded-medium" src="https://via.placeholder.com/300x160" alt="Course Title" />
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
              <img className="uk-border-rounded-medium" src="https://via.placeholder.com/300x160" alt="Course Title" />
              <div className="uk-position-cover uk-card-overlay uk-border-rounded-medium"></div>
              <div className="uk-position-xsmall uk-position-top-right">
                <a href="#" className="uk-icon-button uk-like uk-position-z-index uk-position-relative"
                  data-uk-icon="heart"></a>
              </div>
            </div>
            <div>
              <h3 className="uk-card-title uk-text-500 uk-margin-small-bottom uk-margin-top">Deb's General Tso's Chicken</h3>
              <div className="uk-text-xsmall uk-text-muted" data-uk-grid>
                <div className="uk-width-auto uk-flex uk-flex-middle">
                  <span className="uk-rating-filled" data-uk-icon="icon: star; ratio: 0.7"></span>
                  <span className="uk-margin-xsmall-left">4.4</span>
                  <span>(68)</span>
                </div>
                <div className="uk-width-expand uk-text-right">by Thomas Haller</div>
              </div>
            </div>
            <a href="recipe.html" className="uk-position-cover"></a>
          </div>
        </div>
      </div>

      <div className="uk-margin-large-top uk-text-small">
        <ul className="uk-pagination uk-flex-center uk-text-500 uk-margin-remove" data-uk-margin>
          <li><a href="#"><span data-uk-pagination-previous></span></a></li>
          <li><a href="#">1</a></li>
          <li className="uk-active"><span>2</span></li>
          <li><a href="#">3</a></li>
          <li><a href="#">4</a></li>
          <li><a href="#"><span data-uk-pagination-next></span></a></li>
        </ul>
      </div>
    </div>
  );
};

export default ContentsComponent;
