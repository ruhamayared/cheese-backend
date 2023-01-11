import express from "express"
import morgan from "morgan"
import cors from "cors"
import dotenv from "dotenv"
import router from "./controllers/cheese.js"

//Get my env variables
dotenv.config()

//Create express app
const app = express()

//Register middleware
app.use(cors())
app.use(morgan("dev"))
app.use(express.json())

//Routes and routers
app.get("/", (req, res) => {
  res.json({ message: "It works!" })
})

app.use("/cheese", router)

//Listener
const PORT = process.env.PORT ?? 4444
app.listen(PORT, () => console.log(`Listening on port ${PORT}`))
