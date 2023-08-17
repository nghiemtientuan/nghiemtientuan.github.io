import * as Types from './../constants/ActionTypes';

const parseKey = '||';

let initialState = {
  slides: [],
  categories: [],
  posts: [],
};

const mappingData = (responseData) => {
  // slides
  const slides = getData(responseData, 'slides');
  const categories = getData(responseData, 'categories');
  const posts = getData(responseData, 'posts');

  return {
    slides,
    categories,
    posts
  }
};

const getData = (responseData, key) => {
  const keyData = responseData.find(items => {
    if (items.length > 0) {
      const k = items[0].split(parseKey).shift();

      return k === key;
    }

    return false;
  });

  if (keyData) {
    // Remove key in response
    const k = keyData.shift().split(parseKey).pop();

    if (k === 'json') {
      return keyData.map(data => {
        try {
          return JSON.parse(data);
        } catch (_e) {
          return null;
        }
      })
    }

    return keyData;
  }

  return [];
}

let myReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.FETCH_MASTER_DATA_SUCCESS:
      const data = mappingData(action.data);

      return {
        ...state,
        ...data,
      };
    default:
      return {...state};
  }
}

export default myReducer;
