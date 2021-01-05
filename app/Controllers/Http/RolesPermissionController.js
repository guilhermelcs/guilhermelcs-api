'use strict'

const RolesPermission = use('App/Models/RolesPermission')

class RolesPermissionController {
    async index() {
        const rolesPermission = await RolesPermission.all()
        return rolesPermission
    }

    async show({ params }) {
        const rolesPermission = await RolesPermission.findOrFail(params.id)
        return rolesPermission
    }

    async store({ request }) {
        const data = request.only(['role_id', 'permission_id'])
        const rolesPermission = await RolesPermission.create(data)

        return rolesPermission
    }

    async update({ params, request }) {
        const rolesPermission = await RolesPermission.findOrFail(params.id)
        const data = request.only('role_id', 'permission_id')

        await rolesPermission.merge(data)
        await rolesPermission.save()

        return rolesPermission
    }

    async destroy({ params, response }) {
        const rolesPermission = await RolesPermission.findOrFail(params.id)
        await rolesPermission.delete()
        return response.status(200).send({ success: 'Data deleted' })
    }
}

module.exports = RolesPermissionController
