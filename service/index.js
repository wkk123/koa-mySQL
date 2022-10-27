const mysql = require("mysql2"); 
// 创建一个对象 导出这个对象就好 方法写在这个大对象中
const service = {
//接收传来的数据
  find(username, password) {
//因为这个找不到也会报错阻止浏览器运行 所以用到了 trycath
    try {//创建连接 因为这个是异步的所以用到了promise()
      const promisePool = mysql.createPool(getDBConfig()).promise();
　　　　　　//sql 语句查询
      return promisePool.query(
        `select username from user where username=? && password=?`,
        [username, password]// 这个是传参 对应的是里面的？号
      );
    } catch (error) {//找不到就返回 【】
      return [];
    }
  },
};

module.exports = service;
// 定义连接数据
function getDBConfig() {
  // return {
  //   user: "root", //账号
  //   password: "12345678", //密码
  //   database: "wkk_test", //数据库
  //   host: "localhost", //服务器地址
  //   port: 3306, //数据库端口
  //   timezone: '08:00'
  // };
  return {
    host: "127.0.0.1",//地址
    user: "root",//用户名字
    port: "3306",// 端口 一般都是3306 如果换了就换这个端口就行
    password: "",// 密码因为我是本地的就没有设置密码
    database: "chat", // 数据库名字
    connectionLimit: 1,//连接池
  };
}
