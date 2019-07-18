// pages/cart/cart.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    movieList: [],
    offset: 1
  },
  scrollBottom(e) {
    let num=this.data.offset;
    num++;
    this.setData({
      offset:num
    })
    this.getData()
    console.log(e)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  getData() {
    let arr = this.data.movieList;
    wx.request({
      url: `http://m.maoyan.com/ajax/mostExpected?ci=1&limit=10&offset=${this.data.offset}&token`,
      data: '',
      header: {},
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: (res) => {
        res.data.coming.forEach(item => {
          //console.log(item)
          item.img = item.img.replace("w.h", "170.230");
          arr.push(item)
        })

        this.setData({
          movieList: arr
        })
        console.log(this.data.movieList)
      },
      fail: function (res) {},
      complete: function (res) {},
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.getData()
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