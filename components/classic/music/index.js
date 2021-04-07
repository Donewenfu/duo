import {classBehaviors} from '../classic-beh'
//获取音频管理对象
let musics = wx.getBackgroundAudioManager();
Component({
  behaviors:[classBehaviors],
  /**
   * 组件的属性列表
   */
  properties: {
    //音乐链接
    musicSrc:String,
    //音频的标题
    musicTitle:String
  },

  /**
   * 组件的初始数据
   */
  data: {
    //播放开关
    openMusic:false,
    //开始播放图标
    playIcon:'./images/player@waitting.png',
    //暂停播放图标
    pauseIcon:'./images/player@playing.png'
  },

  /**
   * 组件的方法列表
   */
  methods: {
    clickplay(){
       if(!this.data.openMusic){
          //设置音频
          musics.src = this.properties.musicSrc;
          //设置音频的标题
          musics.title = this.properties.musicTitle;
          //设置播放按钮的状态
          this.setData({
            openMusic:true
          })
       }else{
         this.setData({
          openMusic:false
         })
         musics.pause()
       }
    },
    //判断当前播放的音乐是否是 很当前组件的音乐链接一致？
    isplay(){
      // musics.paused 返回true或者false
      if(musics.paused){
        this.setData({
          openMusic:false
        })
        return
      }
      if(musics.src==this.properties.musicSrc){
        this.setData({
          openMusic:true
        })
      }
    },
    //监听播放事件
    onPlayevent(){
      //监听音频播放事件
      musics.onPlay(()=>{
        this.isplay()
      })
      //监听音频暂停事件
      musics.onPause(()=>{
        this.isplay()
      })
      //监听自然结束事件
      musics.onEnded(()=>{
        this.isplay()
      })
      //监听音频暂停事件
      musics.onStop(()=>{
        this.isplay()
      })
    }
  },
  // 小程序生命周期
  lifetimes:{
    attached(){
     this.isplay()
     this.onPlayevent()
    }
  }
})
