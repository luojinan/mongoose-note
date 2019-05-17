// 引入已连接的表格
const UserModel = require('./model/user')


// 操作表格
/*UserModel.find({},(err,data)=>{
  if(err) console.log(err)
  else console.log('输出user数据'+data)
})*/
const user = new UserModel({
  name:'测试',
  age:12
})
user.save((err,data)=>{
  if(err) console.log(err)
  else console.log('成功创建数据'+data)
})