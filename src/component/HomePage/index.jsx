import React, { Component } from 'react'
import Routers from '../../router'
import { NavLink } from 'react-router-dom'

class Parent extends Component {
    constructor() {
        super()
        this.state = {}
    }
    render() {
        return (
            <div>
                <div className='NavBarWrap'>
                    <div className='NavBarItem'>
                        <NavLink to={{path: '/home'}}><h2>首页</h2></NavLink>
                    </div>
                    <div className='NavBarItem'>
                        <NavLink to={{path: '/form'}}><h2>表单</h2></NavLink>
                    </div>
                    <div className='NavBarItem'>
                        <NavLink to={{path: '/table'}}><h2>表格</h2></NavLink>
                    </div>
                    <div className='NavBarItem'>
                        <NavLink to={{path: '/echart'}}><h2>图表</h2></NavLink>
                    </div>
                </div>
            </div>
        )
    }
}
export default Parent