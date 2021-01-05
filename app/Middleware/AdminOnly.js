'use strict'
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

class AdminOnly {
  /**
   * @param {object} ctx
   * @param {Function} next
   */
  
  async handle ({ auth }, next) {
    const { HttpException } = use('@adonisjs/generic-exceptions')
    if(auth.user.role_id === 2)
      await next()
    else
      throw new HttpException('Unauthorized', 401)
  }
}

module.exports = AdminOnly