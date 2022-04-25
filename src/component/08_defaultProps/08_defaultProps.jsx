import React, { Component } from 'react'
import PropTypes from 'prop-types'

class NavBar extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    static defaultProps = {
        navbarList: ''
    }
    static propTypes = {
        navbarList: PropTypes.array
    }
    render() {
        let { navbarList } = this.props
        return (
            <div>
                {
                    navbarList.map((item, index) => {
                        return <div key={index}>{item}</div>
                    })
                }
            </div>
        )
    }
}
class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            navbarList: []
        }
    }
    static getDerivedStateFromProps(nextProps, nextState) {
        console.log('getDerivedStateFromProps', nextProps, nextState)
    }
    render() {
        let { navbarList } = this.state;
        return (
            <div>
                <NavBar navbarList={navbarList} />
            </div>
        )
    }
}
export default App