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
      <div class="p-4 bg-gray-800 text-white">
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
      <div class="p-4 bg-gray-800 text-white">
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

/** TermsCheckbox with Custom Text */
export const CustomText: Story = {
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
      <div class="p-4 bg-gray-800 text-white">
        <TermsCheckbox
          v-model="isChecked"
        >
          <template #default>
            I agree to the
            <a href="#" class="underline text-primary hover:text-white">User Agreement</a>
            and
            <a href="#" class="underline text-primary hover:text-white">Data Policy</a>.
          </template>
        </TermsCheckbox>
        <p>Checkbox is {{ isChecked ? 'checked' : 'unchecked' }}.</p>
      </div>
    `,
  }),
  parameters: {
    docs: {
      storyDescription: "TermsCheckbox component with custom text using slots.",
    },
  },
};

/** TermsCheckbox within a Form */
export const WithinForm: Story = {
  args: {
    modelValue: false,
  },
  render: (args) => ({
    components: { TermsCheckbox },
    setup() {
      const isChecked = ref(args.modelValue);
      const formValid = ref(false);

      const handleSubmit = () => {
        formValid.value = !!isChecked.value;
        if (formValid.value) {
          alert("Form submitted successfully!");
        } else {
          alert("Please accept the terms and conditions.");
        }
      };

      return { args, isChecked, handleSubmit, formValid };
    },
    template: `
      <div class="p-4 bg-gray-800 text-white">
        <form @submit.prevent="handleSubmit">
          <TermsCheckbox
            v-model="isChecked"
          />
          <button
            type="submit"
            class="mt-4 px-4 py-2 bg-primary text-white rounded"
          >
            Submit
          </button>
        </form>
        <p v-if="formValid">Form is valid and ready to submit.</p>
      </div>
    `,
  }),
  parameters: {
    docs: {
      storyDescription:
        "Demonstrates how to use the TermsCheckbox within a form.",
    },
  },
};

/** TermsCheckbox on Light Background */
export const LightBackground: Story = {
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
      <div class="p-4 bg-white text-black">
        <TermsCheckbox
          v-model="isChecked"
        />
        <p>Checkbox is {{ isChecked ? 'checked' : 'unchecked' }}.</p>
      </div>
    `,
  }),
  parameters: {
    docs: {
      storyDescription:
        "TermsCheckbox component displayed on a light background.",
    },
  },
};
