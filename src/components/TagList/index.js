import React, { Component, PropTypes } from 'react';

class TagList extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
  };

  render() {
    const tagImages = [
      {
        id: 1,
        src: "http://bpic.588ku.com/back_pic/04/22/01/295831616939e44.jpg!/fh/300/quality/90/unsharp/true/compress/true",
        tagName: 'tag1'
      },
      {
        id: 2,
        src: "http://bpic.588ku.com/back_pic/04/74/72/8658a51e0283e09.jpg!/fh/300/quality/90/unsharp/true/compress/true",
        tagName: 'tag2'
      },
      {
        id: 3,
        src: "http://bpic.588ku.com/back_pic/04/71/16/86589a94f5aae1d.jpg!/fh/300/quality/90/unsharp/true/compress/true",
        tagName: 'tag3'
      },
      {
        id: 4,
        src: "http://bpic.588ku.com/back_pic/04/73/94/5758a1761ebff75.jpg!/fh/300/quality/90/unsharp/true/compress/true",
        tagName: 'tag4'
      },
      {
        id: 5,
        src: "http://bpic.588ku.com/back_pic/04/73/16/81589ec2517efc2.jpg!/fh/300/quality/90/unsharp/true/compress/true",
        tagName: 'tag5'
      },
      {
        id: 6,
        src: "http://bpic.588ku.com/back_pic/04/78/66/5458b3cb3985e30.jpg!/fh/300/quality/90/unsharp/true/compress/true",
        tagName: 'tag6'
      }
    ]
    return (
      <ul className="taglist">
        {
          tagImages.map((image) => {
            return (

              <li key={image.id} className="tag-item">
                <img src={image.src} alt="image" />
                <div className="tag-mask">
                  <span className="tag-name">{image.tagName}</span>
                </div>
              </li>
            )
          })
        }
      </ul>
    );
  }
}

export default TagList;
