// pages/bookdetail/bookdetail.js
import {books} from '../../models/book'
let bookModel = new books()
Page({
  /**
   * 初始数据
   */
  data: {
    //数据数据
    dbook:null,
    //短评数据
    comment:[],
    //内容简介
    bookcontent:null,
    //出版信息
    publish:null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //获取页面的参数
    console.log(options)
    let bid    = options.id;
    let btitle = options.title;
    //设置页面的标题
    wx.setNavigationBarTitle({
      title:btitle
    })
    //根据id请求数据的详情页面
    this.getBookDetail(bid)
  },

  //请求数据的详情页面
  async getBookDetail(id){
    //详情
    let data    = await bookModel.getBookdetai(id);
    //短评
    let comment =  await bookModel.getComment(id);
    
    let dbook = {
      img:data.images.large,
      title:data.title,
      auth:data.author.join('')
    }
    let publish = {
      publishName:data.publisher,
      publishTime:data.pubdate,
      pageNum:data.pages,
      price:data.price,
      binding:data.binding
    }
    this.setData({
      dbook,
      comment:comment.comments,
      bookcontent:data.summary,
      publish
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
})