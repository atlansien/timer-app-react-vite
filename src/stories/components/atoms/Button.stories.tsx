import { ComponentStory, ComponentMeta } from "@storybook/react";

import Button  from "../../../components/atoms/Button";

export default {
  title: "Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (props) => (
  <Button {...props} />
);

export const CircleComponent = Template.bind({});
CircleComponent.args = {
  color: "#royalblue",
  value: 'CLICK!',
  event: () => console.log('click!')
};