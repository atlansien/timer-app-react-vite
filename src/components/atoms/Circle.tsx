import { SVGAttributes } from "react";

type Props = Readonly<{
  color: SVGAttributes<SVGCircleElement>["stroke"];
  r: number;
  strokeWidth: number;
  value: number;
  max: number;
}>;

const Circle = (props: Props) => {
  const { color, r: outerR, strokeWidth, value, max } = props;

  const size = outerR * 2;

  const r =  outerR - strokeWidth / 2;

  const circumference = 2 * Math.PI * r;

  const strokeDasharray = `${circumference * (value / max)} ${circumference}`

  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
    >
      <circle
        r={r}
        cx={outerR}
        cy={outerR}
        stroke="gainsboro"
        fill="transparent"
        strokeWidth={strokeWidth}
        transform={`rotate(-90 ${outerR} ${outerR})`}
      />
      <circle
        r={r}
        cx={outerR}
        cy={outerR}
        stroke={color}
        fill="transparent"
        strokeWidth={strokeWidth}
        strokeDasharray={value >= max ? max: strokeDasharray}
        transform={`rotate(-90 ${outerR} ${outerR})`}
      />
    </svg>
  );
};

export default Circle