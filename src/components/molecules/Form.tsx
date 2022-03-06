import React from 'react';
import Button from '../atoms/Button';
import './Form.css';

type Props = Readonly<{
  start: boolean;
  time: number;
  second: number;
  setStart: React.Dispatch<React.SetStateAction<boolean>>;
  setTime: React.Dispatch<React.SetStateAction<number>>;
  setSecond: React.Dispatch<React.SetStateAction<number>>;
}>;

const Time = (props: Props) => {
  const { start, time, second, setStart, setTime, setSecond } = props;

  const startEventHandler = () => {
    setStart(true);
  }

  const stopEventHandler = () => {
    setStart(false);
  }

  const resetEventHandler = () => {
    setTime(0)
  }

  return (
    <React.Fragment>
      <div className="button-form">
        {!start && <Button value='START' color='royalblue' event={startEventHandler} />}
        {start && <Button value='STOP' color='red' event={stopEventHandler} />}
        {time !== 0 && <Button value='RESET' color='dimgray' event={resetEventHandler} />}
      </div>
      <p>
        下のフォームに背景色を変化させたい
        <br />
        タイミングを秒数で入力してください
      </p>
      <input
        className="text-field"
        value={second}
        type="number"
        onChange={(event) => setSecond(Number(event.target.value))}
      />
    </React.Fragment>
  );
};

export default Time;
