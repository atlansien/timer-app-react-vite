import { useEffect, useState } from 'react';
import Circle  from './components/atoms/Circle';
import Form from './components/molecules/Form'
import logo from './logo.svg';
import './App.css';
import Time from './components/atoms/Time';

function App() {
  const [time, setTime] = useState(0);

  const [start, setStart] = useState(false);
  const [second, setSecond] = useState(180);
  const [milliSecond, setMilliSecond] = useState(0);

  useEffect(() => {
    setMilliSecond(second * 1000);
  }, [second, milliSecond]);


  useEffect(() => {
    let interval: number | undefined;
    if (start) {
      interval = window.setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [start]);

  return (
    <div className="App">
      <header
        className="App-header"
        style={{
          backgroundColor: time >= milliSecond ? 'orangered' : 'lightcyan',
        }}
      >
        <div className="item">
          <img src={logo} className="App-logo" alt="logo" />
          <Circle r={200} strokeWidth={20} value={time} max={milliSecond} color='#6fdb6f'/>
        </div>
        <Time  time={time} milliSecond={milliSecond}/>
        <Form time={time} start={start} second={second} setStart={setStart} setTime={setTime} setSecond={setSecond} />
      </header>
    </div>
  );
}

export default App;