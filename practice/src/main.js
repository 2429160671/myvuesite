import Vue from 'vue'
import App from './App.vue'
import About from './components/About'
import Customer from './components/Users'
import VueRouter from "vue-router"    //引入路由组件
import Add from './components/Add'
import Edit from './components/Edit'
import axios from 'axios'

Vue.prototype.$http = axios
// import VueRecourse from 'vue-resource'
Vue.config.productionTip = false;
Vue.use(VueRouter);                     //注册

//设置路由

const router = new VueRouter({
  mode:'history',
  base:__dirname,
  routes: [
    {path: '/',component: Customer},
    {path: '/about',component: About},
    {path: '/add', component:Add},
    {path: '/edit/:id', component:Edit}
]});

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
