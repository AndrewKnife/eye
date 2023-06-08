import './assets/main.css'

import {createApp} from 'vue'
import {createI18n} from 'vue-i18n'

import ltTranslations from './assets/translations/lt.json'
import enTranslations from './assets/translations/en.json'
import App from './App.vue'

const i18n = createI18n({
    locale: 'lt',
    fallbackLocale: 'lt',
    legacy: false,
    messages: {
        lt: ltTranslations,
        en: enTranslations,
    },
})

const app = createApp(App)

app.use(i18n)
app.mount('#app')