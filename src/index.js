import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import '@/style/common.scss'
import 'antd/dist/antd.min.css';
// import App from './component/01_类组件和函数组件/01_类组件和函数组件.jsx';
// import App from './component/02_组件和道具/02_组件和道具.jsx';
// import App from './component/03_状态和生命周期/03_状态和生命周期_1.jsx';
// import App from './component/04_处理事件/04_处理事件.jsx';
import App from './component/05_条件渲染/05_条件渲染.jsx';

ReactDOM.render(
  <React.StrictMode>
    {/* 01_类组件和函数组件 <App name="这是App页面的参数"/> */}
    {/* 02_组件和道具 <App name="这是App页面的参数"/> */}
    {/* 03_状态和生命周期 <App/> */}
    {/* 04_处理事件 <App/> */}
    {/* 04_条件渲染 <App/> */}
    <App/>
  </React.StrictMode>,
  document.getElementById('root')
);

