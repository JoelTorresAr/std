require('./bootstrap');

window.Vue = require('vue');

 const files = require.context('./components', true, /\.vue$/i)
 files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

//Vue.component('example-component', require('./components/ExampleComponent.vue').default);

//Plugins
import vuetify from './plugins/vuetify';
import router from './routes';
import store from "./store";

const app = new Vue({
    el: '#app',
    vuetify,
    router,
    store,
});
