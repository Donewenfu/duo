import {like} from '../../../models/like'
let likeModel = new like()
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    likeObje:{
      type:Object,
      value:{},
      observer:function(newval,oldval){
        var typstext = {
          100:'电影',
          200:'音乐',
          300:'句子'
        }[newval.type]
        this.setData({
          type:typstext
        })
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    //类型
    type:''
  },

  /**
   * 组件的方法列表
   */
  methods: {
    clicllike(e){
      likeModel.clickLike(this.properties.likeObje.type,this.properties.likeObje.id,e.detail.likeType)
    }
  }
})
