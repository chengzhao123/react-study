import React, { Component } from 'react'
import ChildOneIndex from './childOneIndex'
class ChildOne extends Component {
    constructor(props) {
        super(props)
        this.state = {
            bookName: '',
            price: '',
            bookList: [{ name: '从百草园到三味书屋', price: '123' }]
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
    handleAdd = () => {
        this.setState({
            bookList: [...this.state.bookList, { name: this.state.bookName, price: this.state.price }]
        })
    }
    static getDerivedStateFromProps(nextProps, nextStates) {
        console.log('getDerivedStateFromProps', nextProps, nextStates)
        return true
    }
    shouldComponentUpdate() {
        console.log('shouldComponentUpdate')
        return true
    }
    componentDidMount() {
        console.log('componentDidMount')
    }
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('getSnapshotBeforeUpdate', prevProps, prevState)
        return null
    }
    componentDidUpdate() {
        console.log('componentDidUpdate')
    }
    render() {
        let { bookName, price, bookList } = this.state
        return (
            <div>
                <h1>这是一个table表格</h1>
                <span>书籍名称：
                    <input value={bookName} onChange={(e) => this.handleChangeName(e)} />
                </span>
                <span>书籍价格：
                    <input value={price} onChange={(e) => this.handleChangePrice(e)} />
                </span>
                <span>
                    <button onClick={this.handleAdd}>添加</button>
                </span>
                <div className='bookDiv'>
                    <table className='bookTable'>
                        <tbody>
                            {bookList.map((item, index) => {
                                return (
                                    <tr className='bookTr' key={index}>
                                        <td>{item.name}</td>
                                        <td>{item.price}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
                <ChildOneIndex info={bookList} />
            </div>
        )
    }
}
export default ChildOne