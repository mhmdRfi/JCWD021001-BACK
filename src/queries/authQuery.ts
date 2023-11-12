import {Prisma, PrismaClient} from "@prisma/client";

const prisma = new PrismaClient();

const registerQuery = async (username: string, email: string, password: string) => {
    try{
        const result = await prisma.users.create({
        data: { 
            username,
            email,
            password,
            roleId: 2
           },
    })
        return result;
    } catch (err){
        throw err
    }
}

export {registerQuery}