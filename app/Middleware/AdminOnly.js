'use strict'
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

class AdminOnly {
  /**
   * @param {object} ctx
   * @param {Function} next
   */
  
  async handle ({ auth, response }, next) {
    const { HttpException } = use('@adonisjs/generic-exceptions')
    if(auth.user.role_id === 2)
      await next()
    else
      return response.unauthorized('Admin permissions required')
  }
}

module.exports = AdminOnly