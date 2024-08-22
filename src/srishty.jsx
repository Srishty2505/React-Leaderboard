import { useState } from 'react'
import reactLogo from './assets/Facebook.jpeg'
import viteLogo from './assets/Instagram.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

   return (
    <>
      <div>
        <a href="https://www.instagram.com/accounts/login/" target="_blank">
          <img src={viteLogo} className="logo" alt="Insta logo" />
        </a>
        <a href="https://www.facebook.com/login.php/" target="_blank">
          <img src={reactLogo} className="logo react" alt="Facbook logo" />
        </a>
      </div>
      <h1>Insta + facebook</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          open <code>insta</code> and facebook
        </p>
      </div>
      <p className="read-the-docs">
        Click on the links to open the app
      </p>
    </>
  )
}

export default App
