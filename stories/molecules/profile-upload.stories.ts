import ProfileUpload from "../../components/molecules/profile-upload.vue";
import type { Meta, StoryObj } from "@storybook/vue3";
import { ref } from "vue";

const meta = {
  title: "molecules/ProfileUpload",
  tags: ["autodocs"],
  component: ProfileUpload,
  parameters: {
    docs: {
      description: {
        component:
          "A component that allows users to upload a profile picture, displaying a default image when no file is selected.",
      },
    },
  },
} satisfies Meta<typeof ProfileUpload>;

export default meta;

type Story = StoryObj<typeof meta>;

/** Default ProfileUpload component */
export const Default: Story = {
  render: () => ({
    components: { ProfileUpload },
    setup() {
      const selectedFile = ref("");

      const handleUpdate = (file: File) => {
        const fileUrl = URL.createObjectURL(file);
        selectedFile.value = fileUrl;
        alert(`File selected: ${file.name}`);
      };

      return { selectedFile, handleUpdate };
    },
    template: `
      <div class="p-4 bg-gray-800 text-white">
        <ProfileUpload
          :modelValue="selectedFile.value"
          @update:modelValue="handleUpdate"
        />
      </div>
    `,
  }),
  parameters: {
    docs: {
      storyDescription: "Default ProfileUpload component with the Aladia logo.",
    },
  },
};

/** ProfileUpload with pre-selected image */
export const PreselectedImage: Story = {
  render: () => ({
    components: { ProfileUpload },
    setup() {
      const selectedFile = ref<File | null>(null);

      // Simulate pre-selected image by creating a File object
      const imageUrl =
        "https://via.placeholder.com/80/FF0000/FFFFFF?text=Preselected";
      const fetchImage = async () => {
        const response = await fetch(imageUrl);
        const blob = await response.blob();
        const file = new File([blob], "preselected-image.png", {
          type: blob.type,
        });
        selectedFile.value = file;
      };
      fetchImage();

      const handleUpdate = (file: File) => {
        selectedFile.value = file;
        alert(`File selected: ${file.name}`);
      };

      return { selectedFile, handleUpdate };
    },
    template: `
      <div class="p-4 bg-gray-800 text-white">
        <ProfileUpload
          :model-value="selectedFile"
          @update:modelValue="handleUpdate"
        />
      </div>
    `,
  }),
  parameters: {
    docs: {
      storyDescription:
        "ProfileUpload component with a pre-selected image file.",
    },
  },
};
