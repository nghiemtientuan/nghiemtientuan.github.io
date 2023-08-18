import React from 'react';
import { useSelector } from 'react-redux';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper';
import Lazyload from 'react-lazyload';
import { useTranslation } from 'react-i18next';

// Import Swiper styles
import 'swiper/css';

// Configs
import { REACT_APP_URL_SLIDES } from '../../constants/Config';

const SliderComponent = (_props) => {
  const slides = useSelector((state) => state.data.slides);
  const { t } = useTranslation();

  return (
    <div className="uk-container">
      <Swiper
        spaceBetween={2}
        modules={[Pagination, Navigation, Autoplay]}
        navigation={true}
        loop={true}
        pagination={{
          dynamicBullets: true,
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
      >
        {slides.map((slide, slideIndex) => (
          <SwiperSlide key={slideIndex}>
            <span style={{ opacity: 0 }}>.</span>
            <div
              className="uk-border-rounded-large uk-background-top-center uk-background-cover
          uk-background-norepeat uk-light uk-inline uk-overflow-hidden uk-width-1-1"
              style={{ backgroundImage: `url(${slide})` }}
            >
              <div className="uk-position-cover uk-header-overlay"></div>

              <div className="uk-position-relative" data-uk-grid>
                <div className="uk-width-1-2@m uk-flex uk-flex-middle">
                  <div className="uk-padding-large uk-padding-remove-right">
                    <a
                      className="uk-text-secondary uk-text-600 uk-text-small hvr-forward"
                      href={REACT_APP_URL_SLIDES}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Lazyload>
                        <img src={slide} alt="slide" />
                      </Lazyload>
                      {t('slides.register_now')}
                      <span className="uk-margin-small-left" data-uk-icon="arrow-right"></span>
                    </a>
                  </div>
                </div>

                <div className="uk-width-expand@m"></div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SliderComponent;
