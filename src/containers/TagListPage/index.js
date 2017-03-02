import React, { Component, PropTypes } from 'react';

import TagList from '../../components/TagList/'
import Header from '../../components/Header/'
import Footer from '../../components/Footer/'


class TagListPage extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
  };

  render() {
    return (
      <div className="taglist-container">
        <Header
          to="/"
          img={require('../../../images/taglistlink1.png')}
        />
        <div className="taglist-wrapper">
          <TagList />
        </div>
        <Footer />
      </div>
    );
  }
}

export default TagListPage;
