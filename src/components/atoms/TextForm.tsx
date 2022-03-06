import './TextForm.css';

type Props = Readonly<{
  second: number;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}>;

const Time = (props: Props) => {
  const { second, onChange } = props;


  return (
      <input
        className="text-field"
        value={second}
        type="number"
        onChange={e => onChange(e)}
      />
  );
};

export default Time;