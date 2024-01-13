import { createApp } from 'vue'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/reset.css';
import App from '@/App.vue'
import router from '@/router'
import { createPinia } from 'pinia'

import i18n from '@/plugins/i18n'
import '@/style.css'

const app = createApp(App)
app.use(i18n, {
    greetings: {
        hello: 'lyonguan!'
    }
})
app.use(createPinia())
app.use(Antd)
app.use(router)
app.mount('#app')
