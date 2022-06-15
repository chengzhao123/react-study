import React, { Component } from 'react'
import { connect } from 'react-redux'
import ChildOneIndex from './childOneIndex'
import * as all from '../../../store/aciton'
import { bindActionCreators } from 'redux'
class ChildOne extends Component {
  constructor(props) {
    super(props)
    this.state = {
      bookName: '',
      bookPrice: '',
      showTips: ''
    }

  }
  static getDerivedStateFromProps(nextProps, nextStates) {
    // console.log('index getDerivedStateFromProps完成', nextProps, nextStates)
    return true
  }
  shouldComponentUpdate() {
    // console.log('ChildOne/index shouldComponentUpdate完成')
    return true
  }
  componentDidMount() {
    // console.log('ChildOne/index componentDidMount完成')
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    // console.log('ChildOne/index getSnapshotBeforeUpdate完成', prevProps, prevState)
    return null
  }
  componentDidUpdate() {
    // console.log('ChildOne/index componentDidUpdate完成')
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
    let { bookName, bookPrice } = this.state
    if (!bookName.trim().length || !bookPrice.trim().length) {
      this.setState({
        showTips: '信息不完整'
      })
      return
    }
    let res = this.props.bookList.some(item => {
      return item.bookName === bookName
    })
    if (res) {
      this.setState({
        showTips: '书籍已存在'
      })
      return
    }
    this.props.AddBook({ bookName, bookPrice })
    this.setState({
      bookName: '',
      bookPrice: '',
      showTips: '添加成功'
    })
  }
  changeTips = (e) => {
    this.setState({
      showTips: '删除成功'
    })
  }
  render() {
    let { bookName, bookPrice, showTips } = this.state
    let { dispatch } = this.props
    let aciton = bindActionCreators(all, dispatch)
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
          <button onClick={this.handleAddBookList}>添加</button><span>提示：{showTips}</span>
        </span>
        <ChildOneIndex changeTips={this.changeTips} {...aciton}/>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    bookList: state.bookList
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    AddBook: (list) => dispatch(all.addAction(list))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ChildOne)