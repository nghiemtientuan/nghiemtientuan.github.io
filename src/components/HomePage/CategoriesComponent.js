import React from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

// Routers
import { pathUrl } from '../../routes';

const CategoriesComponent = (_props) => {
  const { t } = useTranslation();
  const categories = useSelector((state) => state.data.categories);

  return (
    <div className="uk-width-1-4@m sticky-container">
      <div data-uk-sticky="offset: 100; bottom: true; media: @m;">
        <h2>{t('category.title')}</h2>
        <ul
          className="uk-nav-default uk-nav-parent-icon uk-nav-filter uk-margin-medium-top"
          data-uk-nav
        >
          {categories.map((category, categoryIndex) => (
            <li className={category?.childs?.length ? 'uk-parent' : ''} key={categoryIndex}>
              <Link to={pathUrl.user.Categories + category?.id}>{category?.name}</Link>
              {category?.childs?.length ? (
                <ul className="uk-nav-sub">
                  {category?.childs.map((child, childIndex) => (
                    <li key={childIndex}>
                      <Link to={pathUrl.user.Categories + child?.id}>{child?.name}</Link>
                    </li>
                  ))}
                </ul>
              ) : null}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CategoriesComponent;
