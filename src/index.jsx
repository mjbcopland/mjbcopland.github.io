import '@babel/polyfill';

import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { Provider as ThemeProvider } from '~/components/Themes';
import Main from '~/routes/Main';

import '~/css/index.scss';

const App = () => (
  <ThemeProvider>
    <Router>
      <Route component={Main} />
    </Router>
  </ThemeProvider>
);

render(<App />, document.getElementById('root'));
