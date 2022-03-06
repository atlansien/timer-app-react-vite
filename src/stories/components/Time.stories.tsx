
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Time  from "../../components/Time";

export default {
  title: "Circle",
  component: Time,
} as ComponentMeta<typeof Time>;

const Template: ComponentStory<typeof Time> = (props) => (
  <Time {...props} />
);

export const TimeComponent = Template.bind({});
TimeComponent.args = {
  time: 1000,
  milliSecond: 10000  
};