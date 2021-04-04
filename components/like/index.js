// components/like/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    //喜欢的数量
    likeNum:Number,
    //是否喜欢
    isLike:{
      type:Boolean,
      value:false,
      observer(){
        
      }
    },
    //点赞的id
    likeId:Number,
    //点赞类型分为四种
    type:Number
  },

  /**
   * 组件的初始数据
   */
  data: {
    //喜欢图片
    likeSrc:'./images/likeon.png',
    //默认图片
    likeNo:'./images/like.png'
  },

  /**
   * 组件的方法列表
   */
  methods: {
    //点击爱心图标
    clickLike(e){
      //点击获取的id
      let likeIds = e.currentTarget.dataset.id;
      //获取喜欢组件的点赞类型
      let likeTypes = e.currentTarget.dataset.type
      //喜欢的状态
      let like = this.properties.isLike;
      //喜欢的数量
      let likeNum = this.properties.likeNum;
      //如果点击的时候为true 那么就减1 否则就加1
      likeNum = like?likeNum-1:likeNum+1
      //更新视图层
      this.setData({
        isLike:!like,
        likeNum
      })
      //点赞的类型
      let likeType = this.properties.isLike?'like':'cancel'
      //自定义事件
      this.triggerEvent('tapLike',{
        id:likeIds,
        likeType,
        type:likeTypes
      })
    }
  }
})
