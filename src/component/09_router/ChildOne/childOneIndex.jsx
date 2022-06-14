import React, { Component } from "react"
import { connect } from 'react-redux'
import { removeAction } from '../../../store/aciton'
class ChildOneIndex extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  static getDerivedStateFromProps(nextProps, nextStates) {
    console.log('ChildOne/childOneIndex getDerivedStateFromProps完成', nextProps, nextStates)
    return null
  }
  componentDidMount() {
    console.log('ChildOne/childOneIndex componentDidMount完成')
  }
  handleRemoveBook = (e) => {
    this.props.removeBook(e)
  }
  render() {
    let { bookList } = this.props
    return (
      <div className='bookDiv'>
        <div style={{'textAlign': 'center', 'fontWeight': 'bolder'}}>书籍列表</div>
        <table className='bookTable'>
          <tbody>
            {bookList.map((item, index) => {
              return (
                <tr className='bookTr' key={index}>
                  <td>{item.bookName}</td>
                  <td>{item.bookPrice}</td>
                  <td><button onClick={() => this.handleRemoveBook(item)}>删除</button></td>
                </tr>
              )
            })}
          </tbody>
        </table>
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
    removeBook: (list) => disapch(removeAction(list))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ChildOneIndex)