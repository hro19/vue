
   new Vue({
      el: '.app',
      template:
      '<div class="app">'+
        '<h1 v-for="val in consulting.concat(contents,cop)" v-if="currentSlugFlg(val)">{{val.name}}</h1>'+
          '<ul>'+
              '<li v-for="val in consulting" v-bind:class="{ active:currentSlugFlg(val) }"><a v-bind:href="val.slug">{{ val.name }}</a></li>'+
          '</ul>'+
          '<hr>'+
          '<ul>'+
              '<li v-for="val in contents" v-bind:class="{ active: currentSlugFlg(val) }"><a v-bind:href="val.slug">{{ val.name }}</a></li>'+
          '</ul>'+
          '<hr>'+
          '<ul>'+
            '<li v-for="val in cop" v-bind:class="{ active: currentSlugFlg(val) }"><a v-bind:href="val.slug">{{ val.name }}</a></li>'+
          '</ul>'+
      '</div>',
      methods:{
        currentSlugFlg:function(currentData){
           //return currentData.slug === "/consulting/aaaa/"
           return currentData.slug === location.pathname;
        }
      },
      data: {
        consulting:[
        {
        'slug':'/consulting/aaaa/',
        'name':'狭い土地利用'
        },
        {
        'slug':'/consulting/bbbb/',
        'name':'丁度よいい土地利用'
        },
        {
        'slug':'/consulting/ccccc/',
        'name':'広いい土地利用'
        }      
       ],
      contents:[
        {
        'slug':'/contents/',
        'name':'コンテンツについて'
        },
        {
        'slug':'/contents/mmmmm/',
        'name':'点々'
        },
        {
        'slug':'/contents/llll/',
        'name':'増やしていきましょう'
        }      
     ],     
      cop:[
        {
        'slug':'/cop/design/',
        'name':'デザイン'
        },
        {
        'slug':'/cop/good/',
        'name':'商品'
        },
        {
        'slug':'/cop/',
        'name':'コップ'
        }      
     ]     
    }
  })


new Vue({
  el: '.hero',
  data () {
    return {
      msg: 'Hello World!',
      a: 22
    }
  },
  computed: {
    // get のみ。必要なのは関数一つだけ
    aDouble: function () {
      return this.a * 2
    }
  },
  template:
  '<div class="hero">'+
  '<section>'+
  '<h3>コンポーネントタイトル</h3>'+
  '<div>'+
  '<p>hello!</p>'+
  '<aside>{{aDouble}}コンポーネント化成功{{msg}}</aside>'+
  '</div>'+
  '</section>'+
  '</div>',
})