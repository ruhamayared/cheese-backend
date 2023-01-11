import express from "express"
import Cheese from "../models/cheese.js"

const router = express.Router()

const catcher = (res) => (error) => res.status(400).json({ error })

//Index Route -- "/cheese"
router.get("/", async (req, res) => {
  const cheeses = await Cheese.find({}).catch(catcher(res))
  res.json(cheeses)
})

//Show Route -- "/cheese/:id"
router.get("/:id", async (req, res) => {
  const cheese = await Cheese.findById(req.params.id).catch(catcher(res))
  res.json(cheese)
})

//Create Route -- "/cheese"
router.post("/", async (req, res) => {
  const cheese = await Cheese.create(req.body).catch(catcher(res))
  res.json(cheese)
})

//Update Route -- "/cheese/id"
router.put("/:id", async (req, res) => {
  const cheese = await Cheese.findByIdAndUpdate(req.params.id, req.body).catch(catcher(res))
  res.json(cheese)
})

//Delete Route -- "/cheese/id"
router.delete("/:id", async (req, res) => {
  const cheese = await Cheese.findByIdAndRemove(req.params.id).catch(catcher(res))
  res.json(cheese)
})

export default router
