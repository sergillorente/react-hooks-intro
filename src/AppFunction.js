import React, { useState, useEffect } from 'react'

const App = () => {
    const [count, setCount] = useState(0)
    const [isOn, setIsOn] = useState(false)

    useEffect(()=> {
        document.title = `You have clicked ${count} times`
    })

    const incrementCount = () => {
        setCount(prevCount => prevCount + 1)
    }

    const toggleLight = () => {
        setIsOn(prevIsOn => !prevIsOn)
    }

    return (
        <>
            <h2>Counter</h2>
            <button onClick={incrementCount}>I was clicked {count} times</button>
            <h2>Toggle Light</h2>
            <div
                style={{
                    width: '50px',
                    height: '50px',
                    background: isOn ? 'yellow' : 'grey'
                }}
                onClick={toggleLight}
            >
            </div>
        </>
    )
}

export default App
