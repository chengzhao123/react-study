import './App.css';
import React, { Component } from 'react'
//始终以首字大写字母来命名组件
//函数式组件
// function App(props) {
//   return (
//     <div>该项目主要运用的react是基于17.0.2版本{props.name}</div>
//   );
// }
//类组件
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: 'React first study',
      time: new Date().toLocaleTimeString()
    }
  }
  componentDidMount = () => {
    setInterval(() => {
      this.setState({
        time: new Date().toLocaleTimeString()
      })
    }, 1000);
  }
  render() {
    const { name, time } = this.state
    return (
      <div>
        <div>该项目主要运用的react是基于17.0.2版本</div>
        <div>{this.props.name}</div>
        <div>{name}</div>
        <div>{time}</div>
      </div>
    )
  }
}

export default App;
