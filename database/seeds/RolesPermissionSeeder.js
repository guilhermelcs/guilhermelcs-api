'use strict'

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
  async run () {
    await Role.create({
      name: 'Subscriber',
      description: 'Inscrito do blog'
    })

    await Role.create({
      name: 'Admin',
      description: 'Admin do blog'
    })

    await Permission.create({
      name: 'Criar Post',
      description: 'Pode criar publicacoes'
    })
    
    await Permission.create({
      name: 'Criar Comentarios',
      description: 'Pode criar comentarios'
    })

    await RolesPermission.create({
      role_id: 1,
      permission_id: 2,
    })
    
    await RolesPermission.create({
      role_id: 2,
      permission_id: 1,
    })
    
    await RolesPermission.create({
      role_id: 2,
      permission_id: 2,
    })
  }
}

module.exports = RolesPermissionSeeder
