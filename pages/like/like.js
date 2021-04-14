import {books} from '../../models/book'
let bookModel = new books()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    //我的的数据
    liekData:[],
    likenum:null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //获取我喜欢的数据
    this.getLike()
  },
  //获取我喜欢的数据
  async getLike(){
    let params = {
      statr:1,
      count:20
    }
    let data = await bookModel.getfavorData(params);
    this.setData({
      liekData:data,
      likenum:data.length
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
    //获取我喜欢的数据
    this.getLike()
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