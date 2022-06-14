import React, { Component } from 'react'
import { connect } from 'react-redux'
import ChildOneIndex from './childOneIndex'
import { addAction } from '../../../store/aciton'
class ChildOne extends Component {
  constructor(props) {
    super(props)
    this.state = {
      bookName: '',
      bookPrice: ''
    }
  }
  static getDerivedStateFromProps(nextProps, nextStates) {
    console.log('index getDerivedStateFromProps完成', nextProps, nextStates)
    return true
  }
  shouldComponentUpdate() {
    console.log('ChildOne/index shouldComponentUpdate完成')
    return true
  }
  componentDidMount() {
    console.log('ChildOne/index componentDidMount完成')
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('ChildOne/index getSnapshotBeforeUpdate完成', prevProps, prevState)
    return null
  }
  componentDidUpdate() {
    console.log('ChildOne/index componentDidUpdate完成')
  }
  handleChangeName = (e) => {
    this.setState({
      bookName: e.target.value
    })
  }
  handleChangePrice = (e) => {
    this.setState({
      bookPrice: e.target.value
    })
  }
  handleAddBookList = () => {
    this.props.AddBook(this.state)
  }
  render() {
    let { bookName, bookPrice } = this.state
    return (
      <div>
        <h1>这是一个table表格</h1>
        <span>书籍名称：
          <input value={bookName} onChange={(e) => this.handleChangeName(e)} />
        </span>
        <span>书籍价格：
          <input value={bookPrice} onChange={(e) => this.handleChangePrice(e)} />
        </span>
        <span>
          <button onClick={this.handleAddBookList}>添加</button>
        </span>
        <ChildOneIndex />
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    bookList: state.bookList
  }
}
const mapDispatchToProps = (disapch) => {
  return {
    AddBook: (list) => disapch(addAction(list))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ChildOne)