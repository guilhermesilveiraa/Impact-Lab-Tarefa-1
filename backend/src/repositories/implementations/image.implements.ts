import fs from "fs/promises"
import { IImageRepository } from "../IImage.repository";
import { Image } from "../../entities/images";


export class ImageRepository implements IImageRepository {
    async save(image: Image, path: string, fileBuffer: Buffer): Promise<void>{
        await fs.writeFile(path, fileBuffer)
    }
}