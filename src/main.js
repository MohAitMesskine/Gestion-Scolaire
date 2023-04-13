import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import DataTable from 'datatables.net-vue3';
import DataTablesCore from 'datatables.net';
import { createI18n } from 'vue-i18n'; 
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
//  import './assets/main.css'
import 'element-plus/dist/index.css'
import fr from "./locales/fr.json";
import en from "./locales/en.json";


const app = createApp(App)
const i18n = createI18n({
  locale: "en",
  fallbackLocale: [ 'fr', 'en' ] ,
  messages: { fr, en },
  })
  for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }
app.use(ElementPlus)
DataTable.use(DataTablesCore);
app.use(createPinia())
app.use(router)
app.use(i18n)
app.mount('#app')
