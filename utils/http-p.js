import {config} from '../config.js'

class http {
  constructor(){
    
  }
  request({url,data={},method='GET'}){
    return new Promise((resolve,reject)=>{
      this._request(url,resolve,reject,data,method)
    })
  }
  _request(url,resolve,reject,data={},method='GET'){
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