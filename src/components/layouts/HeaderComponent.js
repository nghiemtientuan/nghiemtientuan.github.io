import React from 'react';
import { useTranslation } from 'react-i18next';

// Utils
import { APP } from '../../constants/Config';

// Routers
import { pathUrl } from '../../routes';

const HeaderComponent = (_props) => {
  const { t } = useTranslation();

  const menus = [
    {
      url: pathUrl.user.HomePage,
      title: t('header.menus.home'),
    },
  ];

  return (
    <nav className="uk-navbar-container uk-letter-spacing-small">
      <div className="uk-container">
        <div className="uk-position-z-index" data-uk-navbar>
          <div className="uk-navbar-left">
            <a className="uk-navbar-item uk-logo" href="index.html">
              {APP.name}
            </a>
            <ul className="uk-navbar-nav uk-visible@m uk-margin-large-left">
              {menus.map((menu, menuIndex) => (
                <li key={menuIndex} className="uk-active">
                  <a href={menu.url}>{menu.title}</a>
                </li>
              ))}
              <li>
                <a href="recipe.html">Recipe</a>
              </li>
              <li>
                <a href="search.html">Search</a>
              </li>
              <li>
                <a href="contact.html">Contact</a>
              </li>
            </ul>
          </div>

          <div className="uk-navbar-right">
            <div>
              <a className="uk-navbar-toggle" data-uk-search-icon href="#"></a>
              <div
                className="uk-drop uk-background-default"
                data-uk-drop="mode: click; pos: left-center; offset: 0"
              >
                <form className="uk-search uk-search-navbar uk-width-1-1">
                  <input
                    className="uk-search-input uk-text-demi-bold"
                    type="search"
                    placeholder="Search..."
                    autoFocus
                  />
                </form>
              </div>
            </div>

            <ul className="uk-navbar-nav uk-visible@m">
              <li>
                <a href="sign-in.html">Sign In</a>
              </li>
            </ul>
            <div className="uk-navbar-item">
              <div>
                <a className="uk-button uk-button-primary" href="sign-up.html">
                  Sign Up
                </a>
              </div>
            </div>
            <a className="uk-navbar-toggle uk-hidden@m" href="#offcanvas" data-uk-toggle>
              <span data-uk-navbar-toggle-icon></span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default HeaderComponent;
