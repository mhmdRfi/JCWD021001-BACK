import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import path from "path"
import dotenv from 'dotenv';

dotenv.config({
    path: path.resolve(__dirname, '../.env'),
  });
  
  
const app = express();
const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log((`server started on port ${port}`));
    
})