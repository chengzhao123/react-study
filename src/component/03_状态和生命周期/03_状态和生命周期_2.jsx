import React, { Component } from 'react'
import { Button } from 'antd'

class App2 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
    }
    //getDerivedStateFromProps生命周期函数,可以把父组件穿过来的props值转换为state,存起来(但是有个小问题,就是在子组件通过setState更新数据的时候不好使,要更新子页面,还是得改变父组件里的props里的data)
    static getDerivedStateFromProps = (nextProps, nextState) => {
        console.log('App2---getDerivedStateFromProps', nextProps, nextState)
        return {
            name: nextProps.name
        } //将state中绑定name属性， console.log(this.state) // {count: 0, name: 111} this.state上增加了一个属性
    }
    shouldComponentUpdate = (nextProps,nextState) => {
        console.log('App2------shouldComponentUpdate更新后的prop和state', nextProps, nextState)
        return true
    }
    componentDidMount =() => {

    }
    getSnapshotBeforeUpdate = (prePorps, preStates) => {
        console.log('App2------getSnapshotBeforeUpdate',prePorps, preStates)
        return true
    }
    componentDidUpdate = () => {

    }
    handleClick = () => {
        let { count } = this.state
        this.setState({
            count: count +=1
        })
    }
    render() {
        let { count } = this.state
        return (
            <div>
                <h1>{count}</h1>
                <Button onClick={this.handleClick}>点击</Button>
            </div>
        )
    }
}
export default App2