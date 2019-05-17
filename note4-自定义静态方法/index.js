// 引入已连接的表格
const ArticleModel = require('./model/article.js')

//操作数据库
/*new ArticleModel({
  id:5,
  title:'查找标题'
}).save((err,data)=>{
  if(err) console.log('添加数据失败')
  else console.log('添加数据成功'+data)
})*/

//调用自定义静态方法
ArticleModel.findByTitle('查找标题')