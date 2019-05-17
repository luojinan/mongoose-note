// 引入已连接的表格
// const UserModel = require('./model/user')
// const TypeModel = require('./model/type')
const ArticleModel = require('./model/article')

// 操作表格
/*new TypeModel({
  typeId:1,
  type:'转载'
}).save((err,data)=>{
  console.log(data)
})*/

// 使用聚合管道，设置好比较多的参数，实现聚合
// 并可以同时在aggregate里进行查询
ArticleModel.aggregate([{
  $lookup:{
    from:'users',   //子项表格
    localField:'authorId',  //本表格id名
    foreignField:'userId', //子项表格id名
    as:'authorInfo'           //聚合到新的变量里
  },
  $lookup:{
    from:'types',   //子项表格
    localField:'typeId',  //本表格id名
    foreignField:'typeId', //子项表格id名
    as:'type'           //聚合到新的变量里
  },
}],(err,data)=>{
  if(err) console.log(err)
  else console.log(JSON.stringify(data))  //不转成json 的话 调控台只输出object
})