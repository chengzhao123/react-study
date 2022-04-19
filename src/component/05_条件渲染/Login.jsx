import React, { Component } from 'react'
import { Form, Input } from 'antd'

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    render() {
        return (
            <Form
                name="basic"
                initialValues={{
                    remember: true,
                }}
                autoComplete="off"
            >
                <Form.Item
                    label="姓名"
                    name="username"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your username!',
                        },
                    ]}
                >
                    <Input autoComplete='off' />
                </Form.Item>

                <Form.Item
                    label="密码"
                    name="password"
                    rules={[
                        {required: true}
                    ]}
                >
                    <Input.Password autoComplete='off' />
                </Form.Item>
            </Form>
        )
    }
}
export default Login