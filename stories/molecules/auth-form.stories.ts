import AuthForm from "../../components/molecules/auth-form.vue";
import type { Meta, StoryObj } from "@storybook/vue3";
import { ref } from "vue";

const meta = {
  title: "molecules/AuthForm",
  tags: ["autodocs"],
  component: AuthForm,
  parameters: {
    docs: {
      description: {
        component:
          "An authentication form component where users can enter their email address. Includes validation and submission handling.",
      },
    },
  },
} satisfies Meta<typeof AuthForm>;

export default meta;

type Story = StoryObj<typeof meta>;

/** Default AuthForm */
export const Default: Story = {
  render: () => ({
    components: { AuthForm },
    setup() {
      const email = ref("");
      const handleSubmit = (submittedEmail: string) => {
        email.value = submittedEmail;
        alert(`Email submitted: ${submittedEmail}`);
      };
      return { email, handleSubmit };
    },
    template: `
      <AuthForm @submitEmail="handleSubmit" />
    `,
  }),
  parameters: {
    docs: {
      storyDescription:
        "Default AuthForm with basic email input and validation.",
    },
  },
};
