import { useState } from 'react'
import './App.css'

const ACCESS_KEY = import.meta.env.ART_API_ACCESS_KEY

function App() {
  const [input, setInput] = useState({

  });

  const handleClick = () => {

  }

  return (
    <div className="App">
      <h1>Discover New Art!</h1>
      <div>

      </div>
      <br></br>
     <button onClick={handleClick}>Discover Art 🔀</button>
    </div>
  )
}

export default App
