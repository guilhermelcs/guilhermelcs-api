'use strict'

const Helpers = use('Helpers')
const Post = use('App/Models/Post')
const Image = use('App/Models/Image')

class ImageController {
    async store({params, request}) {
        const post = await Post.findOrFail(params.id)

        const images = request.file('image', {
            types: 'images',
            size: '2mb'
        })

        await images.moveAll(Helpers.tmpPath('uploads'), file => ({
            name: `${Date.now()}-${file.clientName}`
        }))

        if (!images.movedAll()) {
            return images.errors()
        }

        await Promise.all(
            images
              .movedList()
              .map(image => post.images().create({ path: image.fileName }))
          )
    }

    async show ({ params, response }) {
        return response.download(Helpers.tmpPath(`uploads/${params.path}`))
    }
}

module.exports = ImageController
