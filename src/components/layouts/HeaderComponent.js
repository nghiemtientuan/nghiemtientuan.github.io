import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { MenuItem, Select } from '@mui/material';

// Utils
import { APP } from '../../constants/Config';
import { COOKIE_KEYS, getCookie, setCookie } from '../../utils/cookie';

// Routers
import { pathUrl } from '../../routes';

const langs = [
  {
    label: 'VN',
    value: 'vn',
  },
  {
    label: 'EN',
    value: 'en',
  },
];

const HeaderComponent = (_props) => {
  const { t, i18n } = useTranslation();

  const menus = [
    {
      url: pathUrl.user.HomePage,
      title: t('header.menus.home'),
    },
    {
      url: pathUrl.user.Courses,
      title: t('header.menus.courses'),
    },
    {
      url: pathUrl.user.Activities,
      title: t('header.menus.activities'),
    },
    {
      url: pathUrl.user.Achievements,
      title: t('header.menus.achievements'),
    },
    {
      url: pathUrl.user.Tools,
      title: t('header.menus.tools'),
    },
    {
      url: pathUrl.user.Contact,
      title: t('header.menus.contact'),
    },
  ];

  // states
  const [langState, setLangState] = useState(getCookie(COOKIE_KEYS.LANG) ?? langs[0].value);

  // effects
  useEffect(() => {
    i18n.changeLanguage(langState);
    setCookie(COOKIE_KEYS.LANG, langState);
  }, [langState]);

  const handleChangeLang = (event) => {
    const {value} = event.target;
    setLangState(value);
  };

  return (
    <nav className="uk-navbar-container uk-letter-spacing-small">
      <div className="uk-container">
        <div className="uk-position-z-index" data-uk-navbar>
          <div className="uk-navbar-left">
            <Link className="uk-navbar-item uk-logo" to={pathUrl.user.HomePage}>
              {APP.name}
            </Link>
            <ul className="uk-navbar-nav uk-visible@m uk-margin-large-left">
              {menus.map((menu, menuIndex) => (
                <li key={menuIndex} className="uk-active">
                  <Link to={menu.url}>{menu.title}</Link>
                </li>
              ))}
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
                <Select
                  variant="standard"
                  disableUnderline
                  displayEmpty
                  value={langState}
                  onChange={handleChangeLang}
                >
                  {
                    langs.map((lang, langIndex) => (
                      <MenuItem key={langIndex} value={lang.value}>{lang.label}</MenuItem>
                    ))
                  }
                </Select>
              </li>
            </ul>

            <ul className="uk-navbar-nav uk-visible@m uk-hidden">
              <li>
                <a href="sign-in.html">Sign In</a>
              </li>
            </ul>
            <div className="uk-navbar-item uk-hidden">
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
