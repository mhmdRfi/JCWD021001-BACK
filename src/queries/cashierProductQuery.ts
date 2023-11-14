import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const getCashierProductQuery = async () => {
	try {
		const result = await prisma.products.findMany();
		return result;
	} catch (err) {
		throw err;
	}
};

export { getCashierProductQuery };
