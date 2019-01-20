import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

import { AnchorButton, ButtonGroup } from '@blueprintjs/core';

import '~/css/social.scss';

export default (props) => {
  const links = [
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

  return (
    <div>
      <ButtonGroup minimal large>
        {links.map(({ name, href, icon }) => (
          <AnchorButton key={name} href={href}>
            <FontAwesomeIcon icon={icon} {...props} />
          </AnchorButton>
        ))}
      </ButtonGroup>
    </div>
  );
};
