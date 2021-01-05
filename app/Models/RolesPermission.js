'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class RolesPermission extends Model {
    roles() {
        return this.hasOne('App/Models/Roles')
    }

    permissions() {
        return this.hasOne('App/Models/Permissions')
    }
}

module.exports = RolesPermission
