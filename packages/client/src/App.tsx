import { useEffect, useState } from 'react';
import './App.css'
import { Button } from './components/ui/button';

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch('/api/hello')
      .then(response => response.json())
      .then(data => setMessage(data.message))
  }, [])

  return (
    <>
      <p className='font-bold p-4 text-3xl'>{message}</p>
      <Button>Click me</Button>
    </>
  )
}

export default App
