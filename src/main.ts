import { createApp } from 'vue'
import App from './App.vue'
import '@/assets/css/base.css'
import 'animate.css'
import { OhVueIcon, addIcons } from 'oh-vue-icons'
import { HiHome,RiQqLine,FaBloggerB,BiGithub } from 'oh-vue-icons/icons'
addIcons(HiHome,RiQqLine,FaBloggerB,BiGithub)

const app = createApp(App)
app.component('v-icon', OhVueIcon)
app.mount('#app')
