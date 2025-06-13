import { Router } from "express";
import { UploadImageControllerFactory } from "../useCases/uploadUseCase";
import { Request, Response } from "express";
import multer from "multer";


const upload = multer()
export const imagesRoutes = Router()

imagesRoutes.post("/upload", upload.single("image"), (req: Request, res: Response) => {
    return UploadImageControllerFactory.handle(req, res)
})