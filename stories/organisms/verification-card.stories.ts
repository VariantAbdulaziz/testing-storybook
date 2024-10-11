import type { Meta, StoryObj } from "@storybook/vue3";

// Import your component and any dependencies
import VerificationCard from "../../components/organisms/verification-card.vue";

// Placeholder image URL
const placeholderLogo = "https://via.placeholder.com/96?text=Logo";

const meta: Meta<typeof VerificationCard> = {
  title: "organisms/VerificationCard",
  tags: ["autodocs"],
  component: VerificationCard,
  argTypes: {
    userName: {
      control: "text",
      description: "The name of the user to display",
      defaultValue: "Aladia User",
    },
    logo: {
      control: "text",
      description: "URL of the logo or profile picture",
      defaultValue: placeholderLogo,
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          "A verification card component that prompts the user to enter a 6-digit code sent via email.",
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof VerificationCard>;

/** Default Verification Card */
export const Default: Story = {
  args: {
    userName: "Aladia User",
    logo: placeholderLogo,
  },
  render: (args) => ({
    components: { VerificationCard },
    setup() {
      return { args };
    },
    template: `
      <div class="p-4 max-w-sm bg-black flex justify-center items-center min-h-screen">
        <VerificationCard
          :userName="args.userName"
          :logo="args.logo"
        />
      </div>
    `,
  }),
  parameters: {
    docs: {
      storyDescription:
        "Default verification card with placeholder logo and default user name.",
    },
  },
};

/** Custom User Name and Logo */
export const CustomUser: Story = {
  args: {
    userName: "John Doe",
    logo: "https://via.placeholder.com/96?text=JD",
  },
  render: (args) => ({
    components: { VerificationCard },
    setup() {
      return { args };
    },
    template: `
      <div class="p-4 max-w-sm bg-black flex justify-center items-center min-h-screen">
        <VerificationCard
          :userName="args.userName"
          :logo="args.logo"
        />
      </div>
    `,
  }),
  parameters: {
    docs: {
      storyDescription: "Verification card with custom user name and logo.",
    },
  },
};
