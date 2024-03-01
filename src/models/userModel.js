import { PrismaClient } from '@prisma/client'
import { z } from "zod";

const prisma = new PrismaClient()
const userSchema = z.object({
    id:z.number(),
    name:z.string().min(3).max(200),
    email:z.string().email(),
    avatar:z.string().url().max(1000)
})

const validateUserToCreate = (user) => {
    
    const partialUserSchema = userSchema.partial({id:true})
    return partialUserSchema.safeParse(user)
}

const getAll = async () => {
    return await prisma.user.findMany()
}

const getOne = async (id) => {
    return await prisma.user.findUnique({
        where: {
            id
        }
    })
}

const create = async (user) => {
    return await prisma.user.create({
        data: user
    })
}

const remove = async (id) => {
    return await prisma.user.delete({
        where: {
            id
        }
    })
}

const edit = async (user) => {
    return await prisma.user.update({
        where: {
            id: user.id
        },
        data: user
    })
}


export default {getAll, getOne, create, remove, edit, validateUserToCreate}