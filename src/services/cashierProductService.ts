import { getCashierProductQuery } from "../queries/cashierProductQuery";

const getCashierProductService = async () => {
	try {
		const res = await getCashierProductQuery();
		return res;
	} catch (err) {
		throw err;
	}
};

export { getCashierProductService };
