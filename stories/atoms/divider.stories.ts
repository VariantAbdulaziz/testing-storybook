import Divider from "../../components/atoms/divider.vue";
import type { Meta, StoryObj } from "@storybook/vue3";

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
