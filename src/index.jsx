import '@babel/polyfill';

import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, withRouter } from 'react-router-dom';

import { Provider as ThemeProvider } from '~/components/Themes';
import Main from '~/routes/Main';

import '~/css/index.scss';

const Basename = withRouter(
  class extends React.Component {
    componentDidMount() {
      const { history, basename = '/' } = this.props;
      history.replace(basename);
    }

    render() {
      const { children } = this.props;
      return children;
    }
  },
);

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
