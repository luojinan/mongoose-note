const UserModel = require('./model/user')
const ArticleModel = require('./model/article')

UserModel.find({},(err,data)=>{
  if(err) console.log(err)
  else console.log('users表格的数据'+data)
})

ArticleModel.find({},(err,data)=>{
  if(err) console.log(err)
  else console.log('articles表格的数据'+data)
})



