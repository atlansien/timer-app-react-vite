
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Circle  from "../../../components/atoms/Circle";

export default {
  title: "Circle",
  component: Circle,
} as ComponentMeta<typeof Circle>;

const Template: ComponentStory<typeof Circle> = (props) => (
  <Circle {...props} />
);

export const CircleComponent = Template.bind({});
CircleComponent.args = {
  color: "#000",
  r: 100,
  strokeWidth: 10,
  value: 76,
  max: 100,
};