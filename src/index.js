import React from 'react';
import ReactDOM from 'react-dom/client';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { I18nextProvider } from 'react-i18next';

// styles
import 'react-toastify/dist/ReactToastify.css';
import './index.css';

// components
import AppContainer from './AppContainer';

import myReducer from './reducers/index';
import rootSaga from './saga/rootSaga';

// i18n
import i18n from './locales/i18n';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(myReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));
sagaMiddleware.run(rootSaga);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <I18nextProvider i18n={i18n}>
    <Provider store={store}>
      <AppContainer />

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable={false}
        pauseOnHover
        theme="light"
      />
    </Provider>
  </I18nextProvider>
);
