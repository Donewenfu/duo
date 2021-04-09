let App = getApp()
import {like} from '../../../../models/like'
let likeModel = new like()
Component({
  options:{
    addGlobalClass:true
  },
  /**
   * 组件的属性列表
   */
  properties: {
    //喜欢的数据
    likeData:Object
  },

  /**
   * 组件的初始数据
   */
  data: {
     //判断是否为全面屏
     isFullSucreen:false
  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 喜欢图书
    clicklike(e){
      likeModel.clickLike(400,this.properties.likeData.id,e.detail.likeType)
    },
    clickcomment(){
      this.triggerEvent('clickComment')
    }

  },
  lifetimes:{
    attached(){
      this.setData({
        isFullSucreen: App.globalData.isFullSucreen, //判断机型
      })
    }
  }
})
