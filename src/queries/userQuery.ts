import {Prisma, PrismaClient} from "@prisma/client";

const prisma = new PrismaClient();

const findUserQuery = async ({ email = null, username = null } : { email?: string | null, username?: string | null }) => {
    try {
      const user = await prisma.users.findFirst({
        where: {
          OR: [
            { email },
            { username },
          ],
        },
      });
  
      return user;
    } catch (err) {
      throw err;
    }
};

export {findUserQuery};