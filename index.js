import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/user.js";
import {
  errorHandler,
  notFound,
} from "./middlewares/errorHandlingMiddleware.js";
import cookieParser from "cookie-parser";

const app = express();
dotenv.config();

const connectDb = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/utube", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  } catch (error) {
    console.log(error.message);
  }
};

app.use(express.json());
// configure the app to use bodyParser()
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

//Error handling middleware
app.use(errorHandler);
app.use(cookieParser());
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.listen(8800, () => {
  connectDb();
  console.log("server connected in port 8080");
});
