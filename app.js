const Koa = require('koa')

const app = new Koa()

// // 中间件
// const hello = () => {
//   console.log('hello I\'m koa')
// }

// // 注册
// app.use(hello)

// ctx 上下文
// next 下一个中间件函数
// 打印顺序：1 3 4 2
app.use((ctx, next) => {
  console.log(1)
  next()
  console.log(2)
})

app.use((ctx, next) => {
  console.log(3)
  next()
  console.log(4)
})

app.listen(3000)