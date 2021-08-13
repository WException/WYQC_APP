var barrage_style_arr = [];
var barrage_style_obj ={};
var phoneWidth = 0; // 屏幕宽度
var timers = [];
var timer ;
Page({
  data: {
    imgUrls: [
      'https://pic.imgdb.cn/item/60fa1b5e5132923bf85bf037.png',
      'https://pic.imgdb.cn/item/60fa1b5e5132923bf85bf037.png',
      'https://pic.imgdb.cn/item/60fa1b5e5132923bf85bf037.png'
    ],
    barrage_inputText:"none", // 设置弹幕输入框是否显示9
    barrage_shoottextColor:"black",
    bind_shootValue:"",// 输入框中的值11
    barrage_style:[],// 弹幕内容20
    barragefly_display:"none",// 设置弹幕是否显示19
  },

    // 生命周期函数--监听页面加载
  onLoad:function(options){
    var that = this;
    //获取屏幕的宽度
      wx.getSystemInfo({
        success: function(res) {
           that.setData({
                barrage_phoneWidth:res.windowWidth-100,
           })
        }
      })
      phoneWidth = that.data.barrage_phoneWidth;
      console.log(phoneWidth);
  },

  //是否打开弹幕... 
  barrageSwitch: function(e){
    console.log(e.detail.value);
    //先判断没有打开
    if(!e.detail.value){ // 关闭时执行的代码
    //清空弹幕
      barrage_style_arr = [];
      //设置data的值
      this.setData({
        barrage_inputText:"none", // 关闭输入框9
        barragefly_display:"none", // 关闭弹幕显示19
        barrage_style:barrage_style_arr,
      });
      //清除定时器
      clearInterval(timer);
    }else{
      this.setData({
        barrage_inputText:"flex", // 打开输入框9
        barragefly_display:"block", // 弹幕显示19
      });
      //打开定时器
        timer= setInterval(this.barrageText_move,10)
    }
  },

  //发射按钮
  shoot: function(e){

    //字体颜色随机
    var textColor = "rgb("+parseInt(Math.random()*256)+","+parseInt(Math.random()*256)+","+parseInt(Math.random()*256)+")";
    // //设置弹幕字体的水平位置样式
    // var textWidth = -(this.data.bind_shootValue.length*0);
    //设置弹幕字体的垂直位置样式
    var barrageText_height = (Math.random())*266;
    console.log(this);
     barrage_style_obj = {
      // textWidth:textWidth,
      barrageText_height:barrageText_height,
      barrage_shootText:this.data.bind_shootValue,
      barrage_shoottextColor : textColor,
      barrage_phoneWidth:phoneWidth
    };
    barrage_style_arr.push(barrage_style_obj);
    this.setData({
      barrage_style:barrage_style_arr,        //发送弹幕
      bind_shootValue:""                    //清空输入框
    })
    console.log(barrage_style_arr);
    console.log(barrage_style_obj);
      //定时器  让弹幕动起来
      //  this.timer= setInterval(this.barrageText_move,800);

  },

//定时器  让弹幕动起来
  barrageText_move: function(){
    var timerNum = barrage_style_arr.length;
    var textMove;
    for(var i=0;i<timerNum;i++){
       textMove = barrage_style_arr[i].barrage_phoneWidth;
       console.log("barrage_style_arr["+i+"].barrage_phoneWidth----------:"+barrage_style_arr[i].barrage_phoneWidth);
       textMove = textMove -1;
      barrage_style_arr[i].barrage_phoneWidth = textMove;
      //走完的移除掉
      if(textMove<=-100){
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
      console.log("第"+i+"个定时器:",textMove);
      this.setData({
        barrage_style:barrage_style_arr, 
      })
    }
  },

  //绑定发射输入框，将值传递给data里的bind_shootValue，发射的时候调用
  bind_shoot:function(e){
    this.setData({
      bind_shootValue:e.detail.value
    })
  },

})