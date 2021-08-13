// pages/Demo/Demo.js
var barrageHeight_arr = [5,55,105];
var barrage_style_obj ={};
var barrage_style_arr =[];
Page({
  data: {
    img: {url: [{
      imgsrc:"https://pic.imgdb.cn/item/60fa1b5e5132923bf85bf037.png"
    },
    {
      imgsrc:"https://pic.imgdb.cn/item/60f94e395132923bf8363fd2.jpg"
    },
    {
      imgsrc:"https://pic.imgdb.cn/item/60f94e365132923bf83636b9.jpg"
    }]},
    jingdian: {data:[{
      imgsrc:"https://pic.imgdb.cn/item/60fa4c845132923bf8e04e55.jpg",
      title:"大明湖",
      value:"济南三大历史名胜之一，湖水水色澄碧，是国家5A级旅游景区——天下第一泉风景区的核心组成部分之一。"
    },{
      imgsrc:"https://pic.imgdb.cn/item/60fa652f5132923bf82b7299.jpg",
      title:"千佛山",
      value:"千佛山古称历山；相传上古虞舜帝为民时，曾躬耕于历山之下，故亦名舜山或舜耕山。据史载：隋朝年间，山东佛教盛行，虔诚的教徒依山沿壁镌刻了为数较多的石佛，建千佛寺而得名千佛山。"
    }]},
    tongzhi: {key: ["第一条通知","第二条通知","第三条通知"]},
    barrage_style: [
      {
        barrageTime: "2021/8/12",
        barrageText: "测试",
        barrageHeight: 5,
        barrageWidth: 400,
      },
      {
        barrageTime: "2021/8/12",
        barrageText: "测试",
        barrageHeight: 55,
        barrageWidth: 500,
      },
      {
        barrageTime: "2021/8/12",
        barrageText: "测试",
        barrageHeight: 105,
        barrageWidth: 600,
      },
    ],
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var thit = this;
    setInterval(this.barrageText_move,10);
    barrage_style_arr = [
      {
        barrageTime: "2021/8/12",
        barrageText: "测试",
        barrageHeight: 5,
        barrageWidth: 400,
      },
      {
        barrageTime: "2021/8/12",
        barrageText: "测试",
        barrageHeight: 55,
        barrageWidth: 500,
      },
      {
        barrageTime: "2021/8/12",
        barrageText: "测试",
        barrageHeight: 105,
        barrageWidth: 600,
      },
    ];
    // wx.request({
    //   url: 'http://localhost:8080/Maven_Web/servletTest',
    //   data: {
    //     a:"1",
    //     b:"2"
    //   },
    //   method:"GET",
    //   success(res){
    //     console.log(res.data);
    //   }
    // })
  },
  barrageText_move: function(){
    var timerNum = barrage_style_arr.length;
    var textMove;// 宽度
    for(var i=0;i<timerNum;i++){
       textMove = barrage_style_arr[i].barrageWidth;
       //console.log("barrage_style_arr["+i+"].barrageWidth----------:"+barrage_style_arr[i].barrage_phoneWidth);
       textMove = textMove -1;
      barrage_style_arr[i].barrageWidth = textMove;
      //走完的移除掉
      if(textMove<=1){
 //         clearTimeout(this.timer);
          barrage_style_arr.splice(0,1);
          i--;
          // 全部弹幕运行完
          if(barrage_style_arr.length==0){
            this.setData({
              barrage_style:barrage_style_arr, 
            })
            // clearInterval(this.timer);
            return;
          }
      }
      //console.log("第"+i+"个定时器:",textMove);
      this.setData({
        barrage_style:barrage_style_arr,
      })
    }
  },
})