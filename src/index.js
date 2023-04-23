import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './prism.css';
import store from './store';
import { Provider } from "react-redux"

import SideBar from './components/side_bar';
import Header from './components/header';
import BodyContainer from './components/object-container';

const App = () => {

  return (
    <Provider store = {store}>
        <div className="container">
          <Header />
          <BodyContainer />
          <SideBar />
        </div>
    </Provider>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
  