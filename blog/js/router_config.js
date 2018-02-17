//テンプレートの設定
var SingleBlog = { template: `
    <div class="page page--message">
      <h2>SingleBlogのテンプレートです!!{{ $route.params.id }}</h2>
      <div class="blog_content">
      </div>
    </div>`
  }

var Home = { template:  `
  <div class="page page--home">
    <h2>ここはホームです、一覧表示させます<h2>
      <ul v-for="post in posts">
    <li>
      <a v-bind:href="post.link" target="_blank">
        {{post.title.rendered}}<br>
      </a>
      </li>
    </ul>
  </div>
  ` }

//ルーティングの設定
var routes = [
  {
    path: '/',
    component: Home,
    meta: {
      title: 'Home',
      desc: 'Homeの説明'
    }
  },
  {
    path: '/:id',
    component: SingleBlog,
    meta: {
      title: 'Message',
      desc: 'Messageの説明'
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
  router,
  el:'#wrapper',
  data: {
    msg:'メッセ',
    posts: []
  },
  created: function(){
    this.getPosts();
  },
  methods: {
    getPosts: function(){
      axios.get( 'http://026.test55.net/wp/wp-json/wp/v2/member/?_embed' )
      .then( response => {
        this.posts = response.data;
      } )
      .catch( error => {
        window.alert( error );
      } );
    },
  }
})