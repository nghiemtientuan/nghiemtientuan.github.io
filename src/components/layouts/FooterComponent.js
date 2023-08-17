import React from 'react';

const FooterComponent = (_props) => {
  return (
    <footer className="uk-section uk-section-default">
      <div className="uk-container uk-text-secondary uk-text-500">
        <div className="uk-child-width-1-2@s" data-uk-grid>
          <div>
            <a href="#" className="uk-logo">Kocina</a>
          </div>

          <div className="uk-flex uk-flex-middle uk-flex-right@s">
            <div data-uk-grid className="uk-child-width-auto uk-grid-small">
              <div>
                <a href="https://www.facebook.com/" data-uk-icon="icon: facebook; ratio: 0.8" className="uk-icon-button facebook" target="_blank"></a>
              </div>
              <div>
                <a href="https://www.instagram.com/" data-uk-icon="icon: instagram; ratio: 0.8" className="uk-icon-button instagram" target="_blank"></a>
              </div>
              <div>
                <a href="mailto:info@blacompany.com" data-uk-icon="icon: twitter; ratio: 0.8" className="uk-icon-button twitter" target="_blank"></a>
              </div>
            </div>
          </div>
        </div>

        <div className="uk-child-width-1-2@s uk-child-width-1-4@m" data-uk-grid>
          <div>
            <ul className="uk-list uk-text-small">
              <li><a className="uk-link-text" href="#">Presentations</a></li>
              <li><a className="uk-link-text" href="#">Professionals</a></li>
              <li><a className="uk-link-text" href="#">Stores</a></li>
            </ul>
          </div>
          <div>
            <ul className="uk-list uk-text-small">
              <li><a className="uk-link-text" href="#">Webinars</a></li>
              <li><a className="uk-link-text" href="#">Workshops</a></li>
              <li><a className="uk-link-text" href="#">Local Meetups</a></li>
            </ul>
          </div>
          <div>
            <ul className="uk-list uk-text-small">
              <li><a className="uk-link-text" href="#">Our Initiatives</a></li>
              <li><a className="uk-link-text" href="#">Giving Back</a></li>
              <li><a className="uk-link-text" href="#">Communities</a></li>
            </ul>
          </div>
          <div>
            <ul className="uk-list uk-text-small">
              <li><a className="uk-link-text" href="#">Contact Form</a></li>
              <li><a className="uk-link-text" href="#">Work With Us</a></li>
              <li><a className="uk-link-text" href="#">Visit Us</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;
