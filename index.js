import  express  from "express";
import dotenv from "dotenv"
import mongoose from "mongoose";
const app = express()
dotenv.config()

const connectDb = async () => {
    try {
      await mongoose.connect('mongodb://localhost:27017/utube', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
    } catch (error) {
      console.log(error.message)
    }
  }
app.listen(8800,()=>{
    connectDb()
    console.log("server connected in port 8080")
})
