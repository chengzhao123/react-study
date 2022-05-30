import React, { Component } from 'react'
import { Form, Input, InputNumber } from 'antd';
class ChildOne extends Component {
    constructor(props) {
        super(props)
        this.state = {
            bookName: '',
            price: ''
        }
    }
    form = Form.createRef()
    render() {
        let { bookName, price } = this.state
        return (
            <div>
                <h1>这是一个table表格</h1>
                <Form
                    ref={this.form}
                >
                    <Form.Item
                    label="名称"
                    name={bookName}>
                        <Input
                            placeholder="请输入书籍名称"
                        />
                    </Form.Item>
                    <Form.Item
                        label="价格"
                        name={price}
                    >
                        <InputNumber
                            placeholder="请输入价格"
                            defaultValue="1"
                            min="0"
                            max="10000"
                            step="1"
                        />
                    </Form.Item>
                </Form>
            </div>
        )
    }
}
export default ChildOne