  const initialState = [
    {
      tagimage: require('../../images/sources/dr/index.jpg'),
      tagName: 'DR',
      imagelist: []
    },
    {
      tagimage: require('../../images/sources/routine/index.jpg'),
      tagName: 'routine',
      imagelist: []
    },
    {
      tagimage: require('../../images/sources/app/index.jpg'),
      tagName: 'app',
      imagelist: []
    },
    {
      tagimage: require('../../images/sources/freehand/index.jpg'),
      tagName: 'freehand',
      imagelist: []
    },
    {
      tagimage: require('../../images/sources/picture/index.jpg'),
      tagName: 'picture',
      imagelist: []
    },
    {
      tagimage: require('../../images/sources/web/index.jpg'),
      tagName: 'web',
      imagelist: []
    }
  ]


export default (state = initialState, action = {}) => {
  return state;
}


