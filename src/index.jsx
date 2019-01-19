/* global document */

import React from 'react';
import { render } from 'react-dom';

import '@babel/polyfill';
import '@blueprintjs/core/lib/css/blueprint.css';

import { Container, Header /* About, Contact */, Footer } from '~/components';

const App = () => (
  <Container>
    <Header name="Michael Copland" />
    {/* <About />
    <Contact /> */}
    <Footer />
  </Container>
);

render(<App />, document.getElementById('root'));
