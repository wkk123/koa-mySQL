const jwt = require("jsonwebtoken");//导入安装好的jsonwebtoken模块
const secret = "chatjsonwebtoken";     // 设置秘钥
myjwt = {
//写一个生成token 的方法传入值和过期时间就能生成token
  generate(value, expires) {
    return jwt.sign(value, secret, { expiresIn: expires });
  },
//生成解密的办法 因为这个token 解密失败会阻断服务器 所以用trycath 来处理 成功返回数据 不成功返回false
  verify(token) {
    try {
      return jwt.verify(token, secret);
    } catch (error) {
      return false;
    }
  },
};

module.exports = myjwt;