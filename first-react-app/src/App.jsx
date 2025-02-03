import logo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const answer = 2 + 2

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>

        <a href="https://react.dev" target="_blank">
          <img src={logo} className="logo react" alt="React logo" />
        </a>
      </div>

      <h1>Vite + React</h1>

      <h2>2 + 2 = {answer}</h2>

      <div className="card">
        <button>
          count is
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
