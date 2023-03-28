import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import store from './store';
import { Provider } from "react-redux"
import Chat from './components/chat';
import Header from './components/header';
import BodyContainer from './components/object-container';

const App = () => {
  return (
    <Provider store = {store}>
        <div className="container">
          <Header />
          <BodyContainer />
        </div>
    </Provider>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
  