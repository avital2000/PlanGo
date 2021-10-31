import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { log, group, calendar, user } from "./store/reducers";
import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
// import 'semantic-ui-css/semantic.min.css'  

let myStore = createStore(combineReducers( {log, group, calendar, user }), applyMiddleware(thunk));
ReactDOM.render(
  <React.StrictMode>
    <Provider store={myStore}>
      <App />
    </Provider>

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
