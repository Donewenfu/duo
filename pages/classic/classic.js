import {classic} from '../../models/classic'
import {like} from '../../models/like'
let classicModel = new classic();
let likeModel  = new like();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    //电影数据
    movieData:null,
    //左边
    isleft:false,
    //右边
    isright:true,
    //点赞的状态
    likeStatus:false,
    //点赞的数量
    likeCount:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
    //获取最新一期
    classicModel.getlatestData((res)=>{
      this.setData({
        movieData:res,
        likeStatus:res.like_status,
        likeCount:res.fav_nums
      })
      console.log(this.data.movieData)
    })
  },
  //自定义点赞事件
  clickLike(e){
    //获取点赞的类型和id 
    let likeDetai = e.detail;
    console.log(likeDetai)
    likeModel.clickLike(likeDetai.type,likeDetai.id,likeDetai.likeType,(res)=>{
      })
  },
  //点击左边切换
  leftclick(){
      this.getClassnextOrpre('next')
      likeModel.getLikeinfo(this.data.movieData.type,this.data.movieData.id,(res)=>{
        this.setData({
          likeStatus:res.like_status,
          likeCount:res.fav_nums
        })
      })
  },
  //点击右边切换
  rightclick(){
    this.getClassnextOrpre('previous')
    likeModel.getLikeinfo(this.data.movieData.type,this.data.movieData.id,(res)=>{
      this.setData({
        likeStatus:res.like_status,
        likeCount:res.fav_nums
      })
    })
  },
  //获取上一期下一期
  getClassnextOrpre(nexorpre){
    let id = this.data.movieData.index;
    classicModel.getpreOrnex(nexorpre,id,(res)=>{
      this.setData({
        movieData:res,
        isleft:classicModel.isFirst(res.index),
        isright:classicModel.isLast(res.index)
      })
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