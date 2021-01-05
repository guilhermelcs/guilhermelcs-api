'use strict'

const Role = use("App/Models/Role")

class RoleController {
    async index() {
        const roles = await Role.all()
        return roles
    }

    async show({params}) {
        const role = await Role.findOrFail(params.id)
        return role
    }

    async store({request}) {
        const data = request.only(['name', 'description'])
        const role = await Role.create(data)
        return role
    }

    async update({request, params}) {
        const data = request.only(['name', 'description'])

        const role = await Role.findOrFail(params.id)
        role.merge(data)

        await role.save()
        return role
    }

    async destroy({params, response}) {
        const role = await Role.findOrFail(params.id)
        if(params.id === 2 ) {
            return response.status(401).send({ error: 'Not authorized' })
        }
        await role.delete()
        return response.status(200).send({ success: 'Data deleted' })
    }
}

module.exports = RoleController
