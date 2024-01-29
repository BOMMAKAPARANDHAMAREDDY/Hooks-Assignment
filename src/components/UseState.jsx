import { useState } from "react"
const UseState = () => {
    const [state, setState] = useState(0)
  return (
    <div>
        <p>{state}</p>
        <button onClick={() => setState(state + 1)}>like</button>
    </div>
  )
}

export default UseState