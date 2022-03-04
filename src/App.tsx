import { useEffect, useState } from 'react';
import logo from './logo.svg';
import { Button, Stack, TextField } from '@mui/material';
import './App.css';

function App() {
  const [time, setTime] = useState(0);

  const [start, setStart] = useState(false);
  const [second, setSecond] = useState(180);
  const [milliSecond, setMilliSecond] = useState(180000)

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

  useEffect(() => {
    setMilliSecond(second * 1000);
  }, [second, milliSecond]);

  const resetTimeHandler = () => {
    setTime(0);
  };

  return (
    <div className="App">
      <header
        className="App-header"
        style={{
          backgroundColor: time >= milliSecond ? 'orangered' : 'aquamarine',
        }}
      >
        <img src={logo} className="App-logo" alt="logo" />
        <p
          className="time"
          style={{ color: time >= milliSecond ? 'lightyellow' : 'royalblue' }}
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
          <Button
            variant="contained"
            size="large"
            color="error"
            onClick={resetTimeHandler}
          >
            RESET
          </Button>
        </Stack>
        <Stack style={{margin: '10px'}} direction="row" spacing={2}>
          <TextField
            id="outlined-size-small"
            size="small"
            value={second}
            type="number"
            onChange={event => setSecond(Number(event.target.value))}
          />
        </Stack>
      </header>
    </div>
  );
}

export default App;
