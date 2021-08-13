// pages/Demo/Demo.js
Page({
  data: {
    jingdian:{
      data: [
        {
          title: "万佛洞",
          imgsrc: ["https://pic.imgdb.cn/item/610fed1f5132923bf823cc5f.jpg",
          "https://pic.imgdb.cn/item/610fee695132923bf8268975.jpg"],
          p: "万佛洞位于千佛山北麓，是千佛山的一大胜景，兴建于1992年。塑造佛祖、菩萨、弟子、天王近3万尊，最大卧佛长28米，洞前矗立的大佛高15米，洞内壁画1万余平方米。万佛洞由四部分构成，分别为：莫高集锦、龙门精华、麦积奇观、云冈荟萃。洞长500米，记载了中国佛教发展历史的变迁，蕴藏着深厚的文化内涵。"
        },
        {
          title: "观音园",
          imgsrc: ["https://pic.imgdb.cn/item/610fee695132923bf8268975.jpg",
          "https://pic.imgdb.cn/item/610fed1f5132923bf823cc5f.jpg"],
          p: "观音园园内，池岸峭石矗立，矶石卧波，秀石点饰。四围垂荫，时鸟欢歌。池内水清见底，荷花艳开，金鲤戏游。内设喷泉，溅珠泄玉，彩虹映日，蔚为大观。矗立在荷花池中的是\"白衣观音\"高达13米，为观音园中最大者。"
        }
      ]
    },
    banners: [
    {
      src: "https://pic.imgdb.cn/item/610fee695132923bf8268975.jpg"
    },
    {
      src: "https://pic.imgdb.cn/item/610fee695132923bf8268975.jpg"
    },
    {
      src: "/pages/wyimg/b03533fa828ba61e035701424b34970a304e5926.jpg"
    },
    {
      src: "/pages/wyimg/d4628535e5dde711c92f5485a9efce1b9c1661c7.jpg"
    }
    ],
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options);
  },
})