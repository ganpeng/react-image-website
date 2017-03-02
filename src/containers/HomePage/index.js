import React, { Component, PropTypes } from 'react';

import Carousel from '../../components/Carousel/'
import Header from '../../components/Header/'
import Footer from '../../components/Footer/'


class HomePage extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
  };


  render() {
    return (
      <div className="home-container">
        <Header
          to="/taglist"
          img={require('../../../images/homelink1.png')}
        />
        <Carousel />
        <Footer />
      </div>
    );
  }
}

export default HomePage;
