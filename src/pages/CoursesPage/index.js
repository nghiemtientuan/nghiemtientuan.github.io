import React, {useState} from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Lazyload from 'react-lazyload';

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
  const courses = useSelector((state) => state.data.courses);

  // states
  const [keyWord, setKeyWord] = useState('');
  const [sort, setSort] = useState(LATEST_VALUE);

  const handleChangeSort = (e) => {
    setSort(e?.target?.value);
  };

  const handleChangeKeyword = (e) => {
    setKeyWord(e?.target?.value);
  };

  let filterCourses = courses;
  if (keyWord) {
    filterCourses = filterCourses.filter((courseTmp) => {
      return courseTmp.name.includes(keyWord) || courseTmp.name_en.includes(keyWord);
    });
  }
  if (sort === EARLIEST_VALUE) {
    filterCourses = courses.reverse();
  }

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
                  value={keyWord}
                  onChange={handleChangeKeyword}
                />
              </form>
            </div>

            <div className="uk-width-1-2@m uk-text-right@m">
              <select
                value={sort}
                onChange={handleChangeSort}
                className="uk-select uk-select-light uk-width-auto uk-border-pill uk-select-muted"
              >
                {
                  sortOptions.map((option, optionIndex) => (
                    <option key={optionIndex}>{option.name}</option>
                  ))
                }
              </select>
            </div>
          </div>

          <div
            className="uk-child-width-1-2 uk-child-width-1-3@s uk-child-width-1-4@m uk-margin-medium-top"
            data-uk-grid
          >
            {
              filterCourses.map((course, courseIndex) => (
                <div key={courseIndex}>
                  <div
                    className="uk-card">
                    <div className="uk-card-media-top uk-inline uk-light">
                      <Lazyload>
                        <img className="uk-border-rounded-medium" src={course?.thumbnail} alt={course?.name} />
                      </Lazyload>
                      <div className="uk-position-cover uk-card-overlay uk-border-rounded-medium"></div>
                    </div>

                    <div>
                      <h3 className="uk-card-title uk-text-500 uk-margin-small-bottom uk-margin-top">{course?.name}</h3>
                      <div className="uk-text-xsmall uk-text-muted" data-uk-grid>
                        <div className="uk-width-auto uk-flex uk-flex-middle">
                          <span className="uk-margin-xsmall-left uk-margin-remove-left">{course?.name_en}</span>
                        </div>
                        <div className="uk-width-expand uk-text-right">{t('author.mrtuan')}</div>
                      </div>
                    </div>

                    <Link to="recipe.html" className="uk-position-cover" />
                  </div>
                </div>
              ))
            }
          </div>

          <PaginationComponent />
        </div>
      </div>
    </LayoutComponent>
  );
};

export default CoursesPage;
