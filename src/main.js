import { createApp } from 'vue'
import App from './App.vue'
import router from '../src/router/index.js'
import './styles.css'

const app = createApp(App)
app.use(router)
app.mount('#app')
