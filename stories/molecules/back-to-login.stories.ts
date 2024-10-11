import BackToLogin from "../../components/molecules/back-to-login.vue";
import type { Meta, StoryObj } from "@storybook/vue3";

const meta = {
  title: "molecules/BackToLogin",
  component: BackToLogin,
  parameters: {
    docs: {
      description: {
        component:
          "A component that displays a 'Back to Log in' link with an icon, changing appearance on hover.",
      },
    },
  },
} satisfies Meta<typeof BackToLogin>;

export default meta;

type Story = StoryObj<typeof meta>;

/** Default BackToLogin component */
export const Default: Story = {
  render: () => ({
    components: { BackToLogin },
    template: `<div class="p-4 bg-black text-white"><BackToLogin /></div>`,
  }),
  parameters: {
    docs: {
      storyDescription: "Default appearance of the BackToLogin component.",
    },
  },
};
