'use strict'
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const RolesPermissions = use('App/Models/RolesPermission')

class HasPermission {
  /**
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Function} next
   */
  async handle ({ response, auth }, next, properties) {
    const permission = await RolesPermissions
      .query()
      .where('role_id', auth.user.role_id)
      .where('permission_id', properties[0])
      .first()

    return !permission 
      ? response.unauthorized('Unauthorized') 
      : next()
  }
}

module.exports = HasPermission
