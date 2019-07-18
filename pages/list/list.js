// pages/list/list.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      titleList:[],
      contentList:[],
      titleIndex:0,
      currentKey:"A"
  },

  changeId(e){
    //传给子元素  通过子元素调用达到改变颜色的地步
    //顺便改变key值利用scroll-view这个标签从而进行一些切换
    let { id } = e.detail;
    //console.log(key)
    //console.log(id,"===========")
    this.setData({
      titleIndex:id
    })
  },
  changekey(e){
    let {key}=e.detail;
    this.setData({
      currentKey: key
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
      wx.request({
        url: 'https://www.easy-mock.com/mock/5ceb8bac32cfe337f96fe748/example/car#!method=GET&queryParameters=%5B%7B%22enabled%22%3Atrue%2C%22key%22%3A%221%22%2C%22value%22%3A%22%22%7D%5D&body=&headers=%5B%5D',
        data: '',
        header: {},
        method: 'GET',
        dataType: 'json',
        responseType: 'text',
        success:(res)=> {
          let data = res.data.data.items;
          let arr=[]
          data.forEach(item=>{
            arr.push(item.key)
          })
          this.setData({
            titleList:arr,
            contentList:data
          })
          //console.log(this.data.contentList)
        },
        fail: function(res) {},
        complete: function(res) {},
      })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})