import type { Meta, StoryObj } from "@storybook/vue3";
import { ref } from "vue";

// Import your component and any dependencies
import RegistrationCard from "../../components/organisms/registration-card.vue";

const meta: Meta<typeof RegistrationCard> = {
  title: "organisms/RegistrationCard",
  component: RegistrationCard,
  argTypes: {
    emailIn: {
      control: "text",
      description: "Pre-filled email address",
      defaultValue: "user@example.com",
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          "A registration card component that allows users to sign up by entering their details.",
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof RegistrationCard>;

/** Default Registration Card */
export const Default: Story = {
  args: {
    emailIn: "user@example.com",
  },
  render: (args) => ({
    components: { RegistrationCard },
    setup() {
      const handleSubmitRegistration = (data: any) => {
        alert(`Registration data submitted:\n${JSON.stringify(data, null, 2)}`);
      };

      return { args, handleSubmitRegistration };
    },
    template: `
      <div class="p-4 bg-gray-900 flex justify-center items-center min-h-screen">
        <RegistrationCard
          :emailIn="args.emailIn"
          @submitRegistration="handleSubmitRegistration"
        />
      </div>
    `,
  }),
  parameters: {
    docs: {
      storyDescription:
        "Default registration card with a pre-filled email address.",
    },
  },
};

/** Registration Card with Empty Fields */
export const EmptyFields: Story = {
  args: {
    emailIn: "",
  },
  render: (args) => ({
    components: { RegistrationCard },
    setup() {
      const handleSubmitRegistration = (data: any) => {
        alert(`Registration data submitted:\n${JSON.stringify(data, null, 2)}`);
      };

      return { args, handleSubmitRegistration };
    },
    template: `
      <div class="p-4 bg-gray-900 flex justify-center items-center min-h-screen">
        <RegistrationCard
          :emailIn="args.emailIn"
          @submitRegistration="handleSubmitRegistration"
        />
      </div>
    `,
  }),
  parameters: {
    docs: {
      storyDescription: "Registration card with all fields empty.",
    },
  },
};

/** Registration Card with Invalid Email */
export const InvalidEmail: Story = {
  args: {
    emailIn: "invalid-email",
  },
  render: (args) => ({
    components: { RegistrationCard },
    setup() {
      const handleSubmitRegistration = (data: any) => {
        alert(`Registration data submitted:\n${JSON.stringify(data, null, 2)}`);
      };

      return { args, handleSubmitRegistration };
    },
    template: `
      <div class="p-4 bg-gray-900 flex justify-center items-center min-h-screen">
        <RegistrationCard
          :emailIn="args.emailIn"
          @submitRegistration="handleSubmitRegistration"
        />
      </div>
    `,
  }),
  parameters: {
    docs: {
      storyDescription:
        "Registration card with an invalid pre-filled email address.",
    },
  },
};

/** Registration Card with Pre-filled Data */
export const PrefilledData: Story = {
  args: {
    emailIn: "jane.doe@example.com",
  },
  render: (args) => ({
    components: { RegistrationCard },
    setup() {
      // Pre-fill other fields using refs
      const name = ref("Jane");
      const surname = ref("Doe");
      const password = ref("password123");
      const confirmPassword = ref("password123");
      const isChecked = ref(true);

      const handleSubmitRegistration = (data: any) => {
        alert(`Registration data submitted:\n${JSON.stringify(data, null, 2)}`);
      };

      return {
        args,
        name,
        surname,
        password,
        confirmPassword,
        isChecked,
        handleSubmitRegistration,
      };
    },
    template: `
      <div class="p-4 bg-gray-900 flex justify-center items-center min-h-screen">
        <RegistrationCard
          :emailIn="args.emailIn"
          @submitRegistration="handleSubmitRegistration"
          v-model:name="name"
          v-model:surname="surname"
          v-model:password="password"
          v-model:confirmPassword="confirmPassword"
          v-model:isChecked="isChecked"
        />
      </div>
    `,
  }),
  parameters: {
    docs: {
      storyDescription: "Registration card with pre-filled user data.",
    },
  },
};
