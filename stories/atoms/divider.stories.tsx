import Divider from "../../components/atoms/divider.vue";
import type { Meta, StoryObj } from "@storybook/vue3";

// Define the component's metadata using `Meta` type from Storybook
const meta = {
  title: "Atoms/Divider",
  component: Divider,
  parameters: {
    docs: {
      description: {
        component:
          "A divider component with gradient lines and 'Or' text in the middle, used to separate content sections.",
      },
    },
  },
} satisfies Meta<typeof Divider>;

export default meta;

type Story = StoryObj<typeof meta>;

/** Default divider */
export const Default: Story = {
  parameters: {
    docs: {
      storyDescription:
        "The default divider with 'Or' text and gradient lines on a dark background.",
    },
  },
  render: () => ({
    components: { Divider },
    template: `
      <div class="p-4 bg-black">
        <Divider />
      </div>
    `,
  }),
};

/** Divider within content */
export const WithinContent: Story = {
  parameters: {
    docs: {
      storyDescription:
        "Demonstrates how the divider can be used to separate different sections of content.",
    },
  },
  render: () => ({
    components: { Divider },
    template: `
      <div class="p-4 bg-gray-800 text-white space-y-4">
        <p>This is some content above the divider.</p>
        <Divider />
        <p>This is some content below the divider.</p>
      </div>
    `,
  }),
};

/** Divider on a colored background */
export const OnColoredBackground: Story = {
  parameters: {
    docs: {
      storyDescription:
        "Shows the divider on a colored background to highlight its gradient effect.",
    },
  },
  render: () => ({
    components: { Divider },
    template: `
      <div class="p-4 bg-gradient-to-r from-purple-500 to-indigo-500">
        <Divider />
      </div>
    `,
  }),
};

/** Multiple dividers in a column */
export const MultipleDividers: Story = {
  parameters: {
    docs: {
      storyDescription:
        "Illustrates the use of multiple dividers to separate several sections in a column layout.",
    },
  },
  render: () => ({
    components: { Divider },
    template: `
      <div class="p-4 bg-black text-white space-y-4">
        <p>First section of content.</p>
        <Divider />
        <p>Second section of content.</p>
        <Divider />
        <p>Third section of content.</p>
      </div>
    `,
  }),
};

/** Divider in a narrow container */
export const InNarrowContainer: Story = {
  parameters: {
    docs: {
      storyDescription:
        "Shows how the divider adapts when placed inside a narrow container.",
    },
  },
  render: () => ({
    components: { Divider },
    template: `
      <div class="p-4 bg-black text-white" style="width: 200px;">
        <Divider />
      </div>
    `,
  }),
};
