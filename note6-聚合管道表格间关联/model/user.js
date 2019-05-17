// 引入已连接数据
const mongoose = require('./db')
//设置表头
const UserSchema = mongoose.Schema({
  userId:{
    type:Number,
    require:true
  },
  name:{
    type:String,
    default:'名字',
    trim:true,      //去除前后空格
  },
  age:{
    type:Number,
    default:0,
    max:100,    //最大值为100
    min:0       //最小值为0
  },
  status:{
    type:Number,
    default:0,
    // enum:[0,1,2]  // 枚举值，只能用在string，因此这里不能用
  }
})
// 连接表格/创建表格
const UserModel = mongoose.model('User',UserSchema)
// 暴露已连接表格
module.exports = UserModel