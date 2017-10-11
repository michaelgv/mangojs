// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import Vuex from 'vuex';

Vue.config.productionTip = false;
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    posts: [
      {
        id: 1,
        title: 'Hello, world!',
        slug: '/post/1/Hello-world',
        date: '11/10/2017, 09:30:26',
        content: '# Welcome, world!\n\nThis is my **brand new** blog! Thanks for visiting it! This is a default post included when you fire up mango for the first time and create a new project.\n\n[Learn More](https://mango.js.org/#/papers/1/Installing-mango)',
      },
    ],
    papers: [
    ],
    contact: {
      enableSocialMedia: false,
      socialMedia: {
        instagram: '',
        facebook: '',
      },
      email: '',
      aboutme: 'Hello, world!',
    },
    devmode: false,
  },
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
  store: store,
});
