import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { HistoryRouter as Router } from 'redux-first-history/rr6';

import App from './components/App';
import './index.scss';
import store, { history } from './redux';
import './scss/fonts.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>
)
