import React, {Component} from "react"

class ChildOneIndex extends Component{
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    static getDerivedStateFromProps(nextProps,nextStates) {
        console.log('123',nextProps,nextStates)
        return null
    }
    render() {
        let { info } = this.props
        return (
            <div>{info.map((item, index) => {
                return <div key={index}>书籍名称:{item.name}</div>
            })}</div>
        )
    }
}
export default ChildOneIndex