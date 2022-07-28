import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import { useRegisterSW } from 'virtual:pwa-register/vue';

useRegisterSW();

createApp(App).use(router).mount('#app')
