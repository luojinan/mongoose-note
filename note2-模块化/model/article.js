const mongoose = require('./db.js')
//定义表头
const ArticleSchema = mongoose.Schema({
  title:{
    type:String,
    default:'默认标题'
  },
  author:{
    type:String,
    default:'作者'
  },
  content:{
    type:String,
    default:'这是默认内容，请输入你的内容'
  }
})
//连接表格/创建表格
const ArticleModel = new mongoose.model('Article',ArticleSchema)

module.exports = ArticleModel