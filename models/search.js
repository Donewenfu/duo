import {http} from '../utils/http-p'

class search extends http {
  //搜索书籍
  getBookSearch(data){
    return this.request({
      url:'book/search',
      data,
      ishowLoding:false
    })
  }
  //存储用户搜索成功以后的关键字
  setUserhistory(key){
    //先读取是否存在历史记录
    let historys = this.getUserhistory();
    if(historys.length>0){
      //判断历史数组中是否包含了此关键词？
      if(!historys.includes(key)){
        historys.push(key)
        wx.setStorageSync('historyData', historys)
      }
    }else{
      let history = [];
      history.push(key)
      wx.setStorageSync('historyData', history)
    }
  }
  //读取历史搜索缓存
  getUserhistory(){
    let result = wx.getStorageSync('historyData')?wx.getStorageSync('historyData'):[]
    return result
  }
}

export {search}