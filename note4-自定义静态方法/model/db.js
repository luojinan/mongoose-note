// 引入mongoose依赖包
const mongoose = require('mongoose')
// 连接数据库
const url = 'mongodb://127.0.0.1:27017/demo1'
mongoose.connect(url,{useNewUrlParser: true})

// 设置监听连接的对象
const db = mongoose.connection
db.on('open',()=>{
  console.log('连接成功')
})
db.on('err',()=>{
  console.log('连接失败，请重试')
})

// 暴露已连接的数据库
module.exports = mongoose