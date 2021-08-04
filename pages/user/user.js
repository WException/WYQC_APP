// pages/cloud/cloud.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isLogin:true,
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    menuitems: [
      { text: '我的足迹', url: './footPrint/ftprint', tips: '' },
      { text: '我的收藏', url: '../userinfo/userinfo',  tips: '' },
      { text: '个人信息', url: './yours/yours', tips: '' },
      { text: '意见反馈', url: './fankui/fankui',  tips: '' }
    ],
  },
onGotUserInfo: function(event){
  console.log(event);
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