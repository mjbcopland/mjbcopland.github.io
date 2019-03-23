import React from 'react';
import classNames from 'classnames';

import { H1, FocusStyleManager } from '@blueprintjs/core';

import { Consumer as ThemeConsumer } from '~/components/Themes';
import Social from '~/components/Social';

import '~/css/main.scss';

FocusStyleManager.onlyShowFocusOnTabs();

export default () => (
  <ThemeConsumer>
    {(themes) => (
      <div id="main" className={classNames(themes)}>
        <div id="header">
          <H1>Michael Copland</H1>
        </div>
        <div id="content">
          <Social />
        </div>
        <div id="footer">© Michael Copland 2019</div>
      </div>
    )}
  </ThemeConsumer>
);
