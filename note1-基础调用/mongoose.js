/**
 * 下面是连接已有数据库，再model表格连接已有数据库的表格（根据自己已有的数据库进行练习）
 * 当本地没有数据库或表格的时候就会自动创建
 * 但是下面的所有操作其实都没有写入数据库，所以并不能创建
 **/

// 引入mongoose模块
const mongoose = require('mongoose')

// 连接数据库
// 数据库的地址可以，打开cmd输入mongo查看,后面跟/数据库名
mongoose.connect('mongodb://127.0.0.1:27017/try',{ useNewUrlParser: true })

// 定义表头
// 编程规范：命名对应当前数据库的表格名并大写
const UserSchema = mongoose.Schema({
  // name:String,
  // age:Number,
  // status:Number
  a:Number
})

// 定义表格，数据库模型
// 编程规范：命名对应当前数据库的表格名并大写
// 命名会对应数据库表格的小写+s的表格。如下会对应users表格
const User = mongoose.model('try',UserSchema,'try')
console.log('测试一下')
// 调用表格内置方法
// 查询表格数据,不写匹配对象，代表所有数据
User.find({},(err,data)=>{
  if (err) console.log(err)
  else console.log('try表格里的数据有'+data)
})
