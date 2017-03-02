import React, { Component, PropTypes } from 'react';

class Footer extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
  };

  render() {
    return (
      <footer className="footer">
        DR Designer&nbsp;&nbsp;&nbsp;E-mail : 13621145124@163.com
      </footer>
    );
  }
}

export default Footer;
