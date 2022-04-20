import React, { Component } from "react"
import { Form, Input } from "antd"

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            
        }
    }
    render() {
        return (
            <Form
                ref={this.props.refForm}
                labelCol= {{span: 4}}
                wrapperCol={{span: 18}}
                >
                <Form.Item
                    colon={false}
                    label="姓名"
                    name="username"
                    rules={[
                        {
                            required: true,
                            message: "Please input your username!",
                        },
                    ]}
                >
                    <Input autoComplete="off" />
                </Form.Item>

                <Form.Item
                    label="密码"
                    name="password"
                    colon={false}
                    rules={[
                        {required: true}
                    ]}
                >
                    <Input.Password autoComplete="off" />
                </Form.Item>
            </Form>
        )
    }
}
export default Login