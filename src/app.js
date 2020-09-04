import express from "express";
import indexRouter from "./routes/index.js";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import dotenv from "dotenv";
dotenv.config();

mongoose.connect(process.env.DB_URL,{useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true})

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use("/",indexRouter);

export default app;