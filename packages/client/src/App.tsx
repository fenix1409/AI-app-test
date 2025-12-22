import { useEffect, useState } from 'react';
import './App.css'

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch('/api/hello')
      .then(response => response.json())
      .then(data => setMessage(data.message))
  }, [])

  return (
    <h1>{message}</h1>
  )
}

export default App
