import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import path from "path";
import dotenv from "dotenv";
dotenv.config({
	path: path.resolve(__dirname, "../.env"),
});

const app = express();
const port = process.env.PORT || 8000;

app.use(bodyParser.json());
app.use(
    cors({
      // origin: process.env.WHITELISTED_DOMAIN
      //   ? process.env.WHITELISTED_DOMAIN.split(" ")
      //   : undefined,
    })
  );

  import authRouter from "../src/routes/authRouter"
  import userRouter from "../src/routes/userRouter"


  app.use("/auth", authRouter)
  app.use("/user", userRouter)

  app.use("/uploads", express.static(path.join(__dirname, "./public/images")));

app.listen(port, () => {
	console.log(`server started on port ${port}`);
});
