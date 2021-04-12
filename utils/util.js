//生成随机字符串

var randomString = function(n){
  var str = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  var domstr = '';
  for(var i = 0;i<=n;i++){
    var domnum = Math.ceil(Math.random()*35);
    domstr+=str[domnum]
  }
  return domstr
}

export {
  randomString
}