import { Request, Response } from "express";
import { getCashierProductService } from "../services/cashierProductService";

const getCashierProductController = async (
	req: Request,
	res: Response
) => {
	try {
		const result = await getCashierProductService();
    // console.log(result);
    
		res.status(200).json({
			message: "Transaction Success",
			data: result,
		});
	} catch (err: any) {
    console.log(err);
		res.status(500).send(err.message);
	}
};


export { getCashierProductController };
