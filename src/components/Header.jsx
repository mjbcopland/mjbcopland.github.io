import React from 'react';
import PropTypes from 'prop-types';

export default class Header extends React.PureComponent {
  static propTypes = {
    name: PropTypes.string,
  };

  static defaultProps = {
    name: 'Anonymous',
  };

  render() {
    const { name } = this.props;
    return <h1>{name}</h1>;
  }
}
