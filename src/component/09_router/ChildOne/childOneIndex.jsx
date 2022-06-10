import React, {Component} from "react"
import store from "../../../store/store"
// import { addAction, removeAction} from '../../../store/aciton'
class ChildOneIndex extends Component{
    constructor(props) {
        super(props)
        this.state = {
          count: ''
        }
    }
    static getDerivedStateFromProps(nextProps,nextStates) {
        console.log('123',nextProps,nextStates)
        return null
    }
    componentDidMount() {
      console.log('store', store.getState())
      this.setState({
        count: store.getState().count
      })
      store.subscribe(() => {
        this.setState({
          count: store.getState().count
        })
      })
    }
    handleAddStoreCount = () => {
      store.dispatch({type: 'ADD_COUNT', count: 100})
    }
    handleRemoveStoreCount = () => {
      store.dispatch({type: 'REMOVE_COUNT', count: 100})
    }
    componentWillUnmount() {
      store.unsubscribe()
    }
    render() {
        let { info } = this.props
        let { count } = this.state
        return (
          <div>
            <div>{info.map((item, index) => {
                return <div key={index}>书籍名称:{item.name}</div>
            })}</div>
            <div>当前store存储的count是{count}</div>
            <button onClick={() => this.handleAddStoreCount()}>增加count</button>
            <button onClick={() => this.handleRemoveStoreCount()}>减少count</button>
          </div>
            
        )
    }
}
export default ChildOneIndex