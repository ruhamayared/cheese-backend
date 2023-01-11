import mongoose from "mongoose"
import dotenv from "dotenv"

dotenv.config()

const DATABASE_URL = process.env.DATABASE_URL ?? "mongodb://localhost:27017/default"

//Connect to database
mongoose.connect(DATABASE_URL)

//Connection messages
mongoose.connection
  .on("open", () => console.log(`Connected to mongo db`))
  .on("close", () => console.log(`Disconnected from mongo db`))
  .on("error", (error) => console.log(error))

export default mongoose
