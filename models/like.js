import {http} from '../utils/http'

class like extends http {
  clickLike(type,art_id,clickType,callback){
    let clickTypes = clickType=='like'?'like':'like/cancel'
    this.request({
      url:clickTypes,
      method:'POST',
      data:{
        art_id,
        type
      },
      success(res){
        callback && callback(res)
      }
    })
  }
}

export {like}