// model/userModel.js

const { query } = require('../sql/query')
class UserModel {
	//获取用户
	async getUser(name) {
		return await query(`SELECT * FROM userinfo WHERE name = '${name}'`)
	}
	//获取用户手机号
	async getTel(tel) {
		return await query(`SELECT * FROM userinfo WHERE tel = '${tel}'`)
	}
	//用户注册
	async insert(name, tel, password) {
		return await query(`INSERT INTO userinfo(name, tel, password) VALUES('${name}', '${tel}', '${password}')`)
	}

	//删除用户
	async deleteUser(id) {
		return await query(`DELETE FROM userinfo WHERE id=?`,[id])
	}
	//修改用户
	async upDateUser(name,id) {
		console.log('name', name, 'id',id)
		return await query(`UPDATE userinfo SET name=? WHERE id=?`,[name, id])
	}

	//添加用户
	async addUser(name, tel, password) {
		return await query(`INSERT INTO userinfo SET ?`,{name, tel, password})
	}
}
module.exports = new UserModel()

// SQL 语句

// const QUERY_SQL = `SELECT * FROM t_user`;  //查
// const INSERT_SQL = `INSERT INTO t_user SET ?`;  //增
// const UPDATE_SQL = `UPDATE t_user SET username=? WHERE id=?`;  //改
// const DELETE_SQL = `DELETE FROM t_user WHERE id=?`;  //删