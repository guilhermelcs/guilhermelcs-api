'use strict'

const Post = use('App/Models/Post')
const Comment = use('App/Models/Comment')

/*
|--------------------------------------------------------------------------
| PostSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

class PostSeeder {
  async run () {
    await Post.create({
      user_id: 1,
      title: 'Hello World!',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean congue metus sed magna tempus, a venenatis nibh commodo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis vehicula elit vel velit malesuada, a molestie est faucibus. Vestibulum pulvinar accumsan purus et tincidunt. Donec vestibulum nisi nulla. Phasellus aliquam justo congue nibh scelerisque euismod. Donec vel imperdiet enim. Suspendisse consequat consequat ligula, a cursus nulla tincidunt et. Suspendisse et neque porttitor mauris facilisis vulputate. Maecenas sed felis placerat magna viverra dictum condimentum quis arcu. Cras vestibulum porta nibh quis imperdiet. Donec augue augue, bibendum nec tortor nec, convallis commodo nisi. Pellentesque vitae justo purus. Duis eu nisi ante. Nulla elementum finibus arcu, nec scelerisque magna rutrum sit amet. Etiam non ligula venenatis, blandit magna ut, iaculis risus.',
      description: 'Primeiro post do blog, neste post você verá como será a estrutura de postagens do blog, e como irá funcionar etc, etc, etc.'
    })
    await Comment.create({
      user_id: 2,
      post_id: 1,
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean congue metus sed magna tempus, a venenatis nibh commodo.',
      likes: 13
    })
    await Comment.create({
      user_id: 3,
      post_id: 1,
      parent_comment_id: 1,
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean congue metus sed magna tempus, a venenatis nibh commodo.',
      likes: 13
    })
  }
}

module.exports = PostSeeder
