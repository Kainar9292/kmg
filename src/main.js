import { createApp } from 'vue'
import './scss/app.scss'
import 'ant-design-vue/dist/antd.min.css';
import isMobile from './plugins/is-mobile'
import store from './store';
import router from './router';
import '@/plugins/chartjs';
import { registerGlobalComponents } from './components/global-components'
import Antd from 'ant-design-vue/es'
import App from './App.vue'

const app = createApp(App)
  .use(isMobile)
  .use(Antd)
  .use(store)
  .use(router)


registerGlobalComponents(app)

app.mount('#app')
