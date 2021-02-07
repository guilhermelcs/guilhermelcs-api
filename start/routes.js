'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', () => {
  return { greeting: 'Hello world in JSON' }
})

Route.post('/users', 'UserController.create')
Route.post('/sessions', 'SessionController.create')

Route.resource('/roles', 'RoleController')
  .apiOnly()
  .middleware('auth')

Route.resource('/permissions', 'PermissionController')
  .apiOnly()
  .middleware('auth')

Route.resource('/roles_permissions', 'RolesPermissionController')
  .apiOnly()
  .middleware('auth')

Route.post('/posts', 'PostController.store')
  .middleware('auth', 'hasPermission:1')

Route.patch('/posts/:id', 'PostController.update')
  .middleware('auth', 'hasPermission:2')

Route.delete('/posts/:id', 'PostController.destroy')
  .middleware('auth', 'hasPermission:3')

Route.get('/posts/:id', 'PostController.show')

Route.get('/posts', 'PostController.index')

Route.post('posts/:id/images', 'ImageController.store')
  .middleware('auth')

Route.get('images/:path', 'ImageController.show')
  .middleware('auth', 'hasPermission:3')

Route.resource('/comments', 'CommentController')
  .apiOnly()
  .middleware('auth')