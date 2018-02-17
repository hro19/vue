//テンプレートの設定
var Message = { template: `
    <div class="page page--message"><p>Message</p></div>
  ` }
var Company = { template:  `
    <div class="page page--company"><p>Company</p></div>
  ` }
var Work = { template:  `
    <div class="page page--work"><p>Work</p></div>
  ` }
var Culture = { template:  `
    <div class="page page--culture"><p>Culture</p></div>
  ` }
var Entry = { template:  `
    <div class="page page--entry"><p>Entry</p></div>
  ` }
var Home = { template:  `
  <div class="page page--home"><p>Home</p></div>
  ` }

//ルーティングの設定
var routes = [
  {
    path: '/message',
    component: Message,
    meta: {
      title: 'Message',
      desc: 'Messageの説明'
    }
  },
  {
    path: '/company',
    component: Company,
    meta: {
      title: 'Company',
      desc: 'Companyの説明'
    }
  },
  {
    path: '/work',
    component: Work,
    meta: {
      title: 'Work',
      desc: 'Workの説明'
    }
  },
  {
    path: '/culture',
    component: Culture,
    meta: {
      title: 'Culture',
      desc: 'Cultureの説明'
    }
  },
  {
    path: '/entry',
    component: Entry,
    meta: {
      title: 'Entry',
      desc: 'Entryの説明'
    }
  },
  {
    path: '/',
    component: Home,
    meta: {
      title: 'Home',
      desc: 'Homeの説明'
    }
  }
]

var router = new VueRouter({
  //mode: 'history',
  routes: routes,
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
});

//titleとdescriptionを変更
router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  document.getElementsByTagName("meta")["description"].setAttribute('content',to.meta.desc);
  
  next();
});

var app = new Vue({
  router
}).$mount('#wrapper');