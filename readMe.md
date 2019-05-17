
# mongoose简易操作方法手册

[TOC]

> `mongoose`是`nodejs异步环境`下对`mongodb(关系型数据库)`进行便捷操作的对象模型工具。只能用于**nodejs**

**使用命令行cmd找到本机数据库的地址**
![dd03da4115b2515311b3448c28758437.png](en-resource://database/856:1)@w=500
**使用命令行cmd进入数据库并查看数据**
 ![687b188a4bc5fec9d0e7d811bbaba9e0.png](en-resource://database/858:1)
 
  **本地数据库的结构分析**
 - 本地数据库mongodb地址
 - mongodb下所有的数据库
 - 一个数据库里所有的数据库表格
 - 一个表格里的一个表头和所有的行
 ![fbbed47a0da71fd2d83034f2578419ac.png](en-resource://database/860:1)@w=500
 **命令行查看数据库表格信息**
 ![91cb3ea2957c7f518fbcae8f8e2e851e.png](en-resource://database/862:1)@w=500
 ## 一、mongoose基础
[mongoose文档](https://segmentfault.com/a/1190000012095054#articleHeader5)
- 引入数据库
```js
import mongoose from 'mongoose'
```
- 连接数据库
```js
const url = 'mongodb://127.0.0.1:8888/test'
const db = mongoose.createConnection(url,{ useNewUrlParser: true })

// 或者直接连接
mongoose.connect(url,{ useNewUrlParser: true })
const db = mongoose.connection
```
- mongoose.createConnection()和mongoose.connect()区别
如果你的app只用到一个数据库，你应该使用 mongoose.connect
如果你还需要连接其他数据库，使用mongoose.createConnection
一旦连接，Connection对象会触发open事件
如果你使用 mongoose.connect, Connection对象就是默认的 mongoose.connection
而使用 mongoose.createConnection 返回值就是 Connection
- 监听连接情况（错误处理）
```js
db.on('error' , err=>{
console.log(err)
})
db.once('open',()=>{
console.log('mongodb://127.0.0.1:8888/test is connected successfully')
})
```
- 创建表头
```js
const testSchema = new mongoose.Schema({
test:{
type: String,
default: '默认值'
}
})
```
## 自定义表头方法
- 表头添加mongoose实例方法
> `this.model('mongoose')`这个是什么
> 等同于`this.find( { id } )`
```js
testSchema.methods.findbyId = (id,callback)=>{
return this.model('mongoose').find({"id":id} , callback)
}
```
- 表头添加mongoose静态方法
> 与实例方法的区别是静态方法在Model层就能使用？
```js
testSchema.statics.findbyId = (id,callback)=>{
return this.find({id} , callback)
}
```
## 内置表格方法
- 创建表格(空表格后期写入数据、或者初始化有内容的表格)
```js
const testModel = db.model('test',testSchema)
```
---
### 增
> save()
created()
inserMany()
- 增（基于表格实例）
> 通过`new Model1()`创建的表格testNew，必须通过`save()`方法，才能将创建的文档保存到数据库的集合中，集合名称为模型名称的小写复数版
```js
const data = {
id: 1,
type: 'test'
}
// testModel是刚刚创建的表格
// 直接new加入数据进去，并保存更新表格
const testNew = new testModel(data)
testNew.save( ( err,data )=>{
if(err) console.log(err)
else console.log('save OK'+data)
})
// 等同于链式写法
new testModel(data).save(
// 错误处理...
)
```
- 增（基于表格）
```js
const data = {
id: 1,
type: 'test'
}
// 使用刚刚创建的表格内置方法，加入数据进去，可多个data
testModel.create(data, (err,data)=>{
if(err) console.log(err)
else console.log(data)
})
// 使用内置静态方法insertMany()
testModel.insertMany([data1,data2],()=>{
// 回调函数-错误处理或成功反馈
})
```
---
### 删
> 参数data是整条完整的数据，正常项目是先用查找在用删除的
```js
const data = {name: '测试' }
testModel.remove( data, (err)=>{
if(err) console.log(err)
else console.log('delect OK')
})
```
---
### 查
> find()
findOne()
findById()
- 查（基于实例方法）
> 实例里面为什么要写一个空对象
```js
const testNew = new testModel( {} )
testNew.findById( 'id',(err,data)=>{
if(err) console.log(err)
else console.log(data)
})
```
- 查（基于静态方法）
> 需要给表头添加了静态方法才能使用？
```js
testModel.findbyId( 'id',(err,data)=>{
if(err) console.log(err)
else console.log(data)
})
```
- 查（原生）
> 用来查找所有数据，和写死的状态
```js
const try1 = { id = 1 }
const try2 = { type = 'test' }
testModel.find( try1,try2,(err,data)=>{
if(err) console.log(err)
else console.log(data)
})
```
---
### 改
> options有什么用，查找数据然后修改，都是不需要完整写入的吗
> $set怎么知道我是整个替换那个参数还是整个换掉还是添加那个参数
> 或者说是，根据表头来做操作的，那就不可能添加参数，只能修改了，增也只能增表头的数据
```js
const old = { id: 1}
const update = { $set: { age: 20 } }
const options = { upsert: true }
testModel.update( old, update, options, (err)=>{
if(err) console.log(err)
else console.log('update OK')
})
```
## 二、模块化数据库项目
> 把连接数据库抽出来
> 把引用表格抽出来（表头，表格）--此处自定义静态方法
> 引用表格文件（可多个），直接用.连接符

 ![9796116d5df5610f4536131d3c2c0762.png](en-resource://database/866:1)@w=500
 ![c8847288c40d2048245de1b17aee279d.png](en-resource://database/864:1)@w=500
> **db.js**
 ![a018ba05642b69b51f83886608c525ba.png](en-resource://database/868:1)@w=500
 
 > **user.js**
 ![f49abf15c6dd22d2d06f56aa02f5aaf5.png](en-resource://database/870:1)@w=500
 
 > **app.js**
 ![34f001256ca81cc910dbe56a6d114262.png](en-resource://database/872:1)@w=500
 
 ## 三、多个表格聚合