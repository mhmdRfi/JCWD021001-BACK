import express from "express";
const router = express.Router()

import { registerController } from "../controllers/authController";

router.post("/addcashier", registerController);

export default router