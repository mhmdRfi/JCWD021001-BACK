import {
	getCashierProductQuery,
	getCashierProductPromoQuery,
} from "../queries/cashierProductQuery";

const getCashierProductService = async (
	page: number,
	categoryId: number,
	productName: string
) => {
	try {
		const res = await getCashierProductQuery(
			page,
			categoryId,
			productName
		);
		return res;
	} catch (err) {
		throw err;
	}
};
const getCashierProductPromoService = async () => {
	try {
		const res = await getCashierProductPromoQuery();
		return res;
	} catch (err) {
		throw err;
	}
};

export { getCashierProductService, getCashierProductPromoService };
