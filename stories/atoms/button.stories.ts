import Button from "../../components/atoms/button.vue";
import type { Meta, StoryObj } from "@storybook/vue3";

const meta = {
  title: "Atoms/Button",
  tags: ["autodocs"],
  component: Button,
  argTypes: {
    type: {
      control: { type: "select" },
      options: ["primary", "secondary"],
      description: "Button type that controls styling (primary or secondary)",
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          "A button component with dynamic styles based on the 'type' prop, and click event handling.",
      },
    },
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

/** Default button with primary type */
export const Primary: Story = {
  args: {
    type: "primary",
  },
  parameters: {
    docs: {
      storyDescription:
        "This is the default primary button. It uses black as the background color with white text.",
    },
  },
  render: (args) => ({
    components: { Button },
    setup() {
      return { args };
    },
    template: `<Button class="px-8 py-2" :type="args.type">Primary Button</Button>`,
  }),
};

/** Secondary button with different style */
export const Secondary: Story = {
  args: {
    type: "secondary",
  },
  parameters: {
    docs: {
      storyDescription:
        "This is the secondary button variant, with white text on a transparent background and black text when hovered.",
    },
  },
  render: (args) => ({
    components: { Button },
    setup() {
      return { args };
    },
    template: `<Button class="px-8 py-2" :type="args.type"><span class="text-black">Secondary Button</span></Button>`,
  }),
};
