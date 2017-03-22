import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import Header from '../../components/Header/';
import Footer from '../../components/Footer/';

class ImageListPage extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
  };

  render() {
    const { match, images } = this.props
    const { tagid } = match.params;
    const tagImage = images.filter((image) => image.tagName === tagid);

    const { imagelist } = tagImage[0];

    return (
      <div>
        <Header />
        <div className="imagelist-container">
          <div className="image-list">
            {
              imagelist && imagelist.map((image, index) => {
                return <img src={image} key={index} alt="图片" />
              })
            }
          </div>
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


export default connect(mapStateToProps, {})(ImageListPage);
