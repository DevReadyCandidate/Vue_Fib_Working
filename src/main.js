import { createApp } from "vue";
import App from "./App.vue";

createApp(App).mount("#app");
function init() {
  const app = createApp(App);
  app.mount("#app");
}

document.addEventListener("DOMContentLoaded", init);
