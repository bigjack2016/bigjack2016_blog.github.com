import Vue from 'vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
Vue.use(VueRouter);
Vue.use(VueResource);
import './../static/script/flexible.js';

//引用组件
import App from './App.vue'
import bzbRankComponent from './components/bzbRank/index.vue';
import mbRankComponent from './components/mbRank/index.vue';
import quanshuRankComponent from './components/quanshuRank/index.vue';
import winRankComponent from './components/winRank/index.vue';
import zmRankComponent from './components/zmRank/index.vue';

var router = new VueRouter();

//配置路由
router.map({
  '/bzbRank':{
    component:bzbRankComponent
  },
  '/mbRank':{
    component:mbRankComponent
  },
  '/quanshuRank':{
    component:quanshuRankComponent
  },
  '/winRank':{
    component:winRankComponent
  },
  '/zmRank':{
    component:zmRankComponent
  }
});

//设置默认
router.redirect({
  '/':'/winRank'
});

//启动路由
router.start(App,'app');

//2761884329
