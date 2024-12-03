// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { Link } from 'react-router-dom'
import './App.css'
import { NavBar } from './components/NavBar'

function App() {

  // const [count, setCount] = useState(0)

  return (
    <>
    <h1>TechShop</h1>
<ul>
  <li>
    <Link to= '/ejemplo'>ejemplo</Link>
  </li>
</ul>
    </>
  )
}

export default App
