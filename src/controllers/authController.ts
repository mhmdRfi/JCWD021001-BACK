import {Request, Response} from "express";
import { registerService } from "../services/authServices";

const registerController = async (req: Request, res: Response) => {
    try{
        const { username, email, password } = req.body;
        const result = await registerService (String(username), String(email), String(password))
        
        return res.status(200).json({
            message: "Success",
            data: result,
          });
    } catch (err: any){
        res.status(500).send(err.message);
    }
};

export {registerController}