const chatRouter = require("koa-router");

const router = new chatRouter();
// 访问/chat 就返回 /chat.html 页面
router.get("/", (cxt, next) => {
  cxt.redirect("/chat.html");
});

module.exports = router;