import React, { Component } from 'react'
import Login from './Login'
import Register from './Register'
import Forget from './Forget'
import './Login.scss'
import { Button, Divider } from 'antd'

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoginStatus: 1
        }
    }
    handleLogin = () => {
        this.setState({
            isLoginStatus: 1
        })
    }
    handleRegister = () => {
        this.setState({
            isLoginStatus: 2
        })
    }
    handleForget = () => {
        this.setState({
            isLoginStatus: 3
        })
    }
    render() {
        const { isLoginStatus } = this.state
        return (
            <div className='loginForm'>
                {
                    isLoginStatus === 1 ? <Login /> : isLoginStatus === 2 ? <Register /> : <Forget />
                }
                <Button type='primary' size='large' block onClick={this.handleLogin}>登录</Button>
                <div style={{ 'textAlign': 'center', 'marginTop': '20px' }}>
                    <span style={{ 'cursor': 'pointer' }} onClick={this.handleRegister}>去注册</span>
                    <Divider type="vertical" />
                    <span style={{ 'cursor': 'pointer' }} onClick={this.handleForget}>忘记密码</span>
                </div>
            </div>
        )
    }
}
export default App