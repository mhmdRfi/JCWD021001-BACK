import bcrypt from "bcrypt"
import { registerQuery } from "../queries/authQuery"
import { findUserQuery } from "../queries/userQuery"

const registerService = async (username: string, email: string, password: string) => {
    try{
        const check = await findUserQuery({email, username}) 

        if (check) throw new Error("Email or username has already existed")
        const salt = await bcrypt.genSalt(10);

        const hashPassword = await bcrypt.hash(password, salt)
        const res = await registerQuery (username, email, hashPassword)
    
        return res;
    } catch (err){
        throw err
    }
}

export {registerService}