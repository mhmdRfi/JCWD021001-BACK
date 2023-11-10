import express  from "express";
const router = express.Router()

import { addProductToCartController } from "../controllers/transactionController"

router.get("/addtocart/:id", addProductToCartController)

export default router; 