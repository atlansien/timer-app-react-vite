import { Button, Stack, TextField } from '@mui/material';
import React from 'react';
import './Form.css';

type Props = Readonly<{
  second: number;
  setStart: React.Dispatch<React.SetStateAction<boolean>>;
  setTime: React.Dispatch<React.SetStateAction<number>>;
  setSecond: React.Dispatch<React.SetStateAction<number>>;
}>;

const Time = (props: Props) => {
  const {second, setStart, setTime, setSecond} = props;

  return (
    <React.Fragment>
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
          onClick={() => setTime(0)}
        >
          RESET
        </Button>
      </Stack>
      <p>
        下のフォームに背景色を変化させたい
        <br />
        タイミングを秒数で入力してください
      </p>
      <TextField
        className="text-field"
        size="small"
        value={second}
        type="number"
        onChange={(event) => setSecond(Number(event.target.value))}
      />
    </React.Fragment>
  );
};

export default Time;
