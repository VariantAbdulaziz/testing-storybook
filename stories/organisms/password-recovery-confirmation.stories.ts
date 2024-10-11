import type { Meta, StoryObj } from "@storybook/vue3";

// Import your component and any dependencies
import PasswordRecoveryConfimationCard from "../../components/organisms/password-recovery-confirmation.vue";

const meta: Meta<typeof PasswordRecoveryConfimationCard> = {
  title: "organisms/PasswordRecoveryConfimationCard",
  component: PasswordRecoveryConfimationCard,
  argTypes: {
    recoveryEmail: {
      control: "text",
      description: "The email address to display in the recovery message",
      defaultValue: "user@example.com",
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          "A password recovery card component that displays a confirmation message and allows users to resend the recovery email.",
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof PasswordRecoveryConfimationCard>;

/** Default Password Recovery Card */
export const Default: Story = {
  args: {
    recoveryEmail: "user@example.com",
  },
  render: (args) => ({
    components: { PasswordRecoveryConfimationCard },
    setup() {
      return { args };
    },
    template: `
      <div class="p-4 bg-gray-900 flex justify-center items-center min-h-screen">
        <PasswordRecoveryConfimationCard :recoveryEmail="args.recoveryEmail" />
      </div>
    `,
  }),
  parameters: {
    docs: {
      storyDescription:
        "Default password recovery card with a sample email address.",
    },
  },
};

/** Custom Email Address */
export const CustomEmail: Story = {
  args: {
    recoveryEmail: "custom@example.com",
  },
  render: (args) => ({
    components: { PasswordRecoveryConfimationCard },
    setup() {
      return { args };
    },
    template: `
      <div class="p-4 bg-gray-900 flex justify-center items-center min-h-screen">
        <PasswordRecoveryConfimationCard :recoveryEmail="args.recoveryEmail" />
      </div>
    `,
  }),
  parameters: {
    docs: {
      storyDescription: "Password recovery card with a custom email address.",
    },
  },
};

/** With Resend Email Handler */
export const WithResendHandler: Story = {
  args: {
    recoveryEmail: "user@example.com",
  },
  render: (args) => ({
    components: { PasswordRecoveryConfimationCard },
    setup() {
      const sendEmailAgain = (email: string) => {
        alert(`Email resent to: ${email}`);
      };
      return { args, sendEmailAgain };
    },
    template: `
      <div class="p-4 bg-gray-900 flex justify-center items-center min-h-screen">
        <PasswordRecoveryConfimationCard
          :recoveryEmail="args.recoveryEmail"
          @sendEmailAgain="sendEmailAgain(args.recoveryEmail)"
        />
      </div>
    `,
  }),
  parameters: {
    docs: {
      storyDescription:
        "Password recovery card with a custom resend email handler.",
    },
  },
};
