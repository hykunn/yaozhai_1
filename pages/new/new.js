var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title: null,
    content: [],
    tapindex:null,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.removeStorage({
      key: 'diaryContent',
      success: function (res) {
        console.log(res.data)
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
    var that=this;
    wx.getStorage({
      key: 'diaryContent',
      success: function (res) {
        that.data.content.push({ c_type:"text",data:res.data});
        that.setData({ content: that.data.content});
      }
    }),
    wx.removeStorage({
      key: 'diaryContent',
      success: function (res) {
      }
    })
  },
  onSaveClick:function(){

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
  onAddclick: function () {
    var that=this;
    wx.showActionSheet({
      itemList: ['文字', '图像', '视频'],
      itemColor:'#b59b80',
      success: function (res) {
        that.setData({ tapindex: res.tapIndex });
        console.log(that.data.tapindex);
        if (that.data.tapindex==0){
          wx.navigateTo({
            url: "/pages/new/text/text"
          })
        }
        if (that.data.tapindex == 1){
          wx.chooseImage({
            count: 1, // 默认9
            sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
            sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
            success: function (res) {
              // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
              var tempFilePaths = res.tempFilePaths;
              that.data.content.push({ c_type: "image", data: tempFilePaths});
              that.setData({ content: that.data.content });
            }
          })
        }
        if (that.data.tapindex == 2) {
          wx.chooseVideo({
            sourceType: ['album', 'camera'],
            maxDuration: 60,
            camera: 'back',
            success: function (res) {
              var tempFilePath = res.tempFilePath;
              console.log("视频", tempFilePath);
              that.data.content.push({ c_type: "video", data: tempFilePath });
              that.setData({ content: that.data.content });
            }
          })
        }
      },
      fail: function (res) {
        console.log(res.errMsg)
      }
    })
    console.log(that.data.content);
  },
  deleteClick:function(event){
    var that=this;

    that.data.content.splice(event.currentTarget.dataset.index,1);
    that.setData({ content: that.data.content});
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
})