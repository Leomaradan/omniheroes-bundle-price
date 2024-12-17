import { createApp } from "vue";
import { plugin } from "@formkit/vue";
import config from './formkit.config.ts'
import "./style.css";
import App from "./App.vue";

createApp(App).use(plugin, config).mount("#app");
