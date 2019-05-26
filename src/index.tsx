import '@babel/polyfill';

import React from 'react';

import { render } from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { Basename } from '~/components/basename';
import { Provider as ThemeProvider } from '~/components/themes';
import Main from '~/routes/main';

import '~/css/index.scss';

const App = () => (
  <ThemeProvider>
    <Router>
      <Basename>
        <Route component={Main} />
      </Basename>
    </Router>
  </ThemeProvider>
);

render(<App />, document.getElementById('root'));
