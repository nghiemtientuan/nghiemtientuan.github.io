import {useParams} from 'react-router-dom';

// utils
import {linksConfig} from './linksConfig';

const RedirectPage = (props) => {
  const { shorten } = useParams();

  const link = linksConfig.find((linkTmp) => linkTmp.pathShorten === shorten);
  if (!link) {
    return '404 - NOT FOUND';
  }

  window.location.href = link.rawUrl;

  return (
    <>
      <h1>Just a moment...</h1>
      <div className="slider">
        <div className="line"></div>
        <div className="break dot1"></div>
        <div className="break dot2"></div>
        <div className="break dot3"></div>
      </div>
      <p>We're redirecting you to our new site... Not working? <a href={link.rawUrl}>Click here.</a></p>
    </>
  );
};

export default RedirectPage;
