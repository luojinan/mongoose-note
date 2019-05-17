// 引入已连接的数据库
const mongoose = require('./db.js')

// 设置表头
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
  },
  id:{
    type:Number,
    require:true
  }
})

// 设置自定义静态方法
// 箭头函数会出现this指向的问题
ArticleSchema.statics.findByTitle=function(title){
  // 调用this为model表格，此处this.find()是调用内置方法
  // {id}实际上是匹配条件对象 {'id':id}
  // this.find({title},(err,data)=>{
  //   cb(err,data)
  // })
  return this.find({title},(err,data)=>{
    if(err) console.log(err)
    else console.log(data)
  })
  // console.log(this) //undefind或者 this.find() is not a function
}

// 连接表格/创建表格
const ArticleModel = new mongoose.model('Article',ArticleSchema)
//暴露已连接的表格
module.exports = ArticleModel