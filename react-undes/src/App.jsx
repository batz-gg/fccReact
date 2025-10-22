import { useState } from 'react'
import { Fragment } from 'react'
import './App.css'

export function App() {
  const [count, setCount] = useState(0);

  return <Fragment>
    <br />
    <h1>BODY COUNTER BUTTON</h1>
    <div className="card">
      <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>
    </div>
  </Fragment>
}