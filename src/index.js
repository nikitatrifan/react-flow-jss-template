import './index.css';
import 'react-loading-bar/dist/index.css';
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root'),
);

if (module.hot) {
  module.hot.accept(() => {
    const NewApp = require('./App.js').default;

    render(
      <BrowserRouter>
        <NewApp />
      </BrowserRouter>,
      document.getElementById('root'),
    );
  });
}

registerServiceWorker();
