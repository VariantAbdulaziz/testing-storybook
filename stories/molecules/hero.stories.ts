import Hero from "../../components/molecules/hero.vue";
import type { Meta, StoryObj } from "@storybook/vue3";

const meta = {
  title: "molecules/Hero",
  component: Hero,
  argTypes: {
    title: {
      control: "text",
      description: "Title text displayed in the Hero component",
    },
    subtitle: {
      control: "text",
      description: "Subtitle text displayed in the Hero component",
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          "A Hero component that displays an image, title, and subtitle with a gradient background.",
      },
    },
  },
} satisfies Meta<typeof Hero>;

export default meta;

type Story = StoryObj<typeof meta>;

/** Default Hero component */
export const Default: Story = {
  args: {
    title: "Welcome to Aladia,",
    subtitle: "Create or access your account from here",
  },
  render: (args) => ({
    components: { Hero },
    setup() {
      return { args };
    },
    template: `<Hero v-bind="args" />`,
  }),
  parameters: {
    docs: {
      storyDescription:
        "Default Hero component with default title, subtitle, and image.",
    },
  },
};

/** Custom Titles */
export const CustomTitles: Story = {
  args: {
    title: "Discover New Horizons",
    subtitle: "Join us on an exciting journey",
  },
  render: (args) => ({
    components: { Hero },
    setup() {
      return { args };
    },
    template: `<Hero v-bind="args" />`,
  }),
  parameters: {
    docs: {
      storyDescription: "Hero component with custom title and subtitle.",
    },
  },
};

/** Hero with Custom Image */
export const CustomImage: Story = {
  args: {
    title: "Welcome Back!",
    subtitle: "We're glad to see you again",
  },
  render: (args) => ({
    components: { Hero },
    setup() {
      return { args };
    },
    template: `<Hero v-bind="args" />`,
  }),
  parameters: {
    docs: {
      storyDescription: "Hero component with a custom image source.",
    },
  },
};

/** Hero on Light Background */
export const LightBackground: Story = {
  args: {
    title: "Welcome to Aladia,",
    subtitle: "Create or access your account from here",
  },
  render: (args) => ({
    components: { Hero },
    setup() {
      return { args };
    },
    template: `
      <div class="p-4 bg-white">
        <Hero v-bind="args" />
      </div>
    `,
  }),
  parameters: {
    docs: {
      storyDescription: "Hero component displayed on a light background.",
    },
  },
};

/** Hero with Long Text */
export const LongText: Story = {
  args: {
    title: "Welcome to Aladia, the platform that empowers you to achieve more",
    subtitle:
      "Create or access your account from here and explore the multitude of features we offer to enhance your productivity and collaboration.",
  },
  render: (args) => ({
    components: { Hero },
    setup() {
      return { args };
    },
    template: `<Hero v-bind="args" />`,
  }),
  parameters: {
    docs: {
      storyDescription: "Hero component with long title and subtitle texts.",
    },
  },
};
