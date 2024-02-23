import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()


const getAll = async () => {
    return await prisma.user.findMany()
}

const getOne = async (id) => {
    return await prisma.user.findUnique({where: {
        id
    }})
}

export default {getAll, getOne}