'use strict'

const User = use("App/Models/User")
const RolesPermission = use("App/Models/RolesPermission")
const Role = use("App/Models/Role")
const Permission = use("App/Models/Permission")

/*
|--------------------------------------------------------------------------
| RolesPermissionSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

class RolesPermissionSeeder {
	async run() {
		//Role 1
		await Role.create({
			name: 'Admin',
			description: 'Admin do blog'
		})

		//Role 2
		await Role.create({
			name: 'Subscriber',
			description: 'Inscrito do blog'
		})

		await User.create({
			username: 'Guilherme Lucas',
			email: 'guilherme.evandf@gmail.com',
			password: '12345',
			role_id: 2
		})

		await User.create({
			username: 'Mateus Pires',
			email: 'mateuspires@gmail.com',
			password: '12345',
			role_id: 1
		})

		await User.create({
			username: 'Davi Zao',
			email: 'davizao@gmail.com',
			password: '12345',
			role_id: 1
		})

		//Permission 1
		await Permission.create({
			name: 'Criar Post',
			description: 'Pode criar uma publicao'
		})

		//Permission 2
		await Permission.create({
			name: 'Editar Post',
			description: 'Pode editar uma publicao'
		})

		//Permission 3
		await Permission.create({
			name: 'Excluir Post',
			description: 'Pode deletar uma publicao'
		})

		//Permission 4
		await Permission.create({
			name: 'Visualizar Post',
			description: 'Pode ver uma publicao'
		})

		//Permission 5
		await Permission.create({
			name: 'Visualizar Todos os Posts',
			description: 'Pode ver todas as publicoes'
		})

		await Permission.create({
			name: 'Criar Comentarios',
			description: 'Pode criar comentarios'
		})

		await RolesPermission.create({
			role_id: 1,
			permission_id: 1,
		})
		await RolesPermission.create({
			role_id: 1,
			permission_id: 2,
		})
		await RolesPermission.create({
			role_id: 1,
			permission_id: 3,
		})
		await RolesPermission.create({
			role_id: 1,
			permission_id: 4,
		})
		await RolesPermission.create({
			role_id: 1,
			permission_id: 5,
		})
		await RolesPermission.create({
			role_id: 1,
			permission_id: 6,
		})

		await RolesPermission.create({
			role_id: 2,
			permission_id: 4,
		})

		await RolesPermission.create({
			role_id: 2,
			permission_id: 5,
		})
	}
}

module.exports = RolesPermissionSeeder
