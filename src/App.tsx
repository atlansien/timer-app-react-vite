import { useEffect, useState } from 'react'
import logo from './logo.svg'
import './App.css'

function App() {
  const [time, setTime] = useState(0)

  const [start, setStart] = useState(false);

  useEffect(() => {
    let interval: number | undefined
    if(start) {
      interval = setInterval(() => {
        setTime(prevTime => prevTime + 10)
      }, 1)
    } else {
      clearInterval(interval)
    }

    return () => clearInterval(interval)
  }, [start])

  const resetTimeHandler = () => {
    setTime(0)
  }


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <span>{ ("0" + Math.floor(time/1000/60)%60).slice(-2)}</span>:
          <span>{("0" + Math.floor(time/1000)%60).slice(-2)}</span>
        </p>
        <button onClick={() => setStart(true)}>click</button>
        <button onClick={() => setStart(false)}>click</button>
        <button onClick={resetTimeHandler}>click</button>
      </header>
    </div>
  )
}

export default App
