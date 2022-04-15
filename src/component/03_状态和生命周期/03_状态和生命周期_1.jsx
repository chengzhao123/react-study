import React, { Component } from 'react'
import App2 from './03_状态和生命周期_2.jsx'
//生命周期先后顺序
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
        this.state = {}
    }
    // 拿到变化后的prop和state getDerivedStateFromProps 会在调用 render 方法之前调用，即在渲染 DOM 元素之前会调用，并且在初始挂载及后续更新时都会被调用。
    static getDerivedStateFromProps = (prop, state) => {
        console.log('getDerivedStateFromProps拿到变化后的prop和state', prop, state)
        
    }
    //当shouldComponentUpdate返回为true的时候，当前组件进行render，如果返回的是false则不进行render.用于设置是否进行组件更新
    shouldComponentUpdate = (nextProps,nextState) => {
        console.log('shouldComponentUpdate更新后的prop和state', nextProps, nextState)
        return true
    }
    //
    componentDidMount =() => {

    }
    getSnapshotBeforeUpdate = (prePorps, preStates) => {
        console.log(prePorps, preStates)
    }
    componentDidUpdate = () => {
        
    }
    render() {
        return (
            <div>
                <App2 name="123"/>
            </div>
        )
    }
}
export default App