import React from 'react';

import { AnchorButton, ButtonGroup, FocusStyleManager, H1, H2 } from '@blueprintjs/core';

import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Consumer as ThemeConsumer } from '~/components/themes';

import '~/css/main.scss';
import '~/css/blink.scss';

FocusStyleManager.onlyShowFocusOnTabs();

const socialLinks = [
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/mjbcopland',
    icon: faLinkedin,
  },
  {
    name: 'GitHub',
    href: 'https://github.com/mjbcopland',
    icon: faGithub,
  },
  {
    name: 'Email',
    href: 'mailto:mjbcopland@gmail.com',
    icon: faEnvelope,
  },
];

export default () => (
  <ThemeConsumer>
    {({ dark }) => (
      <div id="main">
        <div id="header">
          <H1>Michael Copland</H1>
        </div>
        <div id="content">
          <div>
            <ButtonGroup minimal={true} large={true}>
              {socialLinks.map(({ name, href, icon }) => (
                <AnchorButton key={name} href={href}>
                  {dark ? name : <FontAwesomeIcon icon={icon} />}
                </AnchorButton>
              ))}
            </ButtonGroup>
          </div>
        </div>
        <div id="footer">© Michael Copland 2019</div>
      </div>
    )}
  </ThemeConsumer>
);
