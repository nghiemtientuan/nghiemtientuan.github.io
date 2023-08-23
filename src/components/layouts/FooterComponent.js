import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

// Utils
import { APP } from '../../constants/Config';
import { pathUrl } from '../../routes';

const FooterComponent = (_props) => {
  const {t} = useTranslation();

  return (
    <footer className="uk-section uk-section-default">
      <div className="uk-container uk-text-secondary uk-text-500">
        <div className="uk-child-width-1-2@s" data-uk-grid>
          <div>
            <Link to={pathUrl.user.HomePage} className="uk-logo">{APP.name}</Link>
          </div>

          <div className="uk-flex uk-flex-middle uk-flex-right@s">
            <div data-uk-grid className="uk-child-width-auto uk-grid-small">
              <div>
                <a
                  href={APP.socials.facebook}
                  data-uk-icon="icon: facebook; ratio: 0.8"
                  className="uk-icon-button facebook"
                  target="_blank"
                ></a>
              </div>
              <div>
                <a
                  href={APP.socials.github}
                  data-uk-icon="icon: github; ratio: 0.8"
                  className="uk-icon-button github"
                  target="_blank"
                ></a>
              </div>
            </div>
          </div>
        </div>

        <div className="uk-child-width-1-2@s uk-child-width-1-4@m" data-uk-grid>
          <div>
            <ul className="uk-list uk-text-small">
              <li>
                <Link className="uk-link-text" to={pathUrl.user.Courses}>
                  {t('header.menus.courses')}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <ul className="uk-list uk-text-small">
              <li>
                <Link className="uk-link-text" to={pathUrl.user.Achievements}>
                  {t('header.menus.achievements')}
                </Link>
              </li>
              <li>
                <Link className="uk-link-text" to={pathUrl.user.Activities}>
                  {t('header.menus.activities')}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <ul className="uk-list uk-text-small">
              <li>
                <Link className="uk-link-text" to={pathUrl.user.Tools}>
                  {t('header.menus.tools')}
                </Link>
              </li>
              <li>
                <Link className="uk-link-text" to={pathUrl.user.Tools}>
                  {t('header.menus.products')}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <ul className="uk-list uk-text-small">
              <li>
                <Link className="uk-link-text" to={pathUrl.user.Contact}>
                  {t('header.menus.contact')}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;
