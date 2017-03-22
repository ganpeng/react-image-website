import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router-dom';

class TagList extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
  };

  render() {


    const images = this.props.images.map((image, index) => {
      return {
        id: index + 1,
        src: image.tagimage,
        tagName: image.tagName
      }
    })


    return (
      <ul className="taglist">
        {
          images.map((image) => {
            return (

              <li key={image.id} className="tag-item">
                <Link to={`/imglist/${image.tagName}`}>
                  <img src={image.src} alt="image" />
                  <div className="tag-mask">
                    <span className="tag-name">{image.tagName}</span>
                  </div>
                </Link>
              </li>
            )
          })
        }
      </ul>
    );
  }
}

export default TagList;
