import { useEffect, useState } from 'react';
import logo from './logo.svg';
import { Button, Stack } from '@mui/material';
import './App.css';

function App() {
  const [time, setTime] = useState(0);

  const [start, setStart] = useState(false);

  useEffect(() => {
    let interval: number | undefined;
    if (start) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [start]);

  const resetTimeHandler = () => {
    setTime(0);
  };

  return (
    <div className="App">
      <header
        className="App-header"
        style={{ backgroundColor: time >= 180000 ? 'orangered' : 'aquamarine' }}
      >
        <img src={logo} className="App-logo" alt="logo" />
        <p
          className="time"
          style={{ color: time >= 180000 ? 'lightyellow' : 'royalblue' }}
        >
          <span>{('0' + (Math.floor(time / 1000 / 60) % 60)).slice(-2)}</span>:
          <span>{('0' + (Math.floor(time / 1000) % 60)).slice(-2)}</span>
        </p>
        <Stack direction="row" spacing={2}>
          <Button
            variant="contained"
            size="large"
            color="primary"
            onClick={() => setStart(true)}
          >
            START
          </Button>
          <Button
            variant="contained"
            size="large"
            color="inherit"
            onClick={() => setStart(false)}
          >
            STOP
          </Button>
          <Button variant="contained" size="large" color="error" onClick={resetTimeHandler}>
            RESET
          </Button>
        </Stack>
      </header>
    </div>
  );
}

export default App;
