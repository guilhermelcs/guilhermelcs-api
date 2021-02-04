'use strict'

const Permission = use('App/Models/Permission')

class PermissionController {
    async index() {
        const permission = await Permission.all()
        return permission
    }

    async show({ params }) {
        const permission = await Permission.findOrFail(params.id)
        return permission
    }

    async store({ request }) {
        const data = request.only(['name', 'description'])
        const permission = await Permission.create(data)

        return permission
    }

    async update({ params, request }) {
        const permission = await Permission.findOrFail(params.id)
        const data = request.only('name', 'description')

        await permission.merge(data)
        await permission.save()

        return permission
    }

    async destroy({ params, response }) {
        const permission = await Permission.findOrFail(params.id)
        await permission.delete()
        return response.status(200).send({ success: 'Data deleted' })
    }
}

module.exports = PermissionController
