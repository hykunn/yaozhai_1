const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    title: "黑山村蝴蝶歌",
    author: "管理员",
    time: "2018-8-12 10:00",
    content: [{
      c_type: "text",
      data: '蝴蝶歌教唱体验。由黑山村蝴蝶歌传唱人，定期定点在黑山村蝴蝶泉、蝴蝶歌对歌长廊、蝴蝶歌堂、蝴蝶广场，对蝴蝶歌乐谱进行公开教唱。游客可根据自己的旅行时间安排，在国家非物质文化遗产蝴蝶歌的发源地，在黑山村本土瑶寨人的帮助下，学习及体验蝴蝶歌特色文化。'
    }, {
      c_type: "image",
      data: '../../images/article/1.png'
    }, {
      c_type: "text",
      data: '蝴蝶歌音乐剧。由黑山村蝴蝶歌传承人与专业歌剧编导，将蝴蝶歌背景故事重现，并以全新的舞美观感为游客呈现一场文化盛宴。'
    }, {
      c_type: "image",
      data: '../../images/article/2.png'
    }, {
      c_type: "text",
      data: '蝴蝶歌实景演出。由黑山村蝴蝶歌传唱人，在蝴蝶文化广场开展户外实景演出，给游客带来原生态的视听盛宴。'
    }, {
      c_type: "image",
      data: '../../images/article/3.png'
    }],
    "comments": [
      {
        "comment": {
          "c_id": 123,
          "c_userID": "评论者微信id",
          "c_username": "西门吹雪",
          "c_useravator": "微信服务器相对地址",
          "c_objectID": 345,
          "c_type": 1,
          "c_content": "哇，这个攻略好好哦",
          "c_datetime": "2018 - 08 - 18 15: 36: 12"
        },
        "replys": [
          {
            "r_id": 324,
            "r_object_type": 1,
            "r_objectID": 123,
            "r_content": "哇，这个评论好棒棒哦",
            "r_username": "杨水水",
            "r_useravator": "微信服务器相对地址",
            "r_userID": "回复者微信id",
            "r_object_userID": "根评论者微信id",
            "r_commentID": 123,
            "r_datetime": "2018 - 08 - 18 16: 36: 12"
          },
          {
            "r_id": 325,
            "r_object_type": 1,
            "r_objectID": 123,
            "r_content": "哇222，这个评论好棒棒哦",
            "r_username": "杨水水22",
            "r_useravator": "微信服务器相对地址",
            "r_userID": "回复者微信id",
            "r_object_userID": "根评论者微信id",
            "r_commentID": 123,
            "r_datetime": "2018 - 08 - 19 16: 36: 12"
          },
        ]
      },
      {
        "comment": {
          "c_username": "西门",
          "c_content": "哇，这个攻略好好哦",
          "c_datetime": "2018 - 08 - 18 15: 36: 12"
        },
        "replys": [
          {
            "r_content": "哇，这个评论好棒棒哦",
            "r_username": "杨水",
            "r_object_userID": "根评论者微信id",
            "r_datetime": "2018 - 08 - 18 16: 36: 12"
          },
          {
            "r_content": "哇222，这个评论好棒棒哦",
            "r_username": "杨水22",
            "r_object_userID": "根评论者微信id",
            "r_datetime": "2018 - 08 - 19 16: 36: 12"
          },
        ]
      }
    ]

  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    if (app.globalData.userInfo) {
      that.setData({
        "userInfo.nickName": app.globalData.userInfo.nickName,
        "userInfo.avatarUrl": app.globalData.userInfo.avatarUrl
      })
    }
    console.log(that.data.userInfo);
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

  },
  onAddclick: function (e) {
    console.log(e);
    var that = this;
    wx.showActionSheet({
      itemList: ['回复', '取消',],
      itemColor: '#b59b80',
      success: function (res) {
        if (res.tapIndex == 0) {
          that.setData({
            releaseFocus: true
          })
          
        }
        else {
          that.setData({
            releaseFocus: false
          })
        }
      },
      fail: function (res) {
        console.log(res.errMsg)
      }
    })
  },
  bindinput: function (e) {
    console.log(e.detail.value);
  }
})