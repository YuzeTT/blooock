import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import { useRegisterSW, registerSW } from 'virtual:pwa-register/vue';

useRegisterSW();

const intervalMS = 24 * 60 * 60 * 1000

const updateSW = registerSW({
  onRegistered(r:any) {
    r && setInterval(() => {
      r.update()
    }, intervalMS)
  }
})

createApp(App).use(router).mount('#app')
