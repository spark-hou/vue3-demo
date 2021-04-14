import {createApp} from 'vue'
import {directive} from '../src/directive'
import App from './App.vue'

const app = createApp(App)
directive(app)
app.mount('#app')
