import { BrowserRouter as Router } from 'react-router-dom'
import { useState } from 'react'
import ViteLogo from '../public/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState<number>(0)

  return (
    <Router basename={import.meta.env.DEV ? '/' : '/githubdemo'}>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={ViteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">

        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((prevCount) => prevCount + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </Router>
  )
}

export default App
