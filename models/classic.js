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
  getpreOrnex(preOrnex,id,callback){
    this.request({
      url:'classic/'+id+'/'+preOrnex,
      success:(res)=>{
        callback(res)
      }
    })
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
}

export {classic}