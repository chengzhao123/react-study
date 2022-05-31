import React, { Component } from 'react'

class ChildOne extends Component {
    constructor(props) {
        super(props)
        this.state = {
            bookName: '',
            price: ''
        }
    }
    handleChangeName = (e) => {
        this.setState({
            bookName: e.target.value
        })
    }
    handleChangePrice = (e) => {
        this.setState({
            price: e.target.value
        })
    }
    render() {
        let { bookName, price } = this.state
        return (
            <div>
                <h1>这是一个table表格</h1>
                <div>书籍名称：
                    <input value={bookName} onChange={(e) =>this.handleChangeName(e)} />
                </div>
                <div>书籍价格：
                    <input value={price} onChange={(e) =>this.handleChangePrice(e)} />
                </div>
            </div>
        )
    }
}
export default ChildOne