import React, { Component } from 'react'

class App extends Component{
    constructor(props) {
        super(props)
        this.state ={
            msgList: [
                {name: '客户1', status: 'online'},
                {name: '客户2', status: 'online'},
                {name: '客户3', status: 'offline'},
                {name: '客户4', status: 'online'},
                {name: '客户5', status: 'offline'},
                {name: '客户6', status: 'offline'}
            ]
        }
    }
    render() {
        const { msgList } = this.state
        let msgCom = msgList.map((item, index) => {
            return <li key={index}>姓名：{item.name}  状态：{item.status  === 'online' ? '在线' : '离线'}</li>
        })
        return (
            <div>
            {msgCom}
            {
                msgList.map((item, index) => {
                    return <li key={index}>姓名：{item.name}  状态：{item.status  === 'online' ? '在线' : '离线'}</li>
                })
            }
            </div>
        )
    }
}
export default App