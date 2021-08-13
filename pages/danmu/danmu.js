// pages/danmu/danmu.js
var barrage_style_obj ={};
var barrage_style_arr =[];
var timer;
Page({

  //页面的初始数据
  data: {
    barrage_style: [],
    barrageValue: "",
  },

  //生命周期函数--监听页面加载
  onLoad: function (options) {
    timer = setInterval(this.timerFun,500);
  },

  // 定时器要执行的函数
  timerFun:function(){
    
  },

  // 发送按钮
  shoot:function(e) {
    var myDate = new Date();
    
    barrage_style_obj={
      barrageTime: myDate.toLocaleDateString(), // 弹幕发送的时间
      barrageText: this.data.barrageValue, // 弹幕的文本内容
    };
    barrage_style_arr.push(barrage_style_obj);
    this.setData({
      //发送弹幕 
      barrage_style: barrage_style_arr,
      //清空输入框
      barrageValue: ""
    })
  },

  //绑定输入框，将值传递给data里的barrageValue，输入框失去焦点时被调用
  bindInput: function(e){
    this.setData({
      barrageValue:e.detail.value
    })
  },
})