import React, { Component, PropTypes } from 'react';

class ImageListPage extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
  };

  render() {
    const { match } = this.props
    console.log(match)
    return (
      <div>
        ImageListPage   { match.params.tagid }
      </div>
    );
  }
}

export default ImageListPage;
