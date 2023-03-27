import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import store from './store';
import { Provider } from "react-redux"
import Chat from './components/chat';

const App = () => {
  return (
    <Provider store = {store}>
        <div className="container">
          <Chat />
        </div>
    </Provider>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
  