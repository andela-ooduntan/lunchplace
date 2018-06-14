import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { browserHistory, Router } from 'react-router';
import routes from './routes/index';
import configureStore from './store/configStore';
import registerServiceWorker from './registerServiceWorker';

const app = document.getElementById('root');
const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes}/>
  </Provider>,
  app);
registerServiceWorker();
