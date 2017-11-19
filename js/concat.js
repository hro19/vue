Vue.component('my-component', {
  template: '<div>A custom component!</div>'
})

   new Vue({
      el: '.app',
      methods:{
        currentSlugFlg:function(currentData){
           //return currentData.slug === "/consulting/aaaa/"
           return currentData.slug === location.pathname;
        },
        isCurrent:function(currentData){
           //return currentData.slug === "/consulting/aaaa/"
           return currentData.slug === location.pathname;
          //return false;
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
  template: 
  '<section>'+
  '<h3>コンポーネントタイトル</h3>'+
  '<div>'+
  '<p>hello!</p>'+
  '<aside>コンポーネント化成功</aside>'+
  '</div>'+
  '</section>',
})