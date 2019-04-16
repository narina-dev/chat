require('./bootstrap');

// window.Vue = require('vue');

import Vue from 'vue'
window.Vue = Vue;

// import ChatComponent from './components/ChatComponent.vue';

Vue.component('chat-component', require('./components/ChatComponent.vue').default);
Vue.component('user-component', require('./components/UserComponent.vue').default);
Vue.component('chat-messages-component', require('./components/ChatMessageComponent.vue').default);
Vue.component('chat-form-component', require('./components/ChatFormComponent.vue').default);
Vue.component('message-component', require('./components/MessageComponent.vue').default);

const app = new Vue({
    el: '#app',

   
});
