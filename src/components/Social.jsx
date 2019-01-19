import React from 'react';
import { Card } from '@blueprintjs/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

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
    <Card>
      <ul>
        {links.map(({ name, href, icon }) => (
          <li key={name}>
            <a href={href}>
              <FontAwesomeIcon icon={icon} {...props} />
            </a>
          </li>
        ))}
      </ul>
    </Card>
  );
};
