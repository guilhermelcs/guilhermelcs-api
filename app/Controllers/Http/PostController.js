'use strict'

const Post = use('App/Models/Post')

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with posts
 */
class PostController {
	/**
	 * Show a list of all posts.
	 * GET posts
	 *
	 * @param {object} ctx
	 * @param {Request} ctx.request
	 * @param {Response} ctx.response
	 * @param {View} ctx.view
	 */
	async index({ request, response, view }) {
		const post = await Post.query().with('images').fetch()
		return post
	}

	/**
	 * Create/save a new post.
	 * POST posts
	 *
	 * @param {object} ctx
	 * @param {Request} ctx.request
	 * @param {Response} ctx.response
	 */
	async store({ request, response }) {
		const data = request.only(['user_id', 'title', 'content', 'description'])
		const post = await Post.create(data)

		return post
	}

	/**
	 * Display a single post.
	 * GET posts/:id
	 *
	 * @param {object} ctx
	 * @param {Request} ctx.request
	 * @param {Response} ctx.response
	 * @param {View} ctx.view
	 */
	async show({ params }) {
		const post = await Post.findOrFail(params.id)
		await post.load('images')
		return post
	}

	/**
	 * Update post details.
	 * PUT or PATCH posts/:id
	 *
	 * @param {object} ctx
	 * @param {Request} ctx.request
	 * @param {Response} ctx.response
	 */
	async update({ params, request }) {
		const post = await Post.findOrFail(params.id)
		const data = request.only('user_id', 'title', 'content', 'description')

		await post.merge(data)
		await post.save()

		return post
	}

	/**
	 * Delete a post with id.
	 * DELETE posts/:id
	 *
	 * @param {object} ctx
	 * @param {Request} ctx.request
	 * @param {Response} ctx.response
	 */
	async destroy({ params, request, response }) {
		const post = await Post.findOrFail(params.id)
		await post.delete()
		return response.status(200).send({ success: 'Data deleted' })
	}
}

module.exports = PostController
