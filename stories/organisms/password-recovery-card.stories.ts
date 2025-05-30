import type { Meta, StoryObj } from "@storybook/vue3";
import { ref, computed } from "vue";

import PasswordRecoveryCard from "../../components/organisms/password-recovery-card.vue";

const meta: Meta<typeof PasswordRecoveryCard> = {
  title: "organisms/PasswordRecoveryCard",
  tags: ["autodocs"],
  component: PasswordRecoveryCard,
  parameters: {
    docs: {
      description: {
        component:
          "A card component that allows users to enter their recovery email to reset their password.",
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof PasswordRecoveryCard>;

/** Default PasswordRecoveryCard */
export const Default: Story = {
  render: () => ({
    components: { PasswordRecoveryCard },
    setup() {
      const handleSubmitRecovery = (email: string) => {
        alert(`Recovery email submitted: ${email}`);
      };
      return { handleSubmitRecovery };
    },
    template: `
      <div class="p-4 max-w-sm bg-black flex justify-center items-center min-h-screen">
        <PasswordRecoveryCard @submitRecovery="handleSubmitRecovery" />
      </div>
    `,
  }),
  parameters: {
    docs: {
      storyDescription:
        "Default appearance of the PasswordRecoveryCard component.",
    },
  },
};

/** With Invalid Email */
export const InvalidEmail: Story = {
  render: () => ({
    components: { PasswordRecoveryCard },
    setup() {
      const recoveryEmail = ref("invalid-email");

      const handleSubmitRecovery = (email: string) => {
        alert(`Recovery email submitted: ${email}`);
      };

      return { recoveryEmail, handleSubmitRecovery };
    },
    template: `
      <div class="p-4 max-w-sm bg-black flex justify-center items-center min-h-screen">
        <PasswordRecoveryCard
          :recoveryEmail="recoveryEmail"
          @submitRecovery="handleSubmitRecovery"
        />
      </div>
    `,
  }),
  parameters: {
    docs: {
      storyDescription:
        "PasswordRecoveryCard with an invalid recovery email to test validation.",
    },
  },
};
