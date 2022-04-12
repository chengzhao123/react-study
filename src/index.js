import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import '@/style/common.scss'
import 'antd/dist/antd.min.css';
import App from './component/App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

