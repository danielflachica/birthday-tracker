require('./bootstrap');

import { createApp } from 'vue';
import WelcomeBanner from './Components/Welcome.vue';

const app = createApp({});

app.component('welcome-banner', WelcomeBanner);

app.mount('#app');
