import React, { Component } from 'react'
import { BrowserRouter, Route, Routes, NavLink, Navigate } from "react-router-dom";
import ChildOne from '../component/09_router/ChildOne';
import ChildTwo from '../component/09_router/ChildTwo';
class Router extends Component {
    constructor() {
        super()
        this.state = {}
    }
    render() {
        return (
            <BrowserRouter>
                <div className="routerDiv">
                    <NavLink className={({isActive}) => isActive ? 'routerActive': ''} to='/one'>
                        <span className="routerChild">one</span>
                    </NavLink>
                    <NavLink className={({isActive}) => isActive ? 'routerActive': ''} to='/two'>
                        <span className="routerChild">two</span>
                    </NavLink>
                </div>
                <Routes>
                    <Route exact path='/' element={<Navigate to='/one'/>}></Route>
                    <Route path='/one' element={<ChildOne/>}></Route>
                    <Route path='/two' element={<ChildTwo/>}></Route>
                </Routes>
            </BrowserRouter>
        )
    }
}
export default Router