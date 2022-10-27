const indexRouter = require("koa-router");//
const loginRouter = require("./loginRouter");
const chatRouter = require("./chatRouter");

const router = new indexRouter(); //实例化路由模块

router.use("/login", loginRouter.routes(), loginRouter.allowedMethods());// 如果访问关于 /login 就进入这个
router.use("/", chatRouter.routes(), chatRouter.allowedMethods());// 如果访问 / 就走这个    allowedMethods（）可以很友好的告诉客户端服务端响应的是什么请求
module.exports = router; // 导出模块