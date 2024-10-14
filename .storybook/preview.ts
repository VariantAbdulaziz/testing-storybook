import type { Preview } from "@storybook/vue3";
import { setup } from "@storybook/vue3";
import "../assets/css/main.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";

setup((app) => {
  library.add(fas);
  app.component("font-awesome-icon", FontAwesomeIcon);
});

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
