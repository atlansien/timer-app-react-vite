import './TextForm.css';

type Props = Readonly<{
  value: string | number;
  type: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}>;

const Time = (props: Props) => {
  const { value, type, onChange } = props;


  return (
      <input
        className="text-field"
        value={value}
        type={type}
        onChange={e => onChange(e)}
      />
  );
};

export default Time;