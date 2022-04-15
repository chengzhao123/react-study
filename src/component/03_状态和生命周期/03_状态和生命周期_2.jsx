import React, { Component } from 'react'
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
class App2 extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    static getDerivedStateFromProps = () => {
        return true
    }
    shouldComponentUpdate = () => {

    }
    componentDidMount = () => {

    }
    getSnapshotBeforeUpdate = () => {
    }
    componentDidUpdate = () => {

    }
    render() {
        const { name } = this.props
        return (
            <div>
                {name}
            </div>
        )
    }
}
export default App2