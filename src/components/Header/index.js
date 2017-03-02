import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
  };

  render() {
    const { to, img } = this.props
    return (
      <header className="header">
        <h1 className="logo">R</h1>
        <Link to={to} className="link-btn">
          <img src={img} alt="" />
        </Link>
      </header>
    );
  }
}

export default Header;
