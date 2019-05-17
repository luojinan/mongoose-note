const mongoose = require('./db.js')

// 定义表头
const UserSchema = mongoose.Schema({
  name:String,
  age:Number,
  status:Number
})

// 连接表格，数据库模型
const UserModel = mongoose.model('User',UserSchema)
// 暴露已连接的表格
module.exports = UserModel


