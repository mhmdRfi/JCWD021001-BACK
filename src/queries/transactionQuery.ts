import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const addProductToCartQuery = async (id : number) => {
  try {
    const result = await prisma.products.findUnique({
      where: { id : id },
    })
    return result;
  } catch (err) {
    throw err
  }
}



export { addProductToCartQuery }