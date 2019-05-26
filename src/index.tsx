import '@babel/polyfill';

import React from 'react';

import { render } from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { DarkMode } from '~/components/dark-mode';
import { Main } from '~/routes/main';

import '~/css/index.scss';

const App = () => (
  <DarkMode.Provider>
    <Router>
      <Route component={Main} />
    </Router>
  </DarkMode.Provider>
);

render(<App />, document.getElementById('root'));
