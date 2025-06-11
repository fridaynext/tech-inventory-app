import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Header({ name, year }) {
  return (
    <header className="">
      <h1>{name}'s Tech Inventory </h1>
      <p className="font-light">Version {year}.0</p>
    </header>
  )
}

const items = [
  "USB-c to USB-A Adapter",
  "USB mini-B to USB-A Adapter",
  "USB-C to USB-B Adapter",
  "USB-B to USB-C Adapter",
  "Lightning Cable",
  "Micro USB to Lightning Cable"
]

const itemObjects = items.map((item, index) => ({
  id: index,
  title: item
}))

function Main({ items }) {
  return (
    <>
      <div>
        <h2>Here is your current inventory of cables:</h2>
      </div>
      <main>
        <ul>
          {items.map((item) => (
            <li
              key={item.id}
              style={{ listStyleType: "none" }}
              className="list-item"
            >
              {item.title}
            </li>
          ))}
        </ul>
      </main>
    </>
  )
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header name="Casey" year={new Date().getFullYear()} />
      <Main items={itemObjects} />
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
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
