import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import PostView from '@/components/PostView';
import PapersWorld from '@/components/PapersWorld';
import PaperView from '@/components/PaperView';
import ContactWorld from '@/components/ContactWorld';
import Writer from '@/components/Writer';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: HelloWorld,
    },
    {
      path: '/posts',
      name: 'Posts',
      component: HelloWorld,
    },
    {
      path: '/post/:id/:title',
      name: 'PostView',
      component: PostView,
    },
    {
      path: '/papers',
      name: 'PapersWorld',
      component: PapersWorld,
    },
    {
      path: '/paper/:id/:title',
      name: 'PaperView',
      component: PaperView,
    },
    {
      path: '/contact',
      name: 'ContactWorld',
      component: ContactWorld,
    },
    {
      path: '/write',
      name: 'Writer',
      component: Writer,
    },
  ],
});
