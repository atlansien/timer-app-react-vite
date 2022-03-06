import React from 'react';
import './Form.css';

type Props = Readonly<{
  start: boolean;
  second: number;
  setStart: React.Dispatch<React.SetStateAction<boolean>>;
  setTime: React.Dispatch<React.SetStateAction<number>>;
  setSecond: React.Dispatch<React.SetStateAction<number>>;
}>;

const Time = (props: Props) => {
  const { start, second, setStart, setTime, setSecond } = props;

  return (
    <React.Fragment>
      <div className="button-form">
        {!start && <input
          type="button"
          className="button"
          value="START"
          style={{ backgroundColor: 'royalblue' }}
          onClick={() => setStart(true)}
        />}
        {start && <input
          type="button"
          className="button"
          value="STOP"
          style={{ backgroundColor: 'orangered' }}
          onClick={() => setStart(false)}
        />}
        <input
          type="button"
          className="button"
          value="RESET"
          style={{ color: 'dimgray' }}
          onClick={() => setTime(0)}
        />
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
