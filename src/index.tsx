import React from 'react';
import {Provider} from "react-redux";

import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

import {store} from "@/Stores/store";

import App from './App';

import './index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
