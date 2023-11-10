import { Request, Response } from "express";
import { addProductToCartService } from "../services/transactionService";

const addProductToCartController = async (req: Request , res: Response) => {
  try {
    const { id } = req.params;

    const result = await addProductToCartService( Number(id) );
    res.status(200).json({
      message: "Add Product to Cart Success",
      data: result,
    })
  } catch (err : any) {
    res.status(500).send(err.message)
  }
}

export { addProductToCartController }