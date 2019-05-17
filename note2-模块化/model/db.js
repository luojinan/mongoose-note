// 引入mongoose模块
const mongoose = require('mongoose')
// 连接数据库(当没有的时候自动创建)
mongoose.connect('mongodb://127.0.0.1:27017/demo1',{ useNewUrlParser: true })
// 暴露已连接的数据库
module.exports = mongoose




