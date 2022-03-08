import './Time.css'

type Props = Readonly<{
  time: number;
  milliSecond: number;
}>;

const Time = (props: Props) => {
  const {time, milliSecond} = props;
  
  const minute = ('0' + Math.floor(time / 1000 / 60) % 60).slice(-2)
  const second = ('0' + Math.floor(time / 1000) % 60).slice(-2);

  const timeColor = () => {
    if(time >= milliSecond) return 'lightyellow';
    else return 'royalblue';
  }

  return (
    <p className='time' role='time' style={{color: timeColor()}}>
      {minute}:{second}
    </p>
  )
}

export default Time;