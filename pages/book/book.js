import {books} from '../../models/book'
import {randomString} from '../../utils/util'
let bookModel = new books()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //热门数据列表
    hostList:[],
    //热门搜索关键词
    hotData:[],
    //是否显示搜索界面
    isshowSearch:false,
    //随机字符串
    rannum:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: async function (options) {
    let hostData = await bookModel.getHotBook();
    this.setData({
      hostList:hostData
    })
  },
  //点击搜索
  clickheder(){
    this.setData({
      isshowSearch:true
    })
    this.getHotData()
  },
  //获取热门数据
  async getHotData(){
    let data = await bookModel.getHotkey();
    this.setData({
      hotData:data.hot
    })
  },
  //关闭搜索
  closesearchboxs(){
    this.setData({
      isshowSearch:false
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
    this.setData({
      rannum:randomString(10)
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})