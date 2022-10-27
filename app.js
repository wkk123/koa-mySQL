// 导入koa
const Koa = require('koa');
const static = require("koa-static");  //静态路由模块  
const path = require("path");    //path处理地址模块
const bodyParser = require('koa-bodyparser');// 解析post传参模块
const indexRouter = require("./router/indexRouter");// 自己定义的路由模块 
const { createServer } = require("http");// 因为socket.io 用到http 中creareServer 方法

// 创建一个koa对象
const app = new Koa();
const httpServer = createServer(app.callback());   
//引入socketServer模块
const socketServer = require("./service/socketService");
// 把需要的httpServer传进去 这个是后面的方法 因为里面要用到httpServer 我就传了进去
socketServer(httpServer);


app.use(bodyParser());

// const Cors = require('koa-cors')
// app.use(Cors())

// 静态资源
app.use(static(path.join(__dirname, "public")));
// 路由
app.use(indexRouter.routes());


// const router = require('./router');

// // 调用router.routes()来组装匹配好的路由，返回一个合并好的中间件
// // 调用router.allowedMethods()获得一个中间件，当发送了不符合的请求时，会返回 `405 Method Not Allowed` 或 `501 Not Implemented`
// app.use(router.routes());
// app.use(router.allowedMethods({
// 	// throw: true, // 抛出错误，代替设置响应头状态
// 	// notImplemented: () => '不支持当前请求所需要的功能',
// 	// methodNotAllowed: () => '不支持的请求方式'
// }));

//监听端口
const port = 3000
app.listen(port,()=>{
	console.log(`启动成功,服务端口为:${port}`)
});