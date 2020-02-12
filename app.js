import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import { localsMiddleware } from "./middleware";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";
import globalRouter from "./routers/globalRouter";
import routers from "./routers";
import userController from "./controllers/userController";
import videoController from "./controllers/videocontroller";

const app = express();


app.set("view engine", "pug");
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet());
app.use(morgan("dev"));


app.use(localsMiddleware);


app.use("/", globalRouter);
app.use(routers.users, userRouter);
app.use(routers.video, videoRouter);

export default app;