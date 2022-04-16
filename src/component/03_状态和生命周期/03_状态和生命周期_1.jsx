import React, { Component } from 'react'
import App2 from './03_状态和生命周期_2.jsx'
import { Button } from 'antd'
//组件挂载时，会依次调用如下生命周期函数
/* constructor()
   static getDerivedStateFromProps()
   render()
   componentDidMount()
*/
//更新可能是由 props 或 state 的更改引起的。在重新渲染组件时，这些方法按以下顺序调用：
/*
   static getDerivedStateFromProps()
   shouldComponentUpdate() shouldComponentUpdate()如果返回 false将不会被调用render及其以后接口
   render()
   getSnapshotBeforeUpdate()
   componentDidUpdate()
*/
class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: 111
        }
    }
    // 拿到变化后的prop和state getDerivedStateFromProps 会在调用 render 方法之前调用，即在渲染 DOM 元素之前会调用，并且在初始挂载及后续更新时都会被调用。getDerivedStateFromProps生命周期函数,可以把父组件穿过来的props值转换为state,存起来(但是有个小问题,就是在子组件通过setState更新数据的时候不好使,要更新子页面,还是得改变父组件里的props里的data)
    static getDerivedStateFromProps = (prop, state) => {
        console.log('App1------getDerivedStateFromProps拿到变化后的prop和state', prop, state)
        return true
    }
    //当shouldComponentUpdate返回为true的时候，当前组件进行render，如果返回的是false则不进行render.用于设置是否进行组件更新
    shouldComponentUpdate = (nextProps,nextState) => {
        console.log('App1------shouldComponentUpdate更新后的prop和state', nextProps, nextState)
        return true
    }
    componentDidMount =() => {
        console.log('componentDidMount执行')
    }
    getSnapshotBeforeUpdate = (prePorps, preStates) => {
        console.log('App1------getSnapshotBeforeUpdate',prePorps, preStates)
        return true
    }
    componentDidUpdate = () => {
        
    }
    handleClick = () => {
        let { name } = this.state
        this.setState({
            name: name +=1
        })
    }
    render() {
        const { name } = this.state
        return (
            <div>
                <App2 name={name}/>
                <h2>{name}</h2>
                <Button onClick={this.handleClick}>父按钮</Button>
            </div>
        )
    }
}
export default App