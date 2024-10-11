import type { Meta, StoryObj } from "@storybook/vue3";
import { ref } from "vue";

// Import your component
import LoginPasswordCard from "../../components/organisms/login-password-card.vue";

// Set up the meta information for the component
const meta: Meta<typeof LoginPasswordCard> = {
  title: "organisms/LoginPasswordCard",
  component: LoginPasswordCard,
  parameters: {
    docs: {
      description: {
        component:
          "A card component for entering the password during the login process.",
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof LoginPasswordCard>;

/** Default LoginPasswordCard */
export const Default: Story = {
  render: () => ({
    components: { LoginPasswordCard },
    template: `
      <div class="p-4 bg-gray-900 flex justify-center items-center min-h-screen">
        <LoginPasswordCard />
      </div>
    `,
  }),
  parameters: {
    docs: {
      storyDescription:
        "Default appearance of the LoginPasswordCard component.",
    },
  },
};

/** With Submit Handler */
export const WithSubmitHandler: Story = {
  render: () => ({
    components: { LoginPasswordCard },
    setup() {
      const handleSubmitPassword = (password: string) => {
        alert(`Password submitted: ${password}`);
      };

      const handleForgotPassword = () => {
        alert("Forgot Password clicked!");
      };

      return { handleSubmitPassword, handleForgotPassword };
    },
    template: `
      <div class="p-4 bg-gray-900 flex justify-center items-center min-h-screen">
        <LoginPasswordCard
          @submitPassword="handleSubmitPassword"
          @forgotPassword="handleForgotPassword"
        />
      </div>
    `,
  }),
  parameters: {
    docs: {
      storyDescription:
        "LoginPasswordCard with handlers for submitPassword and forgotPassword events.",
    },
  },
};

/** With Pre-filled Password (for Testing) */
export const PrefilledPassword: Story = {
  render: () => ({
    components: { LoginPasswordCard },
    setup() {
      const password = ref("password123");

      const handleSubmitPassword = (submittedPassword: string) => {
        alert(`Password submitted: ${submittedPassword}`);
      };

      const handleForgotPassword = () => {
        alert("Forgot Password clicked!");
      };

      return { password, handleSubmitPassword, handleForgotPassword };
    },
    template: `
      <div class="p-4 bg-gray-900 flex justify-center items-center min-h-screen">
        <LoginPasswordCard
          v-model="password"
          @submitPassword="handleSubmitPassword"
          @forgotPassword="handleForgotPassword"
        />
      </div>
    `,
  }),
  parameters: {
    docs: {
      storyDescription:
        "LoginPasswordCard with a pre-filled password for testing purposes.",
    },
  },
};
