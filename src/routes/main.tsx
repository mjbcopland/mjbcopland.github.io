import React from 'react';
import Sound, { PlayStatus } from 'react-sound';

import { AnchorButton, Button, ButtonGroup, Classes, FocusStyleManager, H1, Icon, Switch } from '@blueprintjs/core';

import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { DarkMode } from '~/components/dark-mode';

import '~/css/main.scss';

import mp3 from '~/mp3/Seven Kingdoms.mp3';

FocusStyleManager.onlyShowFocusOnTabs();

const socialLinks = [
  {
    name: 'LinkedIn',
    icon: faLinkedin,
    href: 'https://www.linkedin.com/in/mjbcopland',
  },
  {
    name: 'GitHub',
    icon: faGithub,
    href: 'https://github.com/mjbcopland',
  },
  {
    name: 'Email',
    icon: faEnvelope,
    href: 'mailto:mjbcopland@gmail.com',
  },
];

export const Main = () => (
  <DarkMode.Consumer>
    {(dark) => (
      <div id="main">
        <Sound loop url={mp3} playStatus={(dark.enabled ? 'PLAYING' : 'PAUSED') as PlayStatus} />
        <div id="header">
          <H1>Michael Copland</H1>
        </div>
        <div id="content">
          <div>
            <ButtonGroup minimal large>
              {socialLinks.map(({ name, href, icon }) => (
                <AnchorButton key={name} href={href}>
                  {dark.enabled ? name : <FontAwesomeIcon icon={icon} />}
                </AnchorButton>
              ))}
            </ButtonGroup>
          </div>
        </div>
        <div id="footer">
          <Button minimal icon="moon" onClick={dark.toggle} />
        </div>
      </div>
    )}
  </DarkMode.Consumer>
);
