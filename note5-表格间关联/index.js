// 引入已连接表格
const UserModel = require('./model/user')
const TypeModel = require('./model/type')
const ArticleModel = require('./model/article')

// 操作表格
/*new ArticleModel({
  articleId:1,
  title:'文章1',
  UserId:1,
  typeId:1
}).save((err,data)=>{
  console.log(data)
})*/

ArticleModel.find({}).populate('typeId').exec((err,data)=>{
  if(err) console.log(err)
  else console.log('关联之后的文章数据'+data)
})
