// 引入mongoose依赖包
const mongoose = require('mongoose')

const url = 'mongodb://127.0.0.1:27017/demo1'
// const db= mongoose.createConnection(url,{ useNewUrlParser: true })
mongoose.connect(url,{ useNewUrlParser: true })
const db = mongoose.connection
db.on('open',()=>{
  console.log('数据库连接成功')
})
db.on('error',()=>{
  console.log('数据库连接失败')
})
// 暴露已连接的数据库
// 暴露db对象无法使用数据库方法，db对象只用于连接监控方法
module.exports = mongoose