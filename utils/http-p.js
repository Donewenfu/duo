import {config} from '../config.js'

class http {
  constructor(){
    
  }
  request({url,data={},method='GET',ishowLoding=true}){
    return new Promise((resolve,reject)=>{
      this._request(url,resolve,reject,data,method,ishowLoding)
    })
  }
  _request(url,resolve,reject,data={},method='GET',ishowLoding=true){
    if(ishowLoding){
      wx.showLoading({
        title: '数据加载中',
      })
    }
    wx.request({
      url: config.baseUrl+url,
      data:data,
      header:{
        'appkey':config.appkey,
        'content-type':'application/json'
      },
      method:method,
      success:(res)=>{
        let statusCode = res.statusCode.toString();
        if(statusCode.startsWith('2')){
          resolve(res.data)
          wx.hideLoading()
        }else{
          reject()
          wx.showToast({
            title: '数据请求错误,稍后再试~',
            icon:'none',
            duration:2000
          })
        }
      },
      fail:(err)=>{
        reject()
        wx.showToast({
          title: '数据请求错误,稍后再试~',
          icon:'none',
          duration:2000
        })
      }
    })  
  }
}

export {http}