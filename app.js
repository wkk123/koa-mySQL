// 导入koa
const Koa = require('koa');
const bodyParser = require('koa-bodyparser');

// 创建一个koa对象
const app = new Koa();

app.use(bodyParser());
// request.method可以获取请求方法。
// get，post或者其他类型(request对象被封在ctx内，所以也可以ctx.method获取)
app.use(async (ctx) => {
  if (ctx.url === '/' && ctx.method === 'POST') {
    ctx.body = ctx.request.body
  } else {
    // 其他请求显示404
    ctx.body = '<h1>404!</h1>'
  }
})

//监听端口
const port = 3000
app.listen(port);
console.log(`启动成功,服务端口为:${port}`)