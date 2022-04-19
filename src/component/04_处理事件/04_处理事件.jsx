import React, { Component } from 'react'
import { Button, Divider, Tag } from 'antd'

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            status: true,
            list: [
                { name: '测试人员1' },
                { name: '测试人员2' },
                { name: '测试人员3' },
                { name: '测试人员4' },
                { name: '测试人员5' },
                { name: '测试人员6' },
                { name: '测试人员7' },
                { name: '测试人员8' }
            ]
        }
    }
    handleClick = () => {
        this.setState(e => ({
            status: !e.status
        }))
    }
    handleNav = (e) => {
        e.preventDefault() //阻止系统的默认事件 阻止跳转到www.baidu.com界面
        this.setState(r => ({
            status: !r.status
        }))
    }
    handleTagClick = (e) =>{
        console.log(e)
    }
    render() {
        const { list, status } = this.state
        const element = []
        list.forEach((item, index) => {
            element.push(<Tag key={index}>{item.name}</Tag>)
        })
        return (
            <div>
                <h2>{status ? 'ON' : 'OFF'}</h2>
                <Button type='primary' size='mini' onClick={this.handleClick}>添加</Button>
                <a href='www.baidu.com' onClick={this.handleNav}>组件跳转事件</a>
                <p>react中遍历数组,采用map方法进行迭代遍历</p>
                <Divider orientation="left">用户列表</Divider>
                <div>
                    <p>render通过建立空数组然后遍历数据,最后放入return里面</p>
                    {element}
                </div>
                <div>
                    <p>return里面只能使用map加return遍历数据</p>
                    {
                        list.map((item, index) => {
                             return <Tag key={index} onClick={() =>this.handleTagClick(item)}>{item.name}</Tag>
                        })
                    }
                </div>
            </div>
        )
    }
}
export default App