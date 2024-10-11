import TermsCheckbox from "../../components/molecules/terms-checkbox.vue";
import type { Meta, StoryObj } from "@storybook/vue3";
import { ref } from "vue";

const meta = {
  title: "molecules/TermsCheckbox",
  component: TermsCheckbox,
  argTypes: {
    modelValue: {
      control: "boolean",
      description: "The checked state of the checkbox",
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          "A checkbox component that users must check to accept Terms & Conditions and Privacy Policy.",
      },
    },
  },
} satisfies Meta<typeof TermsCheckbox>;

export default meta;

type Story = StoryObj<typeof meta>;

/** Default TermsCheckbox component */
export const Default: Story = {
  args: {
    modelValue: false,
  },
  render: (args) => ({
    components: { TermsCheckbox },
    setup() {
      const isChecked = ref(args.modelValue);

      return { args, isChecked };
    },
    template: `
      <div class="flex justify-center py-8 px-16 bg-black text-white">
        <TermsCheckbox
          v-model="isChecked"
        />
        <p>Checkbox is {{ isChecked ? 'checked' : 'unchecked' }}.</p>
      </div>
    `,
  }),
  parameters: {
    docs: {
      storyDescription: "Default TermsCheckbox component with unchecked state.",
    },
  },
};

/** Checked TermsCheckbox */
export const CheckedState: Story = {
  args: {
    modelValue: true,
  },
  render: (args) => ({
    components: { TermsCheckbox },
    setup() {
      const isChecked = ref(args.modelValue);

      return { args, isChecked };
    },
    template: `
      <div class="flex justify-center py-8 px-16 bg-black text-white">
        <TermsCheckbox
          v-model="isChecked"
        />
        <p>Checkbox is {{ isChecked ? 'checked' : 'unchecked' }}.</p>
      </div>
    `,
  }),
  parameters: {
    docs: {
      storyDescription: "TermsCheckbox component with initial checked state.",
    },
  },
};
