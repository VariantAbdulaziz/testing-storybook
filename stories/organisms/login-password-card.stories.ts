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
      <div class="p-4 bg-black flex justify-center items-center min-h-screen">
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

/** With Handlers */
export const WithHandlers: Story = {
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
      <div class="p-4 bg-black flex justify-center items-center min-h-screen">
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
