// components/movie/movie.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    movieList:Array
  },
  
  /**
   * 组件的初始数据
   */
  data: {

  },
  lifetimes:{
    ready(){
      console.log(this.data)
    }
  },
  /**
   * 组件的方法列表
   */
  methods: {
      detail(e){
        let id = e.currentTarget.dataset.id;
        wx.navigateTo({
          url: '/pages/movieDetail/movieDetail?id='+id,
          success: function(res) {},
          fail: function(res) {},
          complete: function(res) {},
        })
      }
  }
})
