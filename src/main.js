import { createApp } from 'vue';
import App from './App.vue';
import './assets/style/tailwind.css';
import { createI18n } from 'vue-i18n';
import translations from './locales/translations';

const i18n = createI18n({
    locale: 'en',
    messages: translations
});

const app = createApp(App);
app.use(i18n).mount('#app');
