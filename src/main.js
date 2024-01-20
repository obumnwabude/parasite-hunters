import 'primeicons/primeicons.css';
import 'primevue/resources/themes/lara-dark-teal/theme.css';
import './assets/main.css';

import Lara from '@/presets/lara';
import { createPinia } from 'pinia';
import PrimeVue from 'primevue/config';
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(PrimeVue, { ripple: true, pt: Lara });

app.mount('#app');
