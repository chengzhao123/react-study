import React, { Component } from 'react'
import { Button } from 'antd'
class App extends Component {
    constructor(props){
        super(props)
        this.state = {
            status: true
        }
    }
    handleClick =() => {
        this.setState(e => ({
            status: !e.status
        }))
    }
    render() {
        return (
            <div>
                {this.state.status ? 'ON' : 'OFF'}
                <Button type='primary' size='mini' onClick={this.handleClick}>添加</Button>
            </div>
        )
    }
}
export default App