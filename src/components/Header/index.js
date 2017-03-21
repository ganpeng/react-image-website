import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router-dom';
import classnames from 'classnames';

class Header extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
  };

  render() {
    const { home } = this.props;
    let to;
    if (home) {
      to = '/';
    } else {
      to = '/taglist';
    }
    return (
      <header className="header">
        <h1 className="logo">R</h1>
        <Link to={to} className={classnames("link-btn", {"home-link-btn": !home, "taglist-link-btn": home})}></Link>
      </header>
    );
  }
}

export default Header;
