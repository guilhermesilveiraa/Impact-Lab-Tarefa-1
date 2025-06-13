import { Image } from "../../entities/images";
import { UploadImageUseCase } from "./upload.useCase";
import {Response, Request}  from "express"
import path from "path";

export class UploadImageController {
    constructor(
        private readonly uploadImageUseCase: UploadImageUseCase
    ) {}

    async handle( req: Request, res: Response): Promise<any> {
        
        try {
            if(!req.file) return res.status(400).json({error:"Arquivo não submetido"})
            console.log("=======> ~ UploadImageController ~ handle ~ req.file:", req.file)
            
            const image = Image.create({
                fileName: req.file.originalname,
                mimeType: req.file.mimetype,
                sizeInBytes: req.file.size
            })
                

            if(!image.isValid()) return res.status(400).json({error: "Imagem inválida"})
            
                
            const filePath = path.join("uploads", `${image.props.fileName}`)
                
            await this.uploadImageUseCase.execute(image, filePath, req.file.buffer)


            return res.status(201).json({
                message: "Imagem submetida com sucesso",
                id: image.props.id,
                name: image.props.fileName,
                size: image.props.sizeInBytes,
            })
        } catch(err: any) {
            return res.status(500).json({error: err.message || "Internal server error"})
        }
    }
}