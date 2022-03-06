import './Button.css';

type Props = Readonly<{
  value: string;
  color: string;
  event: () => void;
}>;

const Time = (props: Props) => {
  const { value, color, event } = props;

  return (
    <input
      type="button"
      className="button"
      value={value}
      style={{ backgroundColor: color }}
      onClick={event}
    />
  );
};

export default Time;
