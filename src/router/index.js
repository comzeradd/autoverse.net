import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import Services from '@/components/Services';
import Projects from '@/components/Projects';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/services',
      name: 'Services',
      component: Services
    },
    {
      path: '/projects',
      name: 'Projects',
      component: Projects
    }
  ]
});
