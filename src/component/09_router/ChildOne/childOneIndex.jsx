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
        return (
            <div>asd</div>
        )
    }
}
export default ChildOneIndex