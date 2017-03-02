import React, { Component, PropTypes } from 'react';
import { Route } from 'react-router-dom';

import HomePage from '../HomePage/';
import TagListPage from '../TagListPage/';
import ImageListPage from '../ImageListPage';


class App extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
  };

  render() {
    return (
      <div id="app" className="app-container">
        <Route exact={true} path="/" component={HomePage} />
        <Route  path="/taglist" component={TagListPage} />
        <Route  path="/imglist/:tagid" component={ImageListPage} />
      </div>
    );
  }
}

export default App;
