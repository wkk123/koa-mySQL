// router/index.js
const Router = require('koa-router')
const router = new Router()

// //接口函数
// class UserController {
//   // 新增一条数据
//   async getUserName(ctx) {
//     ctx.body = {
//       code: 200,
//       message: '叫我詹躲躲',
//       type: 'warning'
//     }
//   }
// }

// //实例
// const userController = new UserController()

// // 测试
// router.get('/test', userController.getUserName)


//用户
const UserController = require('../controller/UserController')

//用户注册
router.post('/register', UserController.register)
//用户信息登录
router.post('/login', UserController.login)

router.delete('/deleteUser', UserController.deleteUser)

router.put('/upDateUser', UserController.upDateUser)

router.post('/addUser', UserController.addUser)

module.exports = router