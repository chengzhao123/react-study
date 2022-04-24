import React, { useState, useEffect } from "react"
import { Button } from 'antd'
function App(props) {
    const [count, setCount] = useState(Number(props.count))
    useEffect(() => {
        // Update the document title using the browser API
        document.title = `You clicked ${count} times`;
    });
    return (
        <div>
            <p>当前点击的次数为${count}</p>
            <Button onClick={() => setCount(count - 1)}>减少</Button>
            <Button onClick={() => setCount(count + 1)}>增加</Button>
        </div>

    )
}

export default App