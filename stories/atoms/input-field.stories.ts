import InputField from "../../components/atoms/input-field.vue";
import type { Meta, StoryObj } from "@storybook/vue3";
import { ref } from "vue";

const meta = {
  title: "atoms/InputField",
  tags: ["autodocs"],
  component: InputField,
  argTypes: {
    modelValue: {
      control: "text",
      description: "The value of the input field",
    },
    placeholder: {
      control: "text",
      description: "Placeholder text for the input field",
    },
    type: {
      control: { type: "select" },
      options: ["text", "password", "email", "number", "tel"],
      description: "Type of the input field",
    },
    icon: {
      control: { type: "select" },
      options: [null, ["fas", "user"], ["fas", "lock"]],
      description: "Font Awesome icon to display inside the input field",
    },
    label: {
      control: "text",
      description: "Label for accessibility (screen readers)",
    },
    disabled: {
      control: "boolean",
      description: "Disables the input field",
    },
    isValid: {
      control: "boolean",
      description: "Indicates if the input value is valid",
    },
    errorMessage: {
      control: "text",
      description: "Error message to display when the input is invalid",
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          "An input field component with optional icons, labels, validation states, and password visibility toggle.",
      },
    },
  },
} satisfies Meta<typeof InputField>;

export default meta;

type Story = StoryObj<typeof meta>;

/** Default input field */
export const Default: Story = {
  args: {
    modelValue: "",
    placeholder: "Enter your text",
    type: "text",
    icon: undefined,
    label: "",
    disabled: false,
    isValid: true,
    errorMessage: "",
  },
  render: (args) => ({
    components: { InputField },
    setup() {
      const value = ref(args.modelValue);
      return { args, value };
    },
    template: `
      <InputField
        v-model="value"
        v-bind="args"
      />
    `,
  }),
  parameters: {
    docs: {
      storyDescription: "Default input field with basic usage.",
    },
  },
};

/** Input field with icon */
export const WithIcon: Story = {
  args: {
    modelValue: "",
    placeholder: "Enter your username",
    type: "text",
    icon: ["fas", "user"],
    label: "Username",
    disabled: false,
    isValid: true,
    errorMessage: "",
  },
  render: (args) => ({
    components: { InputField },
    setup() {
      const value = ref(args.modelValue);
      return { args, value };
    },
    template: `
      <InputField
        v-model="value"
        v-bind="args"
      />
    `,
  }),
  parameters: {
    docs: {
      storyDescription: "Input field with an icon displayed on the left.",
    },
  },
};

export const PasswordField: Story = {
  args: {
    modelValue: "",
    placeholder: "Enter your password",
    type: "password",
    icon: ["fas", "lock"],
    label: "Password",
    disabled: false,
    isValid: true,
    errorMessage: "",
  },
  render: (args) => ({
    components: { InputField },
    setup() {
      const value = ref(args.modelValue);
      return { args, value };
    },
    template: `
      <InputField
        v-model="password"
        type="password"
        inputId="password-field"
        :icon="['fas', 'lock']"
        label="Password"
        placeholder="Enter Password"
      />
    `,
  }),
  parameters: {
    docs: {
      storyDescription: "Password input field with visibility toggle.",
    },
  },
};

/** Disabled input field */
export const Disabled: Story = {
  args: {
    modelValue: "",
    placeholder: "Disabled input",
    type: "text",
    icon: undefined,
    label: "",
    disabled: true,
    isValid: true,
    errorMessage: "",
  },
  render: (args) => ({
    components: { InputField },
    setup() {
      const value = ref(args.modelValue);
      return { args, value };
    },
    template: `
      <InputField
        v-model="value"
        v-bind="args"
      />
    `,
  }),
  parameters: {
    docs: {
      storyDescription: "Disabled input field.",
    },
  },
};
