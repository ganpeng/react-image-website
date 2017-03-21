import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import Carousel from '../../components/Carousel/'
import Header from '../../components/Header/'
import Footer from '../../components/Footer/'


class HomePage extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
  };


  render() {
    const { images } = this.props;
    return (
      <div className="home-container">
        <Header/>
        <Carousel images={images} />
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




export default connect(mapStateToProps, {})(HomePage);
