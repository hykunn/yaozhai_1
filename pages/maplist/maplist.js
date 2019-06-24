Page({
  data: {
    markers: {
      iconPath: "/images/new/add_icon.png",
      id: 0,
      latitude: 23.099994,
      longitude: 113.324520,
      width: 50,
      height: 50
    },
    polyline: [{
      points: [{
        longitude: 113.3245211,
        latitude: 23.10229
      }, {
        longitude: 113.324520,
        latitude: 23.21229
      }],
      color: "#FF0000DD",
      width: 2,
      dottedLine: true
    }],
    sceneList: [{
      pic: '../../images/index/swiper_3.jpg',
      title: '蝴蝶歌教唱体验主题馆',
      intro: '蝴蝶歌教唱体验,音乐剧,实景演出13221321312312312312312312312',
      url: '../../pages/map/map',
      time: '2-4',
      address: '黑山村XX路'
    }, {
      pic: '../../images/index/swiper_3.jpg',
      title: '瑶绣编织体验主题馆',
      intro: '瑶绣编织体验',
        url: '../../pages/map/map',
      time: '2-4',
      address: '黑山村XX路'
    }, {
      pic: '../../images/index/swiper_3.jpg',
      title: '长鼓舞教跳体验主题馆',
      intro: '瑶族芦笙长鼓舞',
      url: '../../pages/map/map',
      time: '2-4',
      address: '黑山村XX路'
    }, {
      pic: '../../images/index/swiper_3.jpg',
      title: '瑶绣编织体验主题馆',
      intro: '瑶绣编织体验',
      url: '../../pages/map/map',
      time: '2-4',
      address: '黑山村XX路'
    }, {
      pic: '../../images/index/swiper_3.jpg',
      title: '蝴蝶歌教唱体验主题馆',
      intro: '蝴蝶歌教唱体验,音乐剧,实景演出',
      url: '../../pages/map/map',
      time: '2-4',
      address: '黑山村XX路'
    }],
    controls: [{
      id: 1,
      iconPath: '/images/new/sub_icon.png',
      position: {
        left: 0,
        top: 300 - 50,
        width: 50,
        height: 50
      },
      clickable: true
    }]
  },
  regionchange(e) {
    console.log(e.type)
  },
  markertap(e) {
    console.log(e.markerId)
  },
  controltap(e) {
    console.log(e.controlId)
  },
  onLoad: function (options) {
    var that = this;
    wx.getLocation({
      type: 'wgs84',
      success: function (res) {
        var latitude = res.latitude;
        var longitude = res.longitude;
        var speed = res.speed;
        var accuracy = res.accuracy;
        that.setData({
          'markers.latitude': latitude,
          'markers.longitude': longitude
        });
        console.log("12321321321312", that.data.markers.latitude, that.data.markers.longitude);
      }
    })

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
}
)