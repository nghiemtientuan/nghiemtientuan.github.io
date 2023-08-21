/**
 * set cookie value
 * @param name  :cookie_name
 * @param value :cookie_value
 * @param days  :days, default 30 days
 * */
export const setCookie = (name, value, days = 30) => {
  let expires = '';
  if (days) {
    let date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = '; expires=' + date.toUTCString();
  }
  let valueString = encodeURIComponent(JSON.stringify(value));
  document.cookie = name + '=' + (valueString || '') + expires + '; path=/';
};

/**
 * get cookie value
 * @param  name   :cookie_name
 * @return string :value
 * */
export const getCookie = (name) => {
  let nameEQ = name + '=';
  let ca = document.cookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) == 0) {
      return JSON.parse(decodeURIComponent(c.substring(nameEQ.length, c.length)));
    }
  }

  return null;
};

/**
 * delete cookie
 * */
export const deleteCookie = (name) => {
  setCookie(name, {}, -1);
};

export const COOKIE_KEYS = {
  LANG: 'LANG',
};
