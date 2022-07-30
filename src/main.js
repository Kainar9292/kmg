import { createApp } from 'vue'
import './style.css'
import 'ant-design-vue/dist/antd.css'
import isMobile from './plugins/is-mobile'
import Antd from 'ant-design-vue/es'
import App from './App.vue'

const app = createApp(App)
  .use(isMobile)
  .use(Antd)

app.mount('#app')
