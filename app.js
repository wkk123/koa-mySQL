// 导入koa
const Koa = require('koa');
const bodyParser = require('koa-bodyparser');

// 创建一个koa对象
const app = new Koa();

app.use(bodyParser());
// request.method可以获取请求方法。
// get，post或者其他类型(request对象被封在ctx内，所以也可以ctx.method获取)
// app.use(async (ctx) => {
//   if (ctx.url === '/' && ctx.method === 'POST') {
//     ctx.body = ctx.request.body
//   } else {
//     // 其他请求显示404
//     ctx.body = '<h1>404!</h1>'
//   }
// })

// const Router = require('koa-router'); // 引入koa-router
// const router = new Router(); // 创建路由，支持传递参数


// // 指定一个url匹配
// router.get('/', async (ctx) => {
//     ctx.type = 'html';
//     ctx.body = '<h1>hello world!</h1>';
// })

// // 指定一个url匹配
// router.get('/test', async (ctx) => {
//   ctx.type = 'html';
//   ctx.body = '<h1>hello world!</h1>';
// })
// router.get("/user", async (ctx) => {
//   ctx.body = '叫我詹躲躲';
// })

const router = require('./router');

// 调用router.routes()来组装匹配好的路由，返回一个合并好的中间件
// 调用router.allowedMethods()获得一个中间件，当发送了不符合的请求时，会返回 `405 Method Not Allowed` 或 `501 Not Implemented`
app.use(router.routes());
app.use(router.allowedMethods({ 
    // throw: true, // 抛出错误，代替设置响应头状态
    // notImplemented: () => '不支持当前请求所需要的功能',
    // methodNotAllowed: () => '不支持的请求方式'
}));

//监听端口
const port = 3000
app.listen(port);
console.log(`启动成功,服务端口为:${port}`)