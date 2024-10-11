import SocialButton from "../../components/molecules/social-button.vue";
import type { Meta, StoryObj } from "@storybook/vue3";

// Define the component's metadata using `Meta` type from Storybook
const meta = {
  title: "molecules/SocialButton",
  tags: ["autodocs"],
  component: SocialButton,
  argTypes: {
    iconSrc: {
      control: "text",
      description: "URL or path of the icon displayed on the button",
    },
    label: {
      control: "text",
      description: "Text label displayed next to the icon",
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          "A button component with an icon and a label. The icon can be customized via props, making it versatile for different use cases like social media login buttons.",
      },
    },
  },
} satisfies Meta<typeof SocialButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    iconSrc: "../../assets/img/google-logo.png", // Using Google icon as default for the placeholder
    label: "Default Button",
  },
  parameters: {
    docs: {
      storyDescription:
        "The default icon button with a placeholder Google icon and a label.",
    },
  },
  render: (args) => ({
    components: { SocialButton },
    setup() {
      return { args };
    },
    template: `<SocialButton class="bg-black max-w-sm" :iconSrc="args.iconSrc" :label="args.label" @click="args.onClick" />`,
  }),
};

// Apple Button with local icon
export const AppleButton: Story = {
  args: {
    iconSrc: "../../assets/img/google-logo.png",
    label: "Sign in with Apple",
  },
  parameters: {
    docs: {
      storyDescription:
        "A button styled for Apple sign-in with the locally imported Apple logo and label.",
    },
  },
  render: (args) => ({
    components: { SocialButton },
    setup() {
      return { args };
    },
    template: `<SocialButton  class="bg-black max-w-sm" :iconSrc="args.iconSrc" :label="args.label" @click="args.onClick" />`,
  }),
};

// Facebook Button with local icon
export const FacebookButton: Story = {
  args: {
    iconSrc: "../../assets/img/apple-logo.png",
    label: "Continue with Facebook",
  },
  parameters: {
    docs: {
      storyDescription:
        "A button styled for Facebook login, displaying the locally imported Facebook logo and label.",
    },
  },
  render: (args) => ({
    components: { SocialButton },
    setup() {
      return { args };
    },
    template: `<SocialButton  class="bg-black max-w-sm" :iconSrc="args.iconSrc" :label="args.label" @click="args.onClick" />`,
  }),
};

// Google Button with local icon
export const GoogleButton: Story = {
  args: {
    iconSrc: "../../assets/img/google-logo.png",
    label: "Sign in with Google",
  },
  parameters: {
    docs: {
      storyDescription:
        "A button styled for Google sign-in, featuring the locally imported Google logo and label.",
    },
  },
  render: (args) => ({
    components: { SocialButton },
    setup() {
      return { args };
    },
    template: `<SocialButton class="bg-black max-w-sm" :iconSrc="args.iconSrc" :label="args.label" @click="args.onClick" />`,
  }),
};
