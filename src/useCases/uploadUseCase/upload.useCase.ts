import { IImageRepository } from "../../repositories/IImage.repository";
import { Image } from "../../entities/images";

export class UploadImageUseCase {
  constructor(private readonly imageRepository: IImageRepository) {}

  async execute(image: Image, path: string, fileBuffer: Buffer): Promise<void> {
    if (!image.isValid()) {
      throw new Error("Invalid image");
    }

    await this.imageRepository.save(image, path, fileBuffer);
  }
}
