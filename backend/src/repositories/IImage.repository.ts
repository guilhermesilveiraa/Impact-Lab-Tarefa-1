import { Image } from "../entities/images"

export interface IImageRepository {
  save(image: Image, path: string, fileBuffer: Buffer): Promise<void>;
}
