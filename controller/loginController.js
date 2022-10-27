// const service = require("../service/loginService");//导入模块主要用来去数据库查找
const service = require("../service/index");//导入模块主要用来去数据库查找
const jwt = require("../uilt/JWT");// 这个主要用来加密生成token 方法在下面有说明
const controller = {
  async find(cxt, next) {// 定义响应给服务器的函数
    const { password, username } = cxt.request.body;// 把数据解构出来
    // 去数据库查找
    let [data] = await service.find(username, password);// 去service模块中去查找数据 等待数据返回 这里用到了 async await 解决异步问题
    if (data.length) {//返回的是数组 如果找到到了length就不为0
      let token = jwt.generate(data[0], "1d"); // 利用封装的方法 传入数据生成token
      cxt.set("Authorization", token);//设置响应头字段为Authorization 给前端返回token 
      cxt.body = { OK: 1 };// 返回前端一个 ok:1
    } else {// 不成功就返回一个ok:0
      cxt.body = { OK: 0 };
    }
  },
};
module.exports = controller;