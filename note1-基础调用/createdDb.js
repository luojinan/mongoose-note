/**
 * 创建新数据库（根据自己已有数据库进行练习）
 */

// 引入mongoose模块
const mongoose = require('mongoose')

// 连接数据库(当没有的时候自动创建)
mongoose.connect('mongodb://127.0.0.1:27017/demo1',{ useNewUrlParser: true })

// 定义表头
// 编程规范：命名对应当前数据库的表格名并大写
const UserSchema = mongoose.Schema({
  name:String,
  age:Number,
  status:Number
})

// 定义表格，数据库模型
// 编程规范：命名对应当前数据库的表格名并大写
// 命名会对应数据库表格的小写+s的表格。如下会创建users表格
const User = mongoose.model('User',UserSchema)

const data = {
  name:'算了',
  age:20,
  status:0
}
// 通过表格的实例方法，save()存入数据
new User(data).save((err,data)=>{
  if(err) console.log(err)
  else console.log('成功存入数据'+data)
})

// 还有其他静态方法create()可以存入数据
/*User.create(data, (err,data)=>{
  if(err) console.log(err)
  else console.log('成功存入数据'+data)
})*/

// 其他增删盖改查方法，不一一示范