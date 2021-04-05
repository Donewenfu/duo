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
       }
      
    }
  },
  // 小程序生命周期
  lifetimes:{
    attached(){
     
     
    }
  }
})
