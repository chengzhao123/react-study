import React, { Component } from 'react'

class ChildOne extends Component {
    constructor(props) {
        super(props)
        this.state={
            name: '',
            age: ''
        }
    }
    changeName = (e) => {
        this.setState({
            name: e.target.value
        })
    }
    changeAge = (e) => {
        this.setState({
            age: e.target.value
        })
    }
    handleClick = (e) => {
        console.log(this.state.name, this.state.age)
    }
    render() {
        let { name, age} = this.state
        return(
            <div>
                <h1>这是一个table表格</h1>
                <input type="text" value={name} onChange={this.changeName}/>
                <input type="number" value={age} onChange={this.changeAge}/>
                <button onClick={this.handleClick}>确认</button>
            </div>
        )
    }
}
export default ChildOne