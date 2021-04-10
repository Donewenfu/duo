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
    publish:null,
    //数据点赞数据
    likeInfo:null,
    //是否显示
    showComment:false,
    //用户输入的内容
    commentVal:''
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
    let data     = await bookModel.getBookdetai(id);
    //短评
    let comment  = await bookModel.getComment(id);
    //喜欢
    let likeInfo = await bookModel.getLikeinfo(id);
    
    let dbook = {
      img:data.images.large,
      title:data.title,
      auth:data.author.join(''),
      ids:data.id
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
      publish,
      likeInfo
    })
  },
  //点击评论
  clickcomments(){
    this.setData({
      showComment:true
    })
  },
  //隐藏评论
  cancelcomment(){
    this.setData({
      showComment:false
    })
  },
  //点击tag标签请求
  async clicktag(e){
    let tagtext = e.detail.tagClick
    this.requestComment(tagtext)
  },
  // 评价请求
  async requestComment(content){
    if(!content||content.length>12){
      wx.showToast({
        title: '内容有误！',
        icon:'none'
      })
      return
    }
    let data = await bookModel.addComment(this.data.dbook.ids,content);
    if(data.msg == 'ok'){
      wx.showToast({
        title: '短评成功',
        icon:''
      })
      this.data.comment.unshift({'content':content,'nums':'1'})
      this.setData({
        showComment:false,
        comment:this.data.comment
      })
    }
  },
  //comfirm事件
  comfirms(e){
    let commval  = e.detail.content;
    this.requestComment(commval)
  },
  //点击确认
  comfirmright(){
    this.requestComment(this.data.commentVal)
  },
  //用户输入事件
  inputEvents(e){
    this.setData({
      commentVal:e.detail.inputval
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