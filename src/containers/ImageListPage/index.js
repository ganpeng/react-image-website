import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { PhotoSwipeGallery } from 'react-photoswipe';

import 'react-photoswipe/lib/photoswipe.css';

import Header from '../../components/Header/';
import Footer from '../../components/Footer/';

class ImageListPage extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
  };

  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      options: {
        closeOnScroll: false
      }
    }
  }

  getThumbnailContent(item) {
    return (
      <img src={item.thumbnail} />
    );
  };

  render() {
    const { match, images } = this.props
    const { options } = this.state;
    const { tagid } = match.params;
    const tagImage = images.filter((image) => image.tagName === tagid);

    const { imagelist } = tagImage[0]
    const items = imagelist.map((image, index) => {
      return {
        src: image.src,
        thumbnail: image.src,
        w: image.w,
        h: image.h
      }
    });

    return (
      <div>
        <Header />
        <div className="imagelist-container">
          <div className="image-list">
            {/* { */}
            {/*   imagelist && imagelist.map((image, index) => { */}
            {/*     return <img src={image} key={index} alt="图片" /> */}
            {/*   }) */}
            {/* } */}
            <PhotoSwipeGallery items={items}
              options={options}
              thumbnailContent={this.getThumbnailContent}/>
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
