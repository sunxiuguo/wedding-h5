import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import animated from 'animate.css';

Vue.use(animated);

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(App),
    mounted() {
        document.dispatchEvent(new Event('render-event'));
    }
}).$mount('#app');
