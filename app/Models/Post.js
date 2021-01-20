'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Post extends Model {
    users() {
        return this.hasOne('App/Models/User')
    }
    
    comments() {
        return this.hasMany('App/Models/Comment')
    }
    
    images() {
        return this.hasMany('App/Models/Image')
    }
}

module.exports = Post
