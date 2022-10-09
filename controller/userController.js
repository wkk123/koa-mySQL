// 用户注册
const User = require('../model/userModel')

class UserController {
	// 用户注册  数据添加
	async register(ctx) {
		let { name, tel, password } = ctx.request.body
		console.log('name, tel, password', name, tel, password)
		const names = await User.getUser(name) //用户名是否重复
		const tels = await User.getTel(tel) //手机号是否重复
		console.log('names', names, tels)
		if (tels.length > 0) {
			ctx.body = { type: 'warning', message: '该手机号已注册' }
		} else {
			if (names.length > 0) {
				ctx.body = { type: 'error', message: '用户名已存在' }
			} else {
				await User.insert(name, tel, password)
				ctx.body = { type: 'success', code: 0, message: '注册成功' }
			}
		}
	}
	// 登录 数据获取
	async login(ctx) {
		let tel = ctx.request.body.tel;
		let password = ctx.request.body.password;
		const res = (await User.getTel(tel))[0];
		if (res) {
			if (res.password == password) {
				ctx.body = {
					code: 0,
					data: {
						name: res.name,
						tel: res.tel
					},
					message: '登录成功',
					type: 'success'
				}
			} else {
				ctx.body = { type: 'error', message: '用户名或密码不正确' }
			}
		} else {
			ctx.body = { data: ctx, type: 'error', message: '用户名不存在' }
		}
	}
	// 测试删除
	async deleteUser(ctx) {
		let id = ctx.request.body.id;
		const res = await User.deleteUser(id);
		// console.log('res', res);
		if (res) {
			// console.log('res',res,'成功')
			ctx.body = {
				code: 0,
				message: '操作成功',
				type: 'success'
			}
		} else {
			ctx.body = { data: ctx, type: 'error', message: '请求失败' }
		}
	}

	// 测试更新
	async upDateUser(ctx) {
		// console.log('ctx',ctx);
		// console.log('ctx.request.body', ctx.request.body);
		let { name = '', id= '' } = ctx.request.body;
		// console.log('name, id', name, id);
		const res = await User.upDateUser(name, id);
		// console.log('res', res);
		if (res) {
			// console.log('res',res,'成功')
			ctx.body = {
				code: 0,
				message: '操作成功',
				type: 'success'
			}
		} else {
			ctx.body = { data: ctx, type: 'error', message: '请求失败' }
		}
	}

	// 测试添加数据
	async addUser(ctx) {
		let { name, tel, password } = ctx.request.body;
		// const res = 
		await User.addUser(name, tel, password);
		// console.log('res', res);
		// if (res) {
		// 	// console.log('res',res,'成功')
		// 	ctx.body = {
		// 		code: 0,
		// 		message: '操作成功',
		// 		type: 'success'
		// 	}
		// } else {
		// 	ctx.body = { data: ctx, type: 'error', message: '请求失败' }
		// }
	}
}
module.exports = new UserController()
