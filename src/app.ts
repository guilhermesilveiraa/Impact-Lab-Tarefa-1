import express from "express";
import { imagesRoutes } from "./routes/images.routes";



const app =  express()

app.use(express.json())

app.use("/api", imagesRoutes)

export default app