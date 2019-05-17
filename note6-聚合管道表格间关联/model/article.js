// 引入已连接数据库
const mongoose = require('./db')
// 设置表头
const Schema = mongoose.Schema
const ArticleSchema = mongoose.Schema({
  articleId:{
    type:Number,
    require:true,
    default:0
  },
  title:{
    type:String,
    default:'默认标题'
  },
  content:{
    type:String,
    default:'这是默认内容，请输入你的内容'
  },
  authorId:{
    type:Number,
    default:0
  },
  typeId:{
    type:Number,
    default:0
  }
})
// 连接表格/创建表格
const ArticleModel = mongoose.model('Article',ArticleSchema)
// 暴露已连接表格
module.exports = ArticleModel