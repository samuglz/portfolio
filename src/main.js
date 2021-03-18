import { createApp } from 'vue';
import App from './App.vue';
import './assets/style/tailwind.css';
import { createI18n } from 'vue-i18n';

const i18n = createI18n({
    locale: 'en',
    messages: {
        en: {
            message: {
                language: 'Language',
                hello: 'hello world!'
            }
        },
        es: {
            message: {
                language: 'Lenguaje',
                hello: 'Hola mundo'
            }
        }
    }
});

const app = createApp(App);
app.use(i18n).mount('#app');
