   new Vue({
      el: '.app',
      template:
      '<div class="app">'+
        '<h1>現在のページの名前を入れたい<span>{{msg}}</span></h1>'+
          '<ul>'+
              '<li><a href="/sites/aaaa/">aaaaページへ</a></li>'+
              '<li><a href="/sites/bbbb/">bbbbページへ</a></li>'+
              '<li><a href="/sites/ccccc/">cccccページへ</a></li>'+
          '</ul>'+
      '</div>',
      methods:{
        currentSlugFlg:function(currentData){
           //return currentData.slug === "/sites/aaaa/"
           return currentData.slug === location.pathname;
        }
      },
      data: {
        msg:'テスト中'
    }
  })
