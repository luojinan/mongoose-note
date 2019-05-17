// 引入已连接数据库
const mongoose = require('./db')
// 设置表头
const TypeSchema = mongoose.Schema({
  typeId:{
    type:Number,
    default:0
  },
  type:{
    type:String,
    default:'原创'
  }
})
// 连接表格/创建表格
const TypeModel = mongoose.model('Type',TypeSchema)
// 暴露已连接表格
module.exports = TypeModel