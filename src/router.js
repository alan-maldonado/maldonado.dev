import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

Vue.use(VueRouter);

const routes = [
  { path: '/', component: Home, name: 'Home' },
  { path: '/about', component: About, name: 'About' },
  { path: '/contact', component: Contact, name: 'Contact' }
];

export default new VueRouter({
  mode: 'history',
  routes
});
