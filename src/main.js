// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
//Vue.config.productionTip = false

//导入pages下的home;
import Home from './pages/Home'
import Detail from './pages/Detail'

//定义路由配置
const routers = [
  {
    path: '/',
    component: Home
  },
  {
    path: './detail',
    component: Detail
  }
];

//创建路由实例
const router = new VueRouter({
  routers
});
new Vue({
  el: '#app',
  data () {
    return {
      transitionName: 'slide'
    }
  },
  router,
  watch: {
    //监视路由，参数为要目标路由和当前页面的路由
    '$route' (to, from){
      const toDepth = to.path.substring(0, to.path.length-2).split('/').length;
      const fromDepth = from.path.substring(0, from.path.length-2).split('/').length;
      this.transitionName = toDepth < fromDepth ? 'slide_back' : 'slide';
    }
  }
})
