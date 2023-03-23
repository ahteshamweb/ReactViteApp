import { useState } from 'react'
 
 

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div className="content">
        <h1  style={{textAlign:"center"}}>React+Vite App</h1>
      </div>
    </div>
  )
}

export default App
