'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class RolesPermissionsSchema extends Schema {
  up () {
    this.create('roles_permissions', (table) => {
      table.increments()
      table
        .integer('role_id')
        .unsigned()
        .references('id')
        .inTable('roles')
      table
        .integer('permission_id')
        .unsigned()
        .references('id')
        .inTable('permissions')
      table.timestamps()
    })
  }

  down () {
    this.drop('roles_permissions')
  }
}

module.exports = RolesPermissionsSchema
