import Button from "../../components/atoms/button.vue";
import type { Meta, StoryObj } from "@storybook/vue3";

// Define the component's metadata using `Meta` type from Storybook
const meta = {
  title: "Atoms/Button",
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

// Default button with primary type
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
    template: `<Button :type="args.type">Primary Button</Button>`,
  }),
};

// Secondary button with different style
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
    template: `<Button :type="args.type">Secondary Button</Button>`,
  }),
};

// Button with slot content
export const WithSlotContent: Story = {
  args: {
    type: "primary",
  },
  parameters: {
    docs: {
      storyDescription:
        "Demonstrates how content passed through the default slot is rendered inside the button.",
    },
  },
  render: (args) => ({
    components: { Button },
    setup() {
      return { args };
    },
    template: `
      <Button :type="args.type">
        <span>🚀 Launch</span>
      </Button>
    `,
  }),
};

// Button with click event
export const WithClickEvent: Story = {
  args: {
    type: "primary",
  },
  parameters: {
    actions: {
      handles: ["click button"],
    },
    docs: {
      storyDescription:
        "A button that handles click events. You can trigger a 'click' event using the button.",
    },
  },
  render: (args) => ({
    components: { Button },
    setup() {
      return { args };
    },
    template: `<Button :type="args.type" @click="args.onClick">Click Me</Button>`,
  }),
};

// Button with different types in a single story
export const AllVariants: Story = {
  parameters: {
    docs: {
      storyDescription:
        "Displays both the primary and secondary button variants together for comparison.",
    },
  },
  render: () => ({
    components: { Button },
    template: `
      <div class="space-y-4">
        <Button type="primary">Primary Button</Button>
        <Button type="secondary">Secondary Button</Button>
      </div>
    `,
  }),
};
