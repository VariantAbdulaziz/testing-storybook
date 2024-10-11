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
    template: `<div class="p-4 bg-black"><BackToLogin /></div>`,
  }),
  parameters: {
    docs: {
      storyDescription: "Default appearance of the BackToLogin component.",
    },
  },
};

/** BackToLogin in a light background */
export const LightBackground: Story = {
  render: () => ({
    components: { BackToLogin },
    template: `<div class="p-4 bg-white"><BackToLogin /></div>`,
  }),
  parameters: {
    docs: {
      storyDescription:
        "BackToLogin component displayed on a light background.",
    },
  },
};

/** BackToLogin with custom text */
export const CustomText: Story = {
  render: () => ({
    components: { BackToLogin },
    template: `
      <div class="p-4 bg-black">
        <BackToLogin>
          <template #default>
            <span :class="textClass">Go Back</span>
          </template>
        </BackToLogin>
      </div>
    `,
  }),
  parameters: {
    docs: {
      storyDescription: "BackToLogin component with custom text.",
    },
  },
};

/** BackToLogin with navigation */
export const WithNavigation: Story = {
  render: () => ({
    components: { BackToLogin },
    setup() {
      const handleClick = () => {
        alert("Navigating back to login...");
      };
      return { handleClick };
    },
    template: `
      <div class="p-4 bg-black">
        <BackToLogin @click="handleClick" />
      </div>
    `,
  }),
  parameters: {
    docs: {
      storyDescription:
        "BackToLogin component with click handling for navigation.",
    },
    actions: { handles: ["click"] },
  },
};
