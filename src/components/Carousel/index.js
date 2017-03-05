import React, { Component, PropTypes } from 'react';
import ImageGallery from 'react-image-gallery';

class Carousel extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
  };

  handleImageLoad(event) {
    console.log('Image loaded', event.target )
  }


  render() {

    const images = [
      {
        original: 'http://lorempixel.com/1000/600/nature/1/',
        thumbnail: 'http://lorempixel.com/250/150/nature/1/'
      },
      {
        original: 'http://lorempixel.com/1000/600/nature/2/',
        thumbnail: 'http://lorempixel.com/250/150/nature/2/'
      },
      {
        original: 'http://lorempixel.com/1000/600/nature/3/',
        thumbnail: 'http://lorempixel.com/250/150/nature/3/'
      }
    ]

    return (
      <div className="carousel-container">
        <div className="carousel-wrapper">
          <div className="gallery-wrapper">
            <ImageGallery
              showThumbnails={false}
              items={images}
              slideInterval={4000}
              onImageLoad={this.handleImageLoad.bind(this)}
              showFullscreenButton={false}
              showPlayButton={false}
              autoPlay={true}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Carousel;
