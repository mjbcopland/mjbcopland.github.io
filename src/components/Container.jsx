import React from 'react';
import PropTypes from 'prop-types';

export default class Container extends React.PureComponent {
  static propTypes = {
    children: PropTypes.oneOfType([PropTypes.element, PropTypes.arrayOf(PropTypes.element)])
      .isRequired,
  };

  render() {
    const { children } = this.props;
    return <div {...this.props}>{children}</div>;
  }
}
