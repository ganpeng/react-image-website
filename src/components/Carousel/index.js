import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router-dom';
import ImageGallery from 'react-image-gallery';

class Carousel extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
  };

  handleImageLoad(event) {
    console.log('Image loaded', event.target )
  }

  _renderItem(item) {
    return (
      <div className='image-gallery-image'>
        <Link to={`/imglist/${item.tagName}`}>
          <img
              src={item.original}
              alt="图片"
          />
        </Link>
      </div>
    )
  }

  render() {

    const images = this.props.images.map((image) => {
      return {
        original: image.tagimage,
        tagName: image.tagName
      }
    })

    return (
      <div className="carousel-container">
        <div className="carousel-wrapper">
          <div className="gallery-wrapper">
            <ImageGallery
              showThumbnails={false}
              items={images}
              slideInterval={4000}
              showFullscreenButton={false}
              showPlayButton={false}
              autoPlay={true}
              renderItem={this._renderItem}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Carousel;
