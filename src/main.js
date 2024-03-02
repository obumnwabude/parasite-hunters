import 'primeicons/primeicons.css';
import 'primevue/resources/themes/lara-dark-teal/theme.css';
import './assets/main.css';

import Lara from '@/presets/lara';
import { createPinia } from 'pinia';
import PrimeVue from 'primevue/config';
import ToastService from 'primevue/toastservice';
import { createApp } from 'vue';
import VueGtag from 'vue-gtag';
import App from './App.vue';
import router from './router';

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(PrimeVue, { ripple: true, pt: Lara });
app.use(ToastService);

if (!import.meta.env.DEV) {
  app.use(
    VueGtag,
    { config: { id: import.meta.env.VITE_GA_MEASUREMENT_ID } },
    router
  );
}

app.mount('#app');
