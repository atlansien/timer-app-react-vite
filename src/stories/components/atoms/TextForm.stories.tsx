
import { ComponentStory, ComponentMeta } from "@storybook/react";

import TextForm  from "@/components/atoms/TextForm";

export default {
  title: "TextForm",
  component: TextForm,
} as ComponentMeta<typeof TextForm>;

const Template: ComponentStory<typeof TextForm> = (props) => (
  <TextForm {...props} />
);

export const TextFormComponent = Template.bind({});
TextFormComponent.args = {
  value: 'test',
  type: 'text',
  onChange: e => console.log(e.target.value)
};