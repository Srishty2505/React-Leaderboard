// const { useState } = require("react");
import { useState } from "react"

function Counter() {
    const [counter, setCounter] = useState(100)

function inc() {
    setCounter(counter + 1)
}
function dec() {
    setCounter(counter - 1)
}
return (
    <>
        <h1> Counter</h1>
        <button onClick={inc}>Increment</button>
        <p>{counter}</p>
        <button onClick={dec}>Decrement</button>
    </>
)
}
export default Counter



