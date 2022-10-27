const loginRouter = require("koa-router");
const router = new loginRouter();
const controller = require("../controller/loginController");
// 访问/login 就指向/login.html页面
router.get("/", (cxt, next) => {
  cxt.redirect("/login.html");
});// 如果post  请求来了就传到 controller 模块中的find 方法 这个封装的方法
router.post("/", controller.find);

module.exports = router;