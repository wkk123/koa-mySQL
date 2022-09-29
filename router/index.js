// router/index.js
const Router = require('koa-router')
const router = new Router()

//接口函数
class UserController {
    // 新增一条数据
    async getUserName(ctx) {
        ctx.body = {
            code: 200,
            message: '叫我詹躲躲',
            type: 'warning'
        }
    }
}

//实例
const userController = new UserController()

// 测试
router.get('/test', userController.getUserName)

module.exports = router