import { createApp } from 'vue';
import App from './App.vue';
import vueRouter from './router/index.js';
import FloatingVue from 'floating-vue';
import "@/scss/main.scss";
import components from './components';
import { FontAwesomeIcon } from '@/utils/fontawesome';

const app = createApp(App);

// Register base components
Object.keys(components).forEach((key) => {
 app.component(key,components[key]);
})

//Register FontAwesome Icon component
app.component('font-icon', FontAwesomeIcon);

// use component
app.use(vueRouter);
app.use(FloatingVue);

app.mount('#app');


