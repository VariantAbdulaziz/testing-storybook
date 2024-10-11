import type { Meta, StoryObj } from "@storybook/vue3";

// Import your components
import LoginCard from "../../components/organisms/login-card.vue";

const meta: Meta<typeof LoginCard> = {
  title: "organisms/LoginCard",
  component: LoginCard,
  parameters: {
    docs: {
      description: {
        component: "A login card component for user authentication.",
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof LoginCard>;

/** Default Login Card */
export const Default: Story = {
  render: () => ({
    components: { LoginCard },
    template: `
      <div class="py-8 px-4 bg-black flex justify-center items-center min-h-screen">
        <LoginCard />
      </div>
    `,
  }),
  parameters: {
    docs: {
      storyDescription: "Default appearance of the LoginCard component.",
    },
  },
};

/** Login Card with Submit Handler */
export const WithSubmitHandler: Story = {
  render: () => ({
    components: { LoginCard },
    setup() {
      const handleLoginSubmit = (email: string) => {
        alert(`Email submitted: ${email}`);
      };
      return { handleLoginSubmit };
    },
    template: `
      <div class="py-8 px-4 bg-black flex justify-center items-center min-h-screen">
        <LoginCard @submitLogin="handleLoginSubmit" />
      </div>
    `,
  }),
  parameters: {
    docs: {
      storyDescription:
        "LoginCard with a handler for the email submission event.",
    },
  },
};
