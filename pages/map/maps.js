// pages/index/maps.js

Page({
  turToNext2:function(options){
    wx.navigateTo({
      url: 'chlocation',
    })

  },
  turToNext:function(options){
    wx.navigateTo({
      url: 'smap',
    })

  },

  /**
   * 页面的初始数据
   */
  data: {
    markers:[],
    jingdu:"",
    weidu:"",
    dizhi:"",
    mingcheng:""

  },
 
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (e) {
   
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {


  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function (e) {

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