import {http} from '../utils/http'

class classic extends http{
  //获取最新一期
  getlatestData(callback){
    this.request({
      url:'classic/latest',
      success:(res)=>{
        callback(res)
        //最新的id存储在本地
        wx.setStorageSync('classicId', res.index)
      }
    })
  }
  
  //获取上一期下一期
  getpreOrnex(preOrnex,index,callback){
    let keys = preOrnex=='next'?this._getkey(index+1):this._getkey(index-1);
    //查看缓存中时候有数据
    let localStorageData = wx.getStorageSync(keys);
    if(!localStorageData){//没有缓存需要api请求
      this.request({
        url:'classic/'+index+'/'+preOrnex,
        success:(res)=>{
          callback(res)
          wx.setStorageSync(keys,res)
        }
      })
    }else{
      callback(localStorageData)
    }
    
  }

  //是否为最新一期
  isFirst(index){
    //参数 接受index
    //获取存储在本地存储中的index
    let latestIndex = wx.getStorageSync('classicId')
    if(index==latestIndex){
      return false
    }else{
      return true
    }
  }
  //判断是否已经到第一期
  isLast(index){
    if(index==1){
      return false
    }else{
      return true
    }
  }

  //转换key
  _getkey(index){
    let keys = 'classic-'+index;
    return keys
  }
}

export {classic}