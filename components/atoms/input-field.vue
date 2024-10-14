<template>
  <div class="flex flex-col w-full">
    <div
      class="group relative flex h-10 w-full rounded transition-all"
      :class="[
        touched && !isValid
          ? 'bg-red-50 border border-red-500'
          : 'bg-white border border-gray-300',
      ]"
    >
      <div
        v-if="icon"
        class="flex w-10 items-center justify-center text-xl text-black"
      >
        <font-awesome-icon :icon="icon" class="text-base text-black/70" />
      </div>
      <input
        :id="inputId"
        :value="modelValue"
        @input="handleInput"
        @focus="handleFocus"
        :placeholder="placeholder"
        :disabled="disabled"
        :type="inputType"
        :class="[
          'h-full flex-1 rounded bg-transparent text-sm outline-none transition-colors pl-2',
          touched && !isValid ? 'text-red-500' : 'text-black',
        ]"
        :aria-labelledby="label ? inputId + '-label' : null"
      />
      <div
        v-if="type === 'password'"
        class="flex w-10 items-center justify-center cursor-pointer text-xl text-black/50"
        @click="toggleVisibility"
      >
        <font-awesome-icon
          :icon="
            inputType === 'password' ? ['fas', 'eye'] : ['fas', 'eye-slash']
          "
        />
      </div>
      <label v-if="label" :id="inputId + '-label'" class="sr-only">
        {{ label }}
      </label>
    </div>
    <div
      v-if="touched && !isValid && errorMessage"
      class="text-red-500 text-xs mt-1"
    >
      {{ errorMessage }}
    </div>
  </div>
</template>

<script>
export default {
  name: "InputField",
  props: {
    modelValue: {
      type: String,
      default: "",
    },
    placeholder: {
      type: String,
      default: "Enter value",
    },
    type: {
      type: String,
      default: "text",
    },
    icon: {
      type: Array,
      default: null,
    },
    label: {
      type: String,
      default: "",
    },
    inputId: {
      type: String,
      default: () => `input-field-${Math.random().toString(36).substr(2, 9)}`,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    isValid: {
      type: Boolean,
      default: true,
    },
    errorMessage: {
      type: String,
      default: "Invalid input",
    },
  },
  data() {
    return {
      inputType: this.type, // Initialize inputType with the passed type prop
      touched: false, // Track if the input has been interacted with
    };
  },
  methods: {
    toggleVisibility() {
      // Toggle between "password" and "text" for visibility
      this.inputType = this.inputType === "password" ? "text" : "password";
    },
    handleInput(event) {
      this.$emit("update:modelValue", event.target.value);
    },
    handleFocus() {
      // Mark the input as touched when the user focuses on the field
      this.touched = true;
    },
  },
  watch: {
    type(val) {
      this.inputType = val;
    },
  },
};
</script>

<style scoped></style>
