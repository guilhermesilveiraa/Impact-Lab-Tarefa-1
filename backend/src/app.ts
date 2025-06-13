import express from "express";
import { imagesRoutes } from "./routes/images.routes";
import { METHODS } from "http";
import cors from "cors"


const app =  express()

app.use(cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
    credentials: true
}))

app.use(express.json())

app.use("/api", imagesRoutes)

export default app