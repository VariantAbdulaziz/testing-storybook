import Button from "../components/button.vue";
import type { Meta, StoryObj } from "@storybook/vue3";

// Define the component's metadata using `Meta` type from Storybook
const meta = {
  title: "Components/Button",
  component: Button,
  argTypes: {
    label: { control: "text" },
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

const Default: Story = {};

Default.args = {
  label: "Default Button",
};

export const WithCustomLabel: Story = {};
WithCustomLabel.args = {
  label: "Custom Label",
};
