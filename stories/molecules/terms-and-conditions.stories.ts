import TermsAndConditions from "../../components/molecules/terms-and-conditions.vue";
import type { Meta, StoryObj } from "@storybook/vue3";

const meta = {
  title: "molecules/TermsAndConditions",
  component: TermsAndConditions,
  parameters: {
    docs: {
      description: {
        component:
          "A component that displays a 'Terms & Conditions' link, emitting a click event when interacted with.",
      },
    },
  },
} satisfies Meta<typeof TermsAndConditions>;

export default meta;

type Story = StoryObj<typeof meta>;

/** Default TermsAndConditions component */
export const Default: Story = {
  render: () => ({
    components: { TermsAndConditions },
    template: `
      <div class="p-4 bg-black">
        <TermsAndConditions />
      </div>
    `,
  }),
  parameters: {
    docs: {
      storyDescription:
        "Default appearance of the TermsAndConditions component.",
    },
  },
};

/** TermsAndConditions with Click Handling */
export const WithClickHandler: Story = {
  render: () => ({
    components: { TermsAndConditions },
    setup() {
      const handleClick = () => {
        alert("Terms & Conditions clicked!");
      };
      return { handleClick };
    },
    template: `
      <div class="p-4 bg-black">
        <TermsAndConditions @click="handleClick" />
      </div>
    `,
  }),
  parameters: {
    docs: {
      storyDescription:
        "TermsAndConditions component with click event handling.",
    },
    actions: { handles: ["click"] },
  },
};
