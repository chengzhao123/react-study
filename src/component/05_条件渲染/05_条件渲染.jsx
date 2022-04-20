import React, { Component } from 'react'
import Login from './Login'
import Register from './Register'
import Forget from './Forget'
import './Login.scss'
import { Button, Divider } from 'antd'

class App extends Component {
    loginRef = React.createRef()
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
        console.log(this.loginRef.current.getFieldsValue())
    }
    handleRegister = () => {
        const { isLoginStatus } = this.state
        if(isLoginStatus === 2) {
            this.setState({
                isLoginStatus: 1
            })
        } else {
            this.setState({
                isLoginStatus: 2
            })
        }
    }
    handleForget = () => {
        const { isLoginStatus } = this.state
        if(isLoginStatus === 3) {
            this.setState({
                isLoginStatus: 1
            })
        } else {
            this.setState({
                isLoginStatus: 3
            })
        }
    }

    render() {
        const { isLoginStatus } = this.state
        return (
            <div className='loginForm'>
                <div className='loginTitle'>
                    <span className='loginTitleName'>后台管理系统</span>
                </div>
                {
                    isLoginStatus === 1 ? <Login refForm={this.loginRef}/> : isLoginStatus === 2 ? <Register refForm={this.loginRef}/> : <Forget refForm={this.loginRef}/>
                }
                <Button type='primary' size='large' block onClick={this.handleLogin}>
                    {isLoginStatus === 1 ? '登录' : isLoginStatus === 2 ? '注册' : '确认'}
                </Button>
                <div style={{ 'textAlign': 'center', 'marginTop': '20px' }}>
                    <span style={{ 'cursor': 'pointer' }} onClick={this.handleRegister}>
                        {isLoginStatus !== 2 ? '去注册' : '上一步'}
                    </span>
                    <Divider type="vertical" />
                    <span style={{ 'cursor': 'pointer' }} onClick={this.handleForget}>
                        {isLoginStatus !== 3 ? '忘记密码' : '上一步'}
                    </span>
                </div>
            </div>
        )
    }
}
export default App