import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
// import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
// components
import App from './App';

// styles
import './index.css';
import { PersistGate } from 'redux-persist/integration/react';
import {store, persistor} from './redux/store';



ReactDOM.render(
  <Provider store={store}> 
    <BrowserRouter>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
