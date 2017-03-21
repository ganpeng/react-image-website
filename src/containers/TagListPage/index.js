import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import TagList from '../../components/TagList/'
import Header from '../../components/Header/'
import Footer from '../../components/Footer/'


class TagListPage extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
  };

  render() {
    const { images } = this.props;
    return (
      <div className="taglist-container">
        <Header
          home={true}
        />
        <div className="taglist-wrapper">
          <TagList images={images} />
        </div>
        <Footer />
      </div>
    );
  }
}


function mapStateToProps(state) {
  return {
    images: state.images
  }
}


export default connect(mapStateToProps, {})(TagListPage);
