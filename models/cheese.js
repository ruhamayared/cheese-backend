import mongoose from "./connection.js"
const { Schema, model } = mongoose

//Cheese Schema
const cheeseSchema = new Schema(
  {
    name: String,
    countryOfOrigin: String,
    image: String,
  },
  { timestamps: true }
)

//Cheese Model
const Cheese = model("Cheese", cheeseSchema)

export default Cheese
