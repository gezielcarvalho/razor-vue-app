// wwwroot/js/main.js
import { createApp } from "vue";
import SampleComponent from "./components/SampleComponent.vue";

console.log("Vue app is mounting...");

const app = createApp({
  components: {
    SampleComponent,
  },
  template: `<sample-component />`, // Use the sample component directly
});

app.mount("#vue-app");
