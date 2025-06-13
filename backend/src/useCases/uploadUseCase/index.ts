import { ImageRepository } from "../../repositories/implementations/image.implements";
import { UploadImageController } from "./upload.controller";
import { UploadImageUseCase } from "./upload.useCase";


export const UploadImageControllerFactory = new UploadImageController(
    new UploadImageUseCase( new ImageRepository())
)