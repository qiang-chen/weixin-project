//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    region: ['山东省', '济南市', '历城区'],
    now:{
      cond_code:'999',
      cond_txt:'未知',
      tmp:0,
      hum:0,
      pres:0,
      vis:0,
      wind_dir:0,
      wind_spd:0,
      wind_sc:0
    }
  },
  //事件处理函数
  bindViewTap: function() {
   
  },
  onLoad: function () {
    this.getWeather()
  },
  /**
   * 自定义函数--获取实况天气
   */
  getWeather: function() {
    var that = this

    wx.request({
      url: 'https://free-api.heweather.com/s6/weather/now',//接口地址
      data:{
        location:that.data.region[1],
        key:'5eedc4b890ed4320b9adb26244f42642'
      }, //附带参数
      success:function(res){
       // console.log(res.data.HeWeather6[0].now)
       console.log(res)
        that.setData({
          now: res.data.HeWeather6[0].now
        })

      }
    })

  },
  regionChange(e){
    let region=e.detail.value
    this.setData({
      region
    },()=>{
      this.getWeather()
    })
    
  }
})
