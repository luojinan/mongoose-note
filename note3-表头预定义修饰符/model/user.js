// 引入已连接的数据库
const mongoose = require('./db.js')

// 定义表头
const UserSchema = mongoose.Schema({
  name:{
    type:String,
    default:'名字',
    require:true,   //是否必传  
    trim:true,      //去除前后空格
    index:true,     //创建索引
    maxlength:12,   //字符串长度最大值
    minlength:6,    //字符串长度最小值
    // unique:true     //创建唯一索引
    set(old){
      if(old.length<11) return old+'1'
      else return old
    }
    //set和validate验证器，有什么区别
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

// 连接表格
const UserModel = mongoose.model('User',UserSchema)

//暴露已连接的表格
module.exports = UserModel